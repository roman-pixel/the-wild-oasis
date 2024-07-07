import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import Spinner from "../../ui/Spinner";

import { useValidToken } from "./useValidToken";
import { useUpdatePassword } from "./useUpdatePassword";

function PasswordResetForm() {
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token_hash");
  const { updatePassword, isUpdating } = useUpdatePassword();

  const { isTokenValidLoading, isTokenValidError, tokenValidError } =
    useValidToken(token);

  if (isTokenValidLoading) return <Spinner />;
  if (isTokenValidError) {
    console.error(tokenValidError.message);
    toast.error(tokenValidError.message);
    navigate("/login");
  }

  function onSubmit({ password }) {
    updatePassword(
      { password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isUpdating}>
          {!isUpdating ? "Continue" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default PasswordResetForm;
