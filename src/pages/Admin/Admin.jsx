import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { MdExitToApp } from "react-icons/md";
import { toast } from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogOut = () => {
    const storage = JSON.parse(localStorage.getItem("storage"));
    delete storage.token;
    localStorage.setItem("storage", JSON.stringify(storage));
    navigate("/");
    toast.success("Successful Log Out")
  };

  return (
    <div className="flex">
      <div className="w-[400px] h-screen bg-[#454545] p-[20px]">
        <div className="flex items-center gap-[10px] mb-[38px]">
          <FaArrowLeft className="text-[20px] text-white" />
          <h2 className="font-[600] text-[28px] leading-[38px] text-white">
            Admin Dashboard
          </h2>
        </div>
        <NavLink
          className="flex items-center gap-[12px] text-white font-[600] text-[18px] leading-[28px] active_bg rounded-xl p-2 w-[320px]"
          to="/admin/create-product"
        >
          <VscGitPullRequestCreate />
          Create Product
        </NavLink>
        <NavLink
          className="flex items-center gap-[12px] text-white font-[600] text-[18px] leading-[28px] active_bg rounded-xl p-2 w-[320px]"
          to="/admin/manage-product"
        >
          <CiEdit />
          Manage Product
        </NavLink>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-[12px] font-[600] text-[18px] leading-[28px] text-white mt-[700px]"
        >
          <MdExitToApp />
          <span>Log out</span>
        </button>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>

      {showModal && (
        <div onClick={() => setShowModal(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
