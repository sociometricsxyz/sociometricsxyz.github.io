import Footer from "@shared/Footer";
import Header from "@shared/Header";
import theme from "@theme";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import Head from "./Head";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary fallback={null}>
          <Header />
        </ErrorBoundary>
        <div>
          {children}
        </div>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default Layout;
