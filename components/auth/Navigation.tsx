"use client";

import UserNavigation from "@/components/auth/UserNavigation";
import { Button } from "@/components/us/button";
import { User } from "@prisma/client";
import Link from "next/link";

interface NavigationProps {
  user: User | null
}

// ナビゲーション
const Navigation = ({ user }: NavigationProps) => {
  return (
    <header className="shadow-lg shadow-gray-100 mb-10">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between px">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          T3Stack入門
        </Link>

        {user ? (
          <UserNavigation user={user} />
        ) : (
          <div className="flex items-center space-x-1">
            <Button asChild variant="ghost" className="font-bold">
              <Link href="/login">ログイン</Link>
            </Button>
            <Button asChild variant="default" className="font-bold">
              <Link href="/signup">新規登録</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
