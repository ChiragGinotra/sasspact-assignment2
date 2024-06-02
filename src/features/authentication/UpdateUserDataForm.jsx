import { useState } from "react";

import Button from "../../ui/Button";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateUserDataForm() {
  // const {
  //   user: {
  //     email,
  //     user_metadata: { fullName: currentFullName },
  //   },
  // } = useUser();

  // const { updateUser, isUpdating } = useUpdateUser();

  // const [fullName, setFullName] = useState(currentFullName);
  const [fullName, setFullName] = useState();

  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    // updateUser(
    //   { fullName, avatar },
    //   {
    //     onSuccess: () => {
    //       setAvatar(null);
    //       e.target.reset();
    //     },
    //   }
    // );
    setFullName("");
  }

  function handleCancel() {
    // setFullName(currentFullName);
    setFullName();

    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value="your email" disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          // disabled={isUpdating}
        />
      </FormRow>

      <FormRow isButtonRow={true}>
        <Button
          type="reset"
          variation="secondary"
          // disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
