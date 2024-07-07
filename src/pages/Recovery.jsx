import RecoveryForm from "../features/authentication/RecoveryForm";
import LoginLayout from "../ui/LoginLayout";
import Logo from "../ui/Logo";

function Recovery() {
  return (
    <LoginLayout>
      <Logo />
      <RecoveryForm />
    </LoginLayout>
  );
}

export default Recovery;
