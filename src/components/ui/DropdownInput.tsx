/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import Select, { ActionMeta, SingleValue, components } from "react-select";
import "../../app/select.css";
import { FieldErrorText, FieldHelperText, FieldLabelText } from "./FormHelpers";
import SkeletonLoader from "./Skeleton";

interface OptionType {
  label: string;
  value: string;
}

interface DropdownInpuProps {
  label?: string;
  value?: SingleValue<OptionType>;
  defaultValue?: SingleValue<OptionType>;
  hint?: string;
  error?: string;
  onChange: (
    value: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
  onMenuOpen?: () => void;
  options: OptionType[];
  isLoading?: boolean;
  handleInputChange?: (newValue: string, actionMeta: any) => void;
  placeholder?: string;
  isLoadingFeild?: boolean;
  icon?: ReactNode;
  addText?: string;
  onClick?: () => void;
  [key: string]: any;
}

const DropdownInput = ({
  label,
  value,
  error,
  onChange,
  options,
  hint,
  onMenuOpen,
  defaultValue,
  isLoading = false,
  handleInputChange,
  placeholder,
  isLoadingFeild,
  icon,
  addText,
  onClick,
  disabled,
  ...rest
}: DropdownInpuProps) => {
  return (
    <div className="relative custom-select-field space-y-1" {...rest}>
      {label && (
        <div className="label-container">
          <FieldLabelText label={label} required={rest.required} />
        </div>
      )}
      {isLoadingFeild ? (
        <SkeletonLoader className="w-[7rem] h-[1.2rem] mt-1 rounded" />
      ) : (
        <Select
          options={options}
          components={{
            Menu: (props: any) =>
              customMenu({ ...props, addText, icon, onClick }),
            Option: (props: any) => customOption({ ...props }),
          }}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onMenuOpen={onMenuOpen}
          onInputChange={handleInputChange}
          classNamePrefix="custom-select"
          isLoading={isLoading}
          placeholder={placeholder}
          isDisabled={disabled}
          styles={{
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "" : "inherit",
              position: "relative",
              "&::after": state.isSelected
                ? {
                    content: '"✔"',
                    position: "absolute",
                    top: "30%",
                    right: "0.7rem",
                    color: "#335F32",
                  }
                : {},
            }),
          }}
        />
      )}

      {error && <FieldErrorText error={error} />}
      {hint && !error && <FieldHelperText hint={hint} />}
    </div>
  );
};

export default DropdownInput;

const { Option, Menu } = components;

const customOption = (props: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <Option {...props}>
      <div ref={innerRef} {...innerProps} className="flex flex-col">
        {data?.label && (
          <div className="flex flex-col">
            <h4 className="xSmallText font-semibold text-black">
              {data?.label}
            </h4>
            {data?.description && (
              <p className="text-[#4B4B4B] subTextRegular">
                {data?.description}
              </p>
            )}
          </div>
        )}
      </div>
    </Option>
  );
};

const customMenu = (props: any) => {
  const { addText, icon, onClick } = props;
  return (
    <Menu {...props}>
      <>
        {addText && (
          <div
            className="flex gap-3 pt-3 items-center pl-3 cursor-pointer"
            onClick={onClick}>
            <span>{icon}</span>
            <span className="text-primary subTextBold">{addText}</span>
          </div>
        )}
        {props.children}
      </>
    </Menu>
  );
};
