import { AuthButtons, ResetPasswordForm } from "@sikka/hawa/blocks";

export default function AuthButtonsDemo() {
  return (
    <div>
      <ResetPasswordForm
        sent={false}
        handleResetPassword={() => console.log("resetting password")}
        handleRouteToRegister={() =>
          console.log("redirecting the user to register")
        }
      />
    </div>
  );
}
