import Document, { Html, Head, Main, NextScript } from 'next/document'
import Background from '../layouts/NavBar/ThemeToggle/Background'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets/logos/bamboobi.webp"
          />
        </Head>
        <Background>
          <Main />
          <NextScript />
        </Background>
      </Html>
    )
  }
}

export default MyDocument