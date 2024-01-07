import { useEffect, useState } from "react";
import { userDto } from "../types/interface";
import UserTable from "../components/users/userTable";
import UserForm from "../components/users/userForm";
import { getUsers } from "../components/api";

export default function SettingsPage() {
  const [users, setUsers] = useState<userDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchUsers = () => {
    getUsers().then((res) => {
      setUsers(res);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Users</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-2 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "Add user"}
        </button>
      </div>
      <div className="flex">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <UserTable users={users} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <UserForm onFetchUsers={fetchUsers} />
          </div>
        )}
      </div>
    </div>
  );
}
