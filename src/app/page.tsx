import { LuMessagesSquare } from "react-icons/lu";
import AuthForm from "~/app/component/AuthForm";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center bg-neutral-900 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LuMessagesSquare className="mx-auto h-12 w-12 text-neutral-100" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-100">
          Sing in to your account
        </h2>
      </div>
      <AuthForm />
    </main>
  );
}
