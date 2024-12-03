"use client";

import { cn } from "@/utils/classname";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SingleValue } from "react-select";
import DropdownInput from "./DropdownInput";
import { buttonVariants } from "./Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [month, setMonth] = React.useState(new Date());

  const handleMonthChange = (
    selectedOption: SingleValue<{ label: string; value: string }>
  ) => {
    if (selectedOption) {
      const newMonth = selectedOption.value;
      const updatedMonth = new Date(month.setMonth(Number(newMonth)));
      setMonth(new Date(updatedMonth));
    }
  };

  const handleYearChange = (
    selectedOption: SingleValue<{ label: string; value: string }>
  ) => {
    if (selectedOption) {
      const newYear = selectedOption.value;
      const updatedYear = new Date(month.setFullYear(Number(newYear)));
      setMonth(new Date(updatedYear));
    }
  };

  const years = Array.from({ length: 10 }, (_, index) => {
    const year = new Date().getFullYear() - 5 + index;
    return { label: year.toString(), value: year };
  });

  const months = Array.from({ length: 12 }, (_, index) => ({
    label: new Date(0, index).toLocaleString("default", { month: "long" }),
    value: index,
  }));

  const currentMonthOption = months.find((m) => m.value === month.getMonth());
  const currentYearOption = years.find((y) => y.value === month.getFullYear());

  return (
    <div className="relative">
      <div className="grid grid-cols-2 space-x-2 px-3">
        <DropdownInput
          value={
            currentMonthOption && {
              label: currentMonthOption?.label,
              value: currentMonthOption?.value.toString(),
            }
          }
          onChange={handleMonthChange}
          options={months.map((month) => ({
            ...month,
            value: month.value.toString(),
          }))}
          placeholder="Month..."
        />
        <DropdownInput
          value={
            currentYearOption && {
              label: currentYearOption?.label,
              value: currentYearOption?.value.toString(),
            }
          }
          onChange={handleYearChange}
          options={years.map((month) => ({
            ...month,
            value: month.value.toString(),
          }))}
          placeholder="Year..."
        />
      </div>
      <DayPicker
        month={month}
        onMonthChange={setMonth}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          root: "p-3",
          months: "flex flex-col",
          month: "space-y-4",
          month_caption: "flex justify-center pt-1 relative items-center",
          dropdowns: "flex items-center gap-4 w-full",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          button_previous: cn(
            buttonVariants({ variant: "ghost" }),
            "h-7 w-7 bg-transparent rounded-md border border-mid-grey p-0 opacity-50 hover:opacity-100 absolute left-4 top-3 z-10"
          ),
          button_next: cn(
            buttonVariants({ variant: "ghost" }),
            "h-7 w-7 bg-transparent rounded-md border border-mid-grey p-0 opacity-50 hover:opacity-100 absolute right-4 top-3 z-10 "
          ),
          month_grid: "w-full border-collapse space-y-1",
          weekdays: "flex",
          weekday:
            "text-black font-semibold rounded-md w-full text-center font-normal text-[0.8rem]",
          week: "flex w-full mt-2",
          day: "w-full h-9 mx-[3px] flex items-center justify-center text-center text-sm p-0 relative rounded-md focus-within:relative focus-within:z-20",
          day_button: cn(
            "h-9 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-mid-grey rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          ),
          range_end: "range-end",
          selected:
            "bg-primary text-white hover:primary hover:text-white focus:bg-primary focus:text-white [&>button]:hover:bg-primary [$>button]:hover:text-white [&>button]:focus:bg-primary [$>button]:focus:text-white",
          today: "border border-mid-grey",
          outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-mid-grey/50 aria-selected:text-black aria-selected:opacity-30",
          disabled: "text-light-grey opacity-50",
          range_middle: "aria-selected:bg-mid-grey aria-selected:text-black",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: (props) => {
            if (props.orientation === "left") {
              return <BiChevronLeft {...props} />;
            }

            return <BiChevronRight {...props} />;
          },
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
