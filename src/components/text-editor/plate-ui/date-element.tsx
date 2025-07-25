"use client";

import { cn, withRef } from "@udecode/cn";
import { setNode } from "@udecode/plate-common/react";
import { useReadOnly } from "slate-react";

import { Calendar } from "./calendar";
import { PlateElement } from "./plate-element";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export const DateElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const { editor, element } = props;

    const readOnly = useReadOnly();

    const trigger = (
      <span
        className={cn(
          "w-fit cursor-pointer rounded-sm bg-muted px-1 text-muted-foreground",
        )}
        contentEditable={false}
        draggable
      >
        {element.date ? (
          (() => {
            const today = new Date();
            const elementDate = new Date(element.date as string);
            const isToday =
              elementDate.getDate() === today.getDate() &&
              elementDate.getMonth() === today.getMonth() &&
              elementDate.getFullYear() === today.getFullYear();

            const isYesterday =
              new Date(today.setDate(today.getDate() - 1)).toDateString() ===
              elementDate.toDateString();
            const isTomorrow =
              new Date(today.setDate(today.getDate() + 2)).toDateString() ===
              elementDate.toDateString();

            if (isToday) return "Today";
            if (isYesterday) return "Yesterday";
            if (isTomorrow) return "Tomorrow";

            return elementDate.toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
          })()
        ) : (
          <span>Pick a date</span>
        )}
      </span>
    );

    if (readOnly) {
      return trigger;
    }

    return (
      <PlateElement
       ref={ref as React.Ref<HTMLDivElement>}
        className={cn(className, "inline-block")}
        contentEditable={false}
        {...props}
      >
        <Popover>
          <PopoverTrigger asChild>{trigger}</PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              selected={new Date(element.date as string)}
              onSelect={(date) => {
                if (!date) return;

                setNode(editor, element, { date: date.toDateString() });
              }}
              mode="single"
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {children}
      </PlateElement>
    );
  },
);
