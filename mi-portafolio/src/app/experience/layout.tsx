
import type { Metadata } from 'next'

export const metadata: Metadata = {
  generator:'Next.js',
  applicationName:'Gabriel Campos - Portafolio',
  creator:'Gabriel Campos',
  title: 'Gabriel Campos - Experiencia',
  description: 'Portafolio de proyectos - Gabriel Campos - Desarrollador Web Full Full Stack',
  keywords:'Desarrollador, Desarrollador Web, Desarrollador Web Full Stack, Full Stack Developer, Web Developer'
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    Experiencia
        {children}
    </>             
  )
}