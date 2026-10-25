"use client";
import { forwardRef } from "react";
import { IconType } from "@/lib/constantes";
import { Select, SelectProps, useMantineColorScheme } from "@mantine/core";

export interface SelectorComboboxProps extends Omit<
  SelectProps,
  "data" | "onChange"
> {
  Icon?: IconType;
  data: Array<{ label: string; value: string; disabled?: boolean }>;
  withPortal?: boolean;
  onChange?: (value: string | null) => void;
}

const SelectorCombobox = forwardRef<HTMLInputElement, SelectorComboboxProps>(
  (
    {
      Icon,
      leftSection,
      data,
      onChange,
      withPortal = true,
      maxDropdownHeight = 200,
      ...selectProps
    },
    ref,
  ) => {
    const leftSectionContent = leftSection || (Icon && <Icon size={14} />);

    return (
      <Select
        {...selectProps}
        ref={ref}
        data={data}
        onChange={onChange}
        leftSection={leftSectionContent}
        maxDropdownHeight={maxDropdownHeight}
        scrollAreaProps={{
          type: "always",
          scrollbarSize: 16,
          scrollbars: "y",
        }}
        comboboxProps={{
          withinPortal: withPortal,
          position: "bottom",
          middlewares: {
            flip: true,
            shift: true,
          },
        }}
      />
    );
  },
);

SelectorCombobox.displayName = "SelectorCombobox";

export default SelectorCombobox;
