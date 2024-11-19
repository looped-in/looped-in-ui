import type { Metadata } from "next"
import "./globals.css"
import { Open_Sans } from "next/font/google"
import DefaultLayout from "./DefaultLayout"

const fontConfig = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "LoopedIn App",
  description: "Find your builder at LoopedIn",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={fontConfig.className}>
        <div className="h-screen flex flex-col justify-between">
          <DefaultLayout>{children}</DefaultLayout>
        </div>
      </body>
    </html>
  )
}
