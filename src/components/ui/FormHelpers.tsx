import clsx from "clsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";
import { BsInfoCircle } from "react-icons/bs";

export const FieldLabelText = ({
  label,
  info,
  required = false,
  className,
}: {
  info?: string;
  label: string;
  required?: boolean;
  className?: string;
}) => (
  <span
    className={clsx(
      "inline-flex items-start gap-1 text-body-sm font-bold text-black ",
      {
        " after:content-['*'] after:ml-[1px] after:text-danger": required,
      },
      className
    )}>
    {label}{" "}
    {info && (
      <Tooltip>
        <TooltipTrigger
          onClick={(e) => e.preventDefault()}
          className=" outline-none border-none">
          <BsInfoCircle strokeWidth={0.5} />
        </TooltipTrigger>

        <TooltipContent className=" max-w-sm" side="bottom">
          {info}
        </TooltipContent>
      </Tooltip>
    )}
  </span>
);

export const FieldErrorText = ({ error }: { error: string }) => (
  <p className=" text-body-subtext font-normal text-danger">{error}</p>
);

export const FieldHelperText = ({ hint }: { hint: string }) => (
  <p className=" text-body-subtext font-normal text-charcoal-grey ">{hint}</p>
);
