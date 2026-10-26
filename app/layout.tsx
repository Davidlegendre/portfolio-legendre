import LayoutGlobalComponent from '@/components/common/layoutComponent.global';
import { Metadata } from 'next';
import Script from 'next/script';
import { externalResources, portfolioIdentity } from '@/lib/constantes';

export const metadata: Metadata = {
  title: `${portfolioIdentity.name} - Portfolio`,
  description: `Portfolio de ${portfolioIdentity.fullName}, proyectos realizados o practicados`,
  icons: {
    icon: [
      { url: externalResources.favicon, rel: 'icon'}
    ],
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script id="mantine-color-scheme" strategy="beforeInteractive">
          {`try {
            var _colorScheme = window.localStorage.getItem("mantine-color-scheme-value");
            var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "auto";
            var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
          } catch (e) {}`}
        </Script>
        <link rel="preconnect" href={externalResources.googleFonts.api} />
        <link rel="preconnect" href={externalResources.googleFonts.static} crossOrigin="anonymous" />
        <link href={externalResources.googleFonts.hankenGrotesk} rel="stylesheet" />
      </head>
      <body style={{overflowX: 'hidden'}}>
        <LayoutGlobalComponent>
         {children}
        </LayoutGlobalComponent>       
      </body>
    </html>
  );
}