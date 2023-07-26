import Document, { Html, Head, Main, NextScript } from "next/document";
//_app.jsのheadはどこでも使用できるけど、next/documentからインポートするheadは、この特別なdocumentコンポーネントでのみ使用
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
            <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;