import { User } from "@prisma/client";
import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Avatar = ({ user }: { user: User }) => {
  return (
    <div className="relative">
      <div className="relative inline-block h-9 w-9 ">
        {user?.image ? (
          <Image
            alt="avatar"
            className="h-9 w-9"
            src={user.image}
            width={36}
            height={36}
          />
        ) : (
          <HiOutlineUserCircle className="h-9 w-9 " />
        )}
      </div>
      <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-neutral-900" />
    </div>
  );
};

export default Avatar;
