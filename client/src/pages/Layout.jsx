import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-700">
        <h1
          onClick={() => navigate("/")}
          className=" text-neutral-300 w-32 sm:w-44 cursor-pointer text-4xl font-extrabold"
        >
          Hub<span className=" text-[#4285F4]">.</span>ai
        </h1>
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden bg-black"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-black text-white">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
