import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Prim News Co.</title>
      </head>
      <body className="dark:bg-gray-100 bg-zinc-900 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
