"use client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { radiusStyle, uiScale } from "@/lib/constantes";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { GlobalLoader } from "./GlobalLoader";
import NavBarComponent from "./NavBar/Navbar.component";
dayjs.locale("es");

export default function LayoutGlobalComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeMantine = createTheme({
    /** Aquí defines tu tema */
    primaryColor: "gray",
    fontFamily: "Hanken Grotesk, sans-serif",
    defaultRadius: radiusStyle,
    fontSizes: uiScale.fontSizes,
    spacing: uiScale.spacing,
    lineHeights: uiScale.lineHeights,
    headings: {
      // Tamaños de Title order=1..6 — configurable desde uiScale.headingSizes
      sizes: {
        h1: { fontSize: uiScale.headingSizes.h1 },
        h2: { fontSize: uiScale.headingSizes.h2 },
        h3: { fontSize: uiScale.headingSizes.h3 },
        h4: { fontSize: uiScale.headingSizes.h4 },
        h5: { fontSize: uiScale.headingSizes.h5 },
        h6: { fontSize: uiScale.headingSizes.h6 },
      },
    },
    colors: {
      red: [
        "#FFF1F0",
        "#FFCCC7",
        "#FFA39E",
        "#FF7875",
        "#FF4D4F",
        "#F5222D",
        "#CF1322",
        "#A8071A",
        "#820014",
        "#5C0011",
      ],
      gray: [
        "#ffffff", // 0 - casi blanco
        "#f2f2f2", // 1
        "#e5e5e5", // 2
        "#d9d9d9", // 3
        "#bfbfbf", // 4
        "#a6a6a6", // 5
        "#8c8c8c", // 6
        "#595959", // 7
        "#404040", // 8
        "#1f1f1f", // 9 - casi negro
      ],
    },
    components: {
      Paper: {
        styles: {
          root: {
            backgroundColor: "light-dark(#f6f5f2, var(--mantine-color-default))",
          },
        },
      },
      Input: {
        styles: {
          section: {
            zIndex: 0,
          },
        },
      },
      Button: {
        defaultProps: {
          size: uiScale.buttonDefaultSize,
        },
        styles: {
          root: {
            zIndex: 0, // Establece z-index base
            "&:focus": {
              zIndex: "0 !important",
            },
            "&:focusVisible": {
              zIndex: "0 !important",
            },
            "&:hover": {
              zIndex: 0,
            },
          },
        },
      },

      // ─── Tamaño global de Text — configurable desde uiScale.textDefaultSize ──
      Text: {
        defaultProps: {
          size: uiScale.textDefaultSize,
        },
      },

      // ─── Tamaño global de inputs — configurable desde uiScale.inputDefaultSize ─
      TextInput: { defaultProps: { size: uiScale.inputDefaultSize } },
      Select: { defaultProps: { size: uiScale.inputDefaultSize } },
      MultiSelect: { defaultProps: { size: uiScale.inputDefaultSize } },
      Combobox: { defaultProps: { size: uiScale.inputDefaultSize } },
      Textarea: { defaultProps: { size: uiScale.inputDefaultSize } },
      NativeSelect: { defaultProps: { size: uiScale.inputDefaultSize } },
      NumberInput: { defaultProps: { size: uiScale.inputDefaultSize } },
      DateInput: { defaultProps: { size: uiScale.inputDefaultSize } },
      DatePickerInput: { defaultProps: { size: uiScale.inputDefaultSize } },
    },
  });

  return (
    <>
      <MantineProvider
        theme={themeMantine}
        defaultColorScheme="auto"
        withGlobalClasses
        withCssVariables
        cssVariablesResolver={(theme) => ({
          variables: {},
          light: {
            "--mantine-color-text": "#000000",
            "--mantine-color-default": "#f6f5f2",
          },
          dark: {
            "--mantine-color-text": "#ffffff",
          },
        })}
      >
       <NavBarComponent>
        {children}
       </NavBarComponent>
        <GlobalLoader></GlobalLoader>
      </MantineProvider>
    </>
  );
}
