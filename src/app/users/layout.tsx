import getUsers from "~/actions/getUsers";
import Sidebar from "~/components/Sidebar";
import UserList from "./component/UserList";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
