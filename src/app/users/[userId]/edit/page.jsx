import { updateUser } from "@/app/lib/action";
import { getDataById } from "@/app/lib/data";
import { Button, Input, Label,  TextField } from "@heroui/react";
import React from "react";

const EditUserInfo = async ({ params }) => {

  const { userId } = await params;
  const userEdit = await getDataById(userId);
  console.log(userEdit);
  const updateUserDataWithId =async(formData)=>{
    "use server"
    return updateUser(userId,formData)
  }
  return (
    <div>
      edit :{userEdit.name}
      <form action={updateUserDataWithId} className="flex flex-col gap-4">
        <TextField
          className="w-full"
          name="name"
          type="text"
          variant="secondary"
          defaultValue={userEdit.name}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          type="email"
          variant="secondary"
          defaultValue={userEdit.email}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField
          className="w-full"
          name="position"
          type="text"
          variant="secondary"
          defaultValue={userEdit.position}
        >
          <Label>Position</Label>
          <Input placeholder="Enter your Position number" />
        </TextField>

        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button type="submit">Update user</Button>
      </form>
    </div>
  );
};

export default EditUserInfo;
