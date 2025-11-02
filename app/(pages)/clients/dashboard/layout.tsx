import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <Link href="/dashboard" className="hover:text-blue-300">
          Overview
        </Link>
        <Link href="/dashboard/users" className="hover:text-blue-300">
          Users
        </Link>
        <Link href="/dashboard/settings" className="hover:text-blue-300">
          Settings
        </Link>
        <Link href="/dashboard/reports" className="hover:text-blue-300">
          Reports
        </Link>
      </aside>

      {/* Page content */}
      <section className="flex-1 bg-white p-8">{children}</section>
    </div>
  );
}
