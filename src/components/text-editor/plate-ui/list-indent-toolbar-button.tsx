"use client";

import React from "react";

import { withRef } from "@udecode/cn";
import { useEditorRef } from "@udecode/plate-common/react";
import { indentListItems, unindentListItems } from "@udecode/plate-list";
import { IndentIcon, OutdentIcon } from "lucide-react";

import { ToolbarButton } from "./toolbar";

export const ListIndentToolbarButton = withRef<
  typeof ToolbarButton,
  { reverse?: boolean }
>(({ reverse = false, ...rest }, ref) => {
  const editor = useEditorRef();

  return (
    <ToolbarButton
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        reverse ? unindentListItems(editor) : indentListItems(editor);
      }}
      tooltip={reverse ? "Outdent" : "Indent"}
      {...rest}
    >
      {reverse ? <OutdentIcon /> : <IndentIcon />}
    </ToolbarButton>
  );
});
