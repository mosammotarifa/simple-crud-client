import React from "react";
import { getData } from "../lib/data";
import UsersTable from "@/component/UsersTable";
import { deleteUser } from "../lib/action";
import AddUserModel from "@/component/AddUserModel";
import { createUser } from "../lib/action";

const UsersPage = async () => {
  const users = await getData();

  console.log(users);
  return (
    <div>
      users Managment: {users.length}
        <div className="m-5" >
              <AddUserModel createUser={createUser} />
            </div>
      <UsersTable users={users} deletesigleuser ={deleteUser} />
    </div>
  );
};

export default UsersPage;
