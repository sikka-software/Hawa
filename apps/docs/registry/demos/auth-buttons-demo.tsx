import { AuthButtons } from "@sikka/hawa/blocks";

export default function AuthButtonsDemo() {
  return (
    <div>
      <AuthButtons
        viaEmail={true}
        viaPhone={true}
        viaApple={true}
        viaGoogle={true}
        viaGithub={true}
        viaTwitter={true}
        viaMicrosoft={true}
      />
    </div>
  );
}
