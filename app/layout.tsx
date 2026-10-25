import LayoutGlobalComponent from '@/components/common/layoutComponent.global';
import { Metadata } from 'next';
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
    <html lang="es">
      <head>
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