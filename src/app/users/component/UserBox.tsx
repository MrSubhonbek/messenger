"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Avatar from "~/components/Avatar";

const UserBox = (user: User) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", {
        userId: user.id,
      })
      .then(data => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [user, router]);

  return (
    <div
      className="relative flex w-full cursor-pointer items-center space-x-3 p-3 text-neutral-100 transition-all hover:bg-neutral-950 hover:text-fuchsia-900"
      onClick={handleClick}>
      <Avatar user={user} />
      <div className="min-w-0 flex-1 hover:text-fuchsia-900">
        <div className="focus:outline-none">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-sm font-medium ">{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
