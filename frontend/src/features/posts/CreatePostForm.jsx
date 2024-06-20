import { useForm, useFieldArray } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";

import FormRow from "../../ui/FormRow";

import { useCreatePost } from "./useCreatePost";
import { useEditPost } from "./useEditPost";
import { usePosts } from "./usePosts";


function CreatePostForm({ postToEdit = {}, onCloseModal }) {
  const { isCreating, createPost } = useCreatePost();
  const { isEditing, updatePost } = useEditPost();
  const isWorking = isCreating || isEditing;

  const { _id: editId, ...editValues } = postToEdit;
  const isEditSession = Boolean(editId);

  const { posts } = usePosts();
  const serialNo = posts.length + 1;
 

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
    control,
    setValue,
  } = useForm({
    defaultValues: {
      ...editValues,
      faqs: editValues.faqs?.length
        ? editValues.faqs
        : [{ question: "", answer: "" }],
      keywords: editValues.keywords?.length ? editValues.keywords : [],
    },
  });
  const { errors } = formState;

  const {
    fields: faqFields,
    append: appendFaq,
    remove: removeFaq,
  } = useFieldArray({
    control,
    name: "faqs",
  });

  const {
    fields: keywordFields,
    append: appendKeyword,
    remove: removeKeyword,
  } = useFieldArray({
    control,
    name: "keywords",
  });

 
  const handleAddKeyword = (event) => {
    event.preventDefault();
    const keyword = getValues("newKeyword");
    if (keyword && !keywordFields.some((field) => field.val === keyword)) {
      appendKeyword({ val: keyword });
      setValue("newKeyword", "");
    }
  };

  

  function onSubmit(data) {
   

    const headerImage =
      typeof data.headerImage === "string"
        ? data.headerImage
        : data.headerImage[0];

    // const headerImage = data.headerImage[0];
    const keywords = data.keywords.map((kw) => kw.val).filter((kw) => kw);
    // const keywords = data.keywords
    //   .filter((kw) => kw && kw.value) // Filter out undefined or null keywords
    //   .map((kw) => kw.value.trim()) // Trim whitespace from each keyword
    //   .filter((kw) => kw !== "");
  
    // const keywords = data.keywords.map(kw => kw.value);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("keywords", JSON.stringify(data.keywords));
    // formData.append("keywords", data.keywords);
    formData.append("serialNo", serialNo);
    formData.append("authorName", data.authorName);
    formData.append("content", data.content);
    formData.append("headerImage", data.headerImage); // Assuming headerImage is a File object
    formData.append("faqs", JSON.stringify(data.faqs)); // Convert FAQs array to JSON string
    formData.append("date", data.date);
    // const formData = { ...data, headerImage };

    // console.log("Form data:", formData);
    if (isEditSession)
      updatePost(
        { newPostData: formData, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else {
      
      createPost(
        { ...data, headerImage, keywords, serialNo },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isWorking}
          {...register("title", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Author Name" error={errors?.authorName?.message}>
        <Input
          type="text"
          id="authorName"
          disabled={isWorking}
          {...register("authorName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Header Image" error={errors?.headerImage?.message}>
        <FileInput
          id="headerImage"
          accept="image/*"
          disabled={isWorking}
          {...register("headerImage", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          id="description"
          className="w-full h-32 border border-grey-300 bg-grey-0 rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          disabled={isWorking}
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

    

      <FormRow label="Keywords" error={errors?.keywords?.message}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {keywordFields.map(
              (item, index) =>
                item.val && (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 px-2 py-1 rounded"
                  >
                    <span>{item.val}</span>

                    <button
                      type="button"
                      className="flex pl-[3px] justify-center text-xl hover:text-2xl text-red-500"
                      onClick={() => removeKeyword(index)}
                      disabled={isWorking}
                    >
                      <MdDelete />
                    </button>
                  </div>
                )
            )}
          </div>

          <Input
            type="text"
            id="newKeyword"
            disabled={isWorking}
            {...register("newKeyword")}
          />
          <button
            className="ml-[25%] p-1 w-[50%] text-white rounded-lg bg-blue-600"
            onClick={handleAddKeyword}
            disabled={isWorking}
          >
            Add Keyword
          </button>
        </div>
      </FormRow>

      <FormRow label="Content" error={errors?.content?.message}>
        <textarea
          id="content"
          className="w-full h-32 border border-grey-300 bg-grey-0 rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          disabled={isWorking}
          {...register("content", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="FAQs">
        <div className="flex flex-col  gap-y-3 ">
          {faqFields.map((item, index) => (
            <div
              key={item.id}
              className="p-2 flex flex-col gap-2 border-2 border-grey-100 rounded-lg"
            >
              <div className="flex gap-2 ">
                <label htmlFor={`faqs.${index}.question`}>Question</label>
                <input
                  type="text"
                  required
                  className="w-full border-2 focus:border-blue-300 rounded-md"
                  id={`faqs.${index}.question`}
                  disabled={isWorking}
                  {...register(`faqs.${index}.question`, {
                    required: "This field is required",
                  })}
                />
                {/* {errors.faqs?.[index]?.question && (
                  <span>{errors.faqs[index].question.message}</span>
                )} */}
              </div>
              <div className="flex gap-5">
                <label htmlFor={`faqs.${index}.answer`}>Answer</label>
                <input
                  type="text"
                  required
                  className="w-full border-2 rounded-md focus:border-blue-300 "
                  id={`faqs.${index}.answer`}
                  disabled={isWorking}
                  {...register(`faqs.${index}.answer`, {
                    required: "This field is required",
                  })}
                />
                {/* {errors.faqs?.[index]?.answer && (
                  <span>{errors.faqs[index].answer.message}</span>
                )} */}
              </div>

              <button
                type="button"
                className="flex py-[2px] justify-center text-xl hover:text-2xl text-red-700 bg-red-200 hover:bg-red-300 rounded-sm"
                onClick={() => removeFaq(index)}
                disabled={isWorking}
              >
                <MdDelete />
              </button>
            </div>
          ))}

          <button
            type="button"
            className="ml-[25%] p-1 w-[50%] text-white rounded-lg bg-blue-600"
            onClick={() => appendFaq({ question: "", answer: "" })}
            disabled={isWorking}
          >
            Add FAQ
          </button>
        </div>
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Post" : "Create New Post"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreatePostForm;
