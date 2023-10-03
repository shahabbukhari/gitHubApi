import { GithubUserDetails } from "@/helpers/github";
import Image from "next/image";
import React from "react";

function UserDetails(user: GithubUserDetails) {
  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-center p-8">
          <Image
            width={100}
            height={100}
            src={user.avatar_url}
            alt={`${user.login}'s Profile Picture`}
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">
            {user.name || user.login}
          </div>
          <p className="text-gray-600">{user.login}</p>
          <p className="text-gray-600">{user.location}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700">Bio:</p>
          <p className="text-gray-900">{user.bio || "No bio available"}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700">GitHub Profile:</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.html_url}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
