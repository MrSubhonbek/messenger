import { IconType } from "react-icons";

type TypeAuthSocialButtonProps = {
  icon: IconType;
  onClick: () => void;
};

const AuthSocialButton = ({
  icon: Icon,
  onClick,
}: TypeAuthSocialButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" flex w-full items-center justify-center  px-4 py-2 text-neutral-100 shadow-md ring-1 ring-inset ring-neutral-100  hover:text-fuchsia-900 hover:ring-fuchsia-900 focus:ring-fuchsia-900 "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
