import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { i18nConfig } from "../../i18n"; // Import your i18n config

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const cache = createCache();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const style = extractStyle(cache, true);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style dangerouslySetInnerHTML={{ __html: style }} />
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // Ensure locale is a string (not an array)
    const currentLocale =
      typeof this.props.__NEXT_DATA__.query.locale === "string"
        ? this.props.__NEXT_DATA__.query.locale
        : i18nConfig.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
