import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="font-work-sans text-red-500 font-semibold text-xl"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
}
