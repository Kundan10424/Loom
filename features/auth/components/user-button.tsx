"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { LogOut, User } from "lucide-react";
import LogoutButton from "./logout-button";
import { useCurrentUser } from "../hooks/use-current-user";

const UserButton = () => {

  const user = useCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={cn("relative rounded-full")}>
          <Avatar>
            <AvatarImage src={user?.image || " "} alt={user?.name || "User"} />
            <AvatarFallback className="bg-gray-500 text-white">
              <User className="text-white" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

    <DropdownMenuContent className="mr-4">
      <DropdownMenuItem>
        <span>
          Hello 👋 {user?.name}
        </span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>
          {user?.email}
        </span>
      </DropdownMenuItem>
      <DropdownMenuSeparator/>
        <LogoutButton>
            <DropdownMenuItem className="cursor-pointer bg-red-500 text-white hover:bg-red-600">
                <LogOut className="h-4 w-4 mr-2 text-shadow-white"/>
                LogOut
            </DropdownMenuItem>
        </LogoutButton>
    </DropdownMenuContent>

    </DropdownMenu>
  );
};

export default UserButton;