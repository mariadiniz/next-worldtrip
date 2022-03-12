import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    gray: {
      "700": "#47585B",
    },
    yellow: {
      "500": "#FFBA08",
    }
  },
  styles: {
    global: {
      body: {
        color: "gray.700",
      },
    },
  },
});
