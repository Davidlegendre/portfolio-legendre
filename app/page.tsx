import { redirect } from "next/navigation";
export default function Page() {
  redirect("/home");

  return (
    <div>
      <h1>Welcome to dasdsad sd the Home Page</h1>
      <p>This is a protected route.</p>
    </div>
  );
}
