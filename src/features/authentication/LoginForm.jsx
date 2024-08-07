import { useState } from "react";
// import { Link } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !captchaToken) return;
    login(
      { email, password, captchaToken },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          setCaptchaToken("");
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
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical type="center">
        <Turnstile
          siteKey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
          onSuccess={(token) => setCaptchaToken(token)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isPending}>
          {!isPending ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      {/* <FormRowVertical>
        {!isPending && (
          <Button size="medium" $variation="inline" as={Link} to={"recovery"}>
            Forgot your password?
          </Button>
        )}
      </FormRowVertical> */}
    </Form>
  );
}

export default LoginForm;
