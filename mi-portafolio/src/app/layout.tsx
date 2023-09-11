import './globals.css'
import type { Metadata } from 'next'
import AppBar from '../components/AppBar'
import { Source_Code_Pro } from 'next/font/google'
export const metadata: Metadata = {
  generator:'Next.js',
  applicationName:'Gabriel Campos - Portafolio',
  creator:'Gabriel Campos',
  title: 'Gabriel Campos - Desarrollador Web Full Stack',
  description: 'Portafolio de proyectos - Gabriel Campos - Desarrollador Web Full Full Stack',
  keywords:'Desarrollador, Desarrollador Web, Desarrollador Web Full Stack, Full Stack Developer, Web Developer'
}
const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400", "500"],
  style:"normal",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={sourceCodePro.className}>
        <AppBar/>
        {children}
      </body>
    </html>
  )
}
