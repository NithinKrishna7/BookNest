import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiUser,
  HiViewBoards,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import img from "../../src/assets/profile.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import MobileDashboard from "./MobileDashboard";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Sidebar
        aria-label="Sidebar with content separator example"
        className="hidden md:block  "
      >
        <Sidebar.Logo
          href="/"
          img={img}
          className="w-10 h-10 rounded-full"
          imgAlt="Flowbite logo"
        >
          <p className="font-belanosima tracking-wider text-2xl">
            {user?.email
              ? user.email.split(/[0-9]/)[0].charAt(0).toUpperCase() +
                user.email.split(/[0-9]/)[0].slice(1).toUpperCase()
              : "Demo User"}
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup className="font-hamone text-base">
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              <p>Dashboard</p>
            </Sidebar.Item>
            {/* <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              <p>Upload Book</p>
            </Sidebar.Item>

            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              <p>ManageBooks</p>
            </Sidebar.Item> */}
            <Sidebar.Item href="#" icon={HiUser}>
              <p>Users</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              <p>Products</p>
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              <p>Log out</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup className="font-hamone text-base">
            <Sidebar.Item href="#" icon={HiChartPie}>
              <p>Upgrade to Pro</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              <p>Documentation</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiSupport}>
              <p>Help</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="md:hidden">
        <MobileDashboard />
      </div>
    </div>
  );
};

export default SideBar;
