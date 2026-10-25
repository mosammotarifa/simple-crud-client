import React from "react";
import { getData } from "../lib/data";
import UsersTable from "@/component/UsersTable";

const UsersPage = async () => {
  const users = await getData();
  console.log(users);
  return (
    <div>
      users Managment: {users.length}
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
