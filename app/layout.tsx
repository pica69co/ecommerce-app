import Header from '@/components/Header'
import './globals.css'


export const metadata = {
  title: 'E-Commerce App',
  description: 'Created by Oskar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        {children}
       
        </body>
    </html>
  )
}
