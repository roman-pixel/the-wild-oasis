import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

import { useRecovery } from "./useRecovery";

function RecoveryForm() {
  const [email, setEmail] = useState("");

  const { recovery, isPending } = useRecovery();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;
    recovery(
      { email },
      {
        onSettled: () => {
          setEmail("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isPending}>
          {!isPending ? "Reset password" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium" $variation="inline" as={Link} to="/login">
          &larr; Go back
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default RecoveryForm;
