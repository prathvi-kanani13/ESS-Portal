import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar mx-auto border-none w-full",
        String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "long" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex flex-col items-center", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-2", defaultClassNames.month),
        nav: cn(
          "flex items-center justify-between w-full px-2",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-7 w-7 p-0 aria-disabled:opacity-50 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-7 w-7 p-0 aria-disabled:opacity-50 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center w-full text-base font-[700] text-[#333333]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center gap-1.5",
          defaultClassNames.dropdowns
        ),
        caption_label: cn(
          "select-none font-bold text-md  mt-[-23px]",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse text-center",
        weekdays: cn("flex justify-between w-full", defaultClassNames.weekdays),
        weekday: cn(
          "relative w-[30px] h-[30px] flex items-center justify-center text-gray-500 text-md font-bold select-none text-center",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full justify-between mt-2", defaultClassNames.week),
        day: cn(
          "relative w-[30px] h-[30px] flex items-center justify-center text-md font-medium rounded-md cursor-pointer select-none text-center",
          "hover:bg-gray-100",
          defaultClassNames.day
        ),
        today: cn(
          "border border-gray-300 rounded-md",
          defaultClassNames.today
        ),
        outside: cn(
          "text-gray-400 aria-selected:text-gray-400",
          defaultClassNames.outside
        ),
        disabled: cn("text-gray-400 opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }
          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }
          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()
  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected}
      className={cn(
        "flex items-center justify-center w-[40px] h-[40px] rounded-md text-sm font-medium transition-colors",
        "hover:bg-gray-100",
        "data-[selected=true]:bg-[#FF5630] data-[selected=true]:text-white data-[selected=true]:rounded-md",
        defaultClassNames.day,
        className
      )}
      {...props}
    >
      {day.date.getDate()}
    </button>
  )
}

export { Calendar, CalendarDayButton }
