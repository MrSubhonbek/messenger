"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TypeMessageInputProps = {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  placeholder?: string;
  type?: string;
};
const MessageInput = ({
  errors,
  id,
  register,
  placeholder,
  required,
  type,
}: TypeMessageInputProps) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="w-full bg-neutral-900 px-4 py-2 font-light text-neutral-100 focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
