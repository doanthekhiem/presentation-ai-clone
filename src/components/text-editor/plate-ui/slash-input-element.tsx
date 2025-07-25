import { type ComponentType, type SVGProps } from "react";
import { withRef } from "@udecode/cn";
import { type PlateEditor, PlateElement } from "@udecode/plate-common/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { ListStyleType, toggleIndentList } from "@udecode/plate-indent-list";
import { Wand2Icon } from "lucide-react";
import { Icons } from "@/components/text-editor/icons";
import {
  InlineCombobox,
  InlineComboboxContent,
  InlineComboboxEmpty,
  InlineComboboxInput,
  InlineComboboxItem,
} from "./inline-combobox";
import { usePresentationState } from "@/states/presentation-state";
interface SlashCommandRule {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onSelect: (editor: PlateEditor) => void;
  value: string;
  keywords?: string[];
}

const rules: SlashCommandRule[] = [
  {
    icon: Icons.h1,
    value: "Heading 1",
    onSelect: (editor) => {
      editor.tf.toggle.block({ type: HEADING_KEYS.h1 });
    },
  },
  {
    icon: Icons.h2,
    value: "Heading 2",
    onSelect: (editor) => {
      editor.tf.toggle.block({ type: HEADING_KEYS.h2 });
    },
  },
  {
    icon: Icons.h3,
    value: "Heading 3",
    onSelect: (editor) => {
      editor.tf.toggle.block({ type: HEADING_KEYS.h3 });
    },
  },
  {
    icon: Icons.ul,
    keywords: ["ul", "unordered list"],
    value: "Bulleted list",
    onSelect: (editor) => {
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Disc,
      });
    },
  },
  {
    icon: Icons.ol,
    keywords: ["ol", "ordered list"],
    value: "Numbered list",
    onSelect: (editor) => {
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Decimal,
      });
    },
  },
  {
    icon: Wand2Icon,
    keywords: ["ai", "generate", "image", "picture", "photo"],
    value: "Generate AI Image",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSelect: () => {}, // Handled separately
  },
];

export const SlashInputElement = withRef<typeof PlateElement>(
  ({ ...props }, ref) => {
    const { children, editor, element } = props;

    const { setImageGenerationModelOpen } = usePresentationState();
    const handleSelect = (value: string) => {
      const rule = rules.find((r) => r.value === value);
      if (!rule) return;

      if (value == "Generate AI Image") {
        setImageGenerationModelOpen(true);
        console.log("clicked");
      } else {
        rule.onSelect(editor);
      }
    };

    return (
      <>
        <PlateElement
         ref={ref as React.Ref<HTMLDivElement>}
          as="span"
          data-slate-value={element.value}
          {...props}
        >
          <InlineCombobox element={element} trigger="/">
            <InlineComboboxInput />

            <InlineComboboxContent>
              <InlineComboboxEmpty>
                No matching commands found
              </InlineComboboxEmpty>

              {rules.map(({ icon: Icon, keywords, value }) => (
                <InlineComboboxItem
                  key={value}
                  value={value}
                  onClick={() => handleSelect(value)}
                  keywords={keywords}
                >
                  <Icon className="mr-2 size-4" aria-hidden />
                  {value}
                </InlineComboboxItem>
              ))}
            </InlineComboboxContent>
          </InlineCombobox>

          {children}
        </PlateElement>
      </>
    );
  }
);
