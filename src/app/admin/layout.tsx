import NavigationTab from "@/components/NavigationTab"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/4">
        <NavigationTab />
      </div>

      <div className="w-3/4">{children}</div>
    </div>
  )
}
