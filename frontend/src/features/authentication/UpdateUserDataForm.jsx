import { useState } from "react";

import Button from "../../ui/Button";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: { email, username: currentFullName },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [username, setFullName] = useState(currentFullName);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    updateUser(
      { username },
      {
        onSuccess: () => {
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    // setFullName();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={username}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
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
