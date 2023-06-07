"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TypeInputProps = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
};

const Input = ({
  disabled,
  errors,
  id,
  label,
  register,
  required,
  type,
}: TypeInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-neutral-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `form-input block w-full border-0 bg-neutral-900 py-1.5 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-100 
            placeholder:text-neutral-500 focus:ring-inset focus:ring-fuchsia-900 sm:text-sm sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "cursor-default opacity-50"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
