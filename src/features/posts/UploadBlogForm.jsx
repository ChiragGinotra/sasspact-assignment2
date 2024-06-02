import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UploadBlogForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  function onSubmit() {
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Post Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          {...register("title", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Post Body" error={errors?.postBody?.message}>
        <textarea
          id="postBody"
          className="w-full h-32 border border-grey-300 bg-grey-0 rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          autoComplete="new-password"
          {...register("postBody", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow isButtonRow={true}>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button type="submit">Add post</Button>
      </FormRow>
    </Form>
  );
}

export default UploadBlogForm;
