"use client";
import ReactSelect from "react-select";

type TypeSelectProps = {
  disabled?: boolean;
  label: string;
  value?: Record<string, any>;
  options: Record<string, any>[];
  onChange: (value: Record<string, any>) => void;
};

const Select = ({
  label,
  onChange,
  options,
  disabled,
  value,
}: TypeSelectProps) => {
  return (
    <div className="z-[100]">
      <label
        htmlFor=""
        className="block text-sm font-medium leading-6 text-neutral-100">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          className="text-s"
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: base => ({
              ...base,
              zIndex: 9999,
              color: "rgb(245 245 245)",
              fontSize: "14px",
              ":hover": {
                color: "rgb(112 26 117)",
              },
            }),
          }}
          classNames={{
            control: () => "!text-sm !bg-neutral-900",
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              neutral0: "rgb(23 23 23)",
              primary25: "rgb(23 23 23)",
              primary: "rgb(112 26 117)",
            },
          })}
        />
      </div>
    </div>
  );
};

export default Select;
