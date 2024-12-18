import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="font-work-sans text-red-500 font-semibold text-xl"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
