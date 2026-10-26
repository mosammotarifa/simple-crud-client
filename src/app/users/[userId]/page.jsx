import { getDataById } from '@/app/lib/data';
import React from 'react';

const UserDetail = async({params}) => {
    const {userId} =await params;
    const user =await getDataById(userId)
    console.log(user)
    return (
        <div>
            <h2> Users Details</h2>
            <h2>{user.name} </h2>
        </div>
    );
};

export default UserDetail;