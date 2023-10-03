interface TextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function TextField({
  label,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  disabled = false,
}: TextFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type={"text"}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default TextField;
