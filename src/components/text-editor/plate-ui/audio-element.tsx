"use client";

import React from "react";

import { cn, withRef } from "@udecode/cn";
import { withHOC } from "@udecode/plate-common/react";
import { useMediaState } from "@udecode/plate-media/react";
import { ResizableProvider } from "@udecode/plate-resizable";

import { Caption, CaptionTextarea } from "./caption";
import { PlateElement } from "./plate-element";

export const MediaAudioElement = withHOC(
  ResizableProvider,
  withRef<typeof PlateElement>(({ children, className, ...props }, ref) => {
    const { align = "center", readOnly, unsafeUrl } = useMediaState();

    return (
      <PlateElement
       ref={ref as React.Ref<HTMLDivElement>}
        className={cn(className, "relative mb-1")}
        {...props}
      >
        <figure
          className="group relative cursor-default"
          contentEditable={false}
        >
          <div className="h-16">
            <audio className="size-full" src={unsafeUrl} controls />
          </div>

          <Caption style={{ width: "100%" }} align={align}>
            <CaptionTextarea
              className="h-20"
              readOnly={readOnly}
              placeholder="Write a caption..."
            />
          </Caption>
        </figure>
        {children}
      </PlateElement>
    );
  }),
);
