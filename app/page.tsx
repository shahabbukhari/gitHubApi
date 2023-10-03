import UsersList from "@/components/UsersList";
import { GithubService } from "@/helpers/github";
import React from "react";

async function Page() {
  return <UsersList />;
}

export default Page;
