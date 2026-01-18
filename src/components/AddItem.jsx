"use client";

import { useSession } from 'next-auth/react';
import React from 'react'
import NavLink from './buttons/NavLink';

function AddItem() {
    const session = useSession();
    return (
        <div>
            {
                session.status == "authenticated" && (
                    <NavLink href={"/add-item"}>Add-item</NavLink>
                )
            }
        </div>
    )
}

export default AddItem
