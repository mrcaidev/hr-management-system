import "@fontsource/roboto";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import "styles/globals.css";
import { darkTheme } from "themes/darkTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
