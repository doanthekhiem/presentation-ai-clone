import React from "react";

import { withRef } from "@udecode/cn";
import { useOutdentButton } from "@udecode/plate-indent/react";

import { Icons } from "@/components/text-editor/icons";

import { ToolbarButton } from "./toolbar";

export const OutdentToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const { props } = useOutdentButton();

    return (
      <ToolbarButton ref={ref as React.Ref<HTMLButtonElement>} tooltip="Outdent" {...props} {...rest}>
        <Icons.outdent />
      </ToolbarButton>
    );
  },
);
