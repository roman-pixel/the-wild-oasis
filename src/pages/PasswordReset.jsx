import PasswordResetForm from "../features/authentication/PasswordResetForm";
import Heading from "../ui/Heading";
import LoginLayout from "../ui/LoginLayout";
import Logo from "../ui/Logo";

function PasswordReset() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Reset password</Heading>
      <PasswordResetForm />
    </LoginLayout>
  );
}

export default PasswordReset;
