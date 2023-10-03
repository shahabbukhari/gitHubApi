import { GithubUser } from "@/helpers/github";
import { useEffect, useState } from "react";
import TextField from "./TextField";

interface NewUserFormProps {
  onSubmit: (user: GithubUser) => void;
  data?: GithubUser;
  viewOnly?: boolean;
}

const initialState = {
  avatar_url: "",
  id: 0,
  login: "",
  node_id: "",
  type: "",
};

function NewUserForm({ onSubmit, data, viewOnly = false }: NewUserFormProps) {
  const [formData, setFormData] = useState<GithubUser>(initialState);

  console.log(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <div>
      <TextField
        label="User Name"
        value={formData.login}
        name="login"
        placeholder="Enter your username"
        onChange={handleChange}
        disabled={viewOnly}
      />
      <TextField
        label="Node ID"
        value={formData.node_id}
        name="node_id"
        placeholder="Enter your node id"
        onChange={handleChange}
        disabled={viewOnly}
      />
      <TextField
        label="Type"
        value={formData.type}
        onChange={handleChange}
        name="type"
        placeholder="Enter your type"
        disabled={viewOnly}
      />
      {!viewOnly && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full
      text-center w-full  
      "
          onClick={handleSubmit}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default NewUserForm;
