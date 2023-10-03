"use client";

import React, { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";
import { GithubService, GithubUser } from "@/helpers/github";
import NewUserModal from "./NewUserModal";

function UsersList() {
  const { getAllUsers } = new GithubService();
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [userModal, setUserModal] = useState({
    open: false,
    user: {} as GithubUser,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [viewOnly, setViewOnly] = useState(false);

  const getUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const closeModal = () => {
    setUserModal({
      open: false,
      user: {} as GithubUser,
    });
  };

  const openModal = (user: GithubUser) => {
    setUserModal({
      open: true,
      user,
    });
  };

  const onSave = (user: GithubUser) => {
    if (user.id) {
      const index = users.findIndex((u) => u.id === user.id);
      users[index] = user;
      setUsers([...users]);
    } else {
      setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
    }
    closeModal();
  };

  const onDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const onEdit = (id: number) => {
    const user = users.find((user) => user.id === id);
    setViewOnly(false);
    if (user) {
      openModal(user);
    }
  };

  const onView = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      openModal(user);
      setViewOnly(true);
    }
  };
  let searchTimeout: NodeJS.Timeout;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 400);
  };

  const userCards = useMemo(() => {
    return users
      .filter((user) => {
        if (!searchTerm) return true;
        return user.login.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => (a.login.toLowerCase() > b.login.toLowerCase() ? 1 : -1))
      .map((user) => (
        <UserCard
          {...user}
          key={user.id}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ));
  }, [users, searchTerm]);

  return (
    <div className="px-3 md:lg:xl:px-40 py-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-500">Users</h1>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-3 py-2 w-1/3"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        {userCards}
      </div>

      <button
        onClick={() => openModal({} as GithubUser)}
        className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Add User
      </button>

      <NewUserModal
        open={userModal.open}
        onClose={closeModal}
        onSave={onSave}
        data={userModal.user}
        title={
          userModal.user.id
            ? (viewOnly && "View User") || "Edit User"
            : "Add New User"
        }
        viewOnly={viewOnly}
      />
    </div>
  );
}

export default UsersList;
