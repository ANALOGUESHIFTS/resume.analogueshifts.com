"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RightSidebar({ user, close, logout }) {
  const [pos, setPos] = useState(500);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setPos(0);
    setOpacity(1);
  }, []);

  return (
    <div
      style={{ opacity: opacity }}
      className="z-90 duration-300 w-screen h-[100dvh] fixed -top-1.5 -left-1.5 bg-black/10 flex justify-end"
    >
      <div
        onClick={close}
        className="absolute z-80 w-full h-full top-0 left-0"
      ></div>
      <div
        style={{ transform: `translateX(${pos}px)` }}
        className="bg-white duration-300 h-full w-72 rounded-l-2xl z-90 p-5 flex flex-col"
      >
        <div className="w-full flex items-center gap-2 pb-3 border-b">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center">
            <p className="text-base font-semibold text-black/60">
              {user.email[0].toUpperCase()}
            </p>
          </div>
          <p className="text-xs font-medium text-black/70">{user.email}</p>
        </div>

        <div className="pt-3 h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <Link
              href="/dashboard"
              className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/account"
              className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
            >
              My Account
            </Link>
            <Link
              href="/dashboard/resume"
              className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
            >
              My Resumes
            </Link>
          </div>
          <button
            onClick={logout}
            className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-red-600 text-start"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
