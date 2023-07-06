import { User } from "@prisma/client";

import UserBox from "./UserBox";

const UserList = ({ users }: { users: User[] }) => {
  console.log(users);

  return (
    <aside className="lg-block fixed inset-y-0 left-0 block w-full overflow-y-auto pb-20 lg:left-12 lg:w-80 lg:pb-0 xl:left-20">
      <div className="pl-5">
        <div className="flex-col">
          <div className="py-4 text-2xl font-bold text-neutral-100">People</div>
        </div>
        {users.map(user => (
          <UserBox key={user.id} {...user} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
