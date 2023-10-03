import { GithubUser } from "@/helpers/github";
import Image from "next/image";
import Edit from "./SvgIcons/Edit";
import Delete from "./SvgIcons/Delete";
import Eye from "./SvgIcons/Eye";

interface UserCardProps extends GithubUser {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

function UserCard({
  avatar_url,
  id,
  login,
  node_id,
  type,
  onDelete,
  onEdit,
  onView,
}: UserCardProps) {
  return (
    <div className="p-10 flex justify-between group md:lg:xl:border-r md:lg:xl:border-b relative hover:bg-slate-50 cursor-pointer">
      <div className="flex gap-3 items-center justify-start">
        <div className="flex justify-center">
          <Image
            width={100}
            height={100}
            src={avatar_url}
            alt="Profile Picture"
            className="w-30 h-30 rounded-full"
            onError={(e) => {
              e.currentTarget.src = "images/dummyImage.png";
            }}
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-blue-500 ">{login}</h2>
          <p className="text-sm text-gray-600">User ID: {id}</p>
          <p className="text-sm text-gray-600">User Type: {type}</p>
          <p className="text-sm text-gray-600">User Node ID: {node_id}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="cursor-pointer" onClick={() => onEdit(id)}>
          <Edit />
        </div>
        <div className="cursor-pointer" onClick={() => onDelete(id)}>
          <Delete />
        </div>
        <div className="cursor-pointer" onClick={() => onView(id)}>
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
