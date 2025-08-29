import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-row w-full h-screen items-center justify-center max-w-full mx-auto">
      <SignUp />;
    </div>
  );
}
