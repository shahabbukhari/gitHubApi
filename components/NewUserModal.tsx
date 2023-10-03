import { GithubUser } from "@/helpers/github";
import NewUserForm from "./NewUserForm";

interface NewUserModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: GithubUser) => void;
  data?: GithubUser;
  title: string;
  viewOnly?: boolean;
}

export default function NewUserModal({
  open,
  onClose,
  onSave,
  data,
  title,
  viewOnly,
}: NewUserModalProps) {
  return (
    <>
      <div
        className={`
      ${
        open ? "fixed" : "hidden"
      } z-10 inset-0 overflow-y-auto left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10
      `}
      >
        <div
          className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white
            text-gray-800 shadow-xl relative mx-auto my-auto p-8
        "
        >
          <div
            className="absolute right-0 top-0 cursor-pointer p-4 hover:bg-[#2c3e5034] rounded"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
          <div className="w-full">
            <div className="m-8 max-w-[400px] mx-auto">
              <h1 className="my-4 text-center text-3xl font-bold text-gray-900">
                {title}
              </h1>
              <NewUserForm onSubmit={onSave} data={data} viewOnly={viewOnly} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
