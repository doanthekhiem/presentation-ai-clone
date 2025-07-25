"use client";

import React from "react";

import type { TLinkElement } from "@udecode/plate-link";

import { cn, withRef } from "@udecode/cn";
import { useElement } from "@udecode/plate-common/react";
import { useLink } from "@udecode/plate-link/react";

import { PlateElement } from "./plate-element";

export const LinkElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const element = useElement<TLinkElement>();
    const { props: linkProps } = useLink({ element });

    return (
      <PlateElement
       ref={ref as React.Ref<HTMLDivElement>}
        as="a"
        className={cn(
          "font-medium text-primary underline decoration-primary underline-offset-4",
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(linkProps as any)}
        {...props}
      >
        {children}
      </PlateElement>
    );
  },
);
