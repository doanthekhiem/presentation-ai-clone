"use client";

import React from "react";

import { cn, withRef } from "@udecode/cn";
import { PlateLeaf } from "@udecode/plate/react";

export const AILeaf = withRef<typeof PlateLeaf>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateLeaf
       ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          className,
          "border-b-2 border-b-purple-100 bg-purple-50 text-purple-800",
          "transition-all duration-200 ease-in-out",
        )}
        {...props}
      >
        {children}
      </PlateLeaf>
    );
  },
);
