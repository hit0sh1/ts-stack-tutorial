"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface UserNavigationProps {
  user: User;
}

// ユーザーナビゲーション
const UserNavigation = ({ user }: UserNavigationProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={user.image || "/default-avatar.png"}
            alt={user.name || "avatar"}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white p-2 w-[300px]" align="end">
        <DropdownMenuItem className="cursor-pointer">
          <div className="break-words min-w-0">
            <div className="mb-2">{user.name || ""}</div>
            <div className="text-gray-500">{user.email || ""}</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/settings/profile">
          <DropdownMenuItem className="cursor-pointer">アカウント設定</DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          onSelect={async (event) => {
            event.preventDefault();
            await signOut({ callbackUrl: "/" });
          }}
          className="text-red-600 cursor-pointer"
        >
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavigation;
