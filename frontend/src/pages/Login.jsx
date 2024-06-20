import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

function Login() {
  return (
    <main className="min-h-screen grid grid-cols-[36rem] place-content-center place-items-center gap-[3.2rem] bg-grey-50">
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
