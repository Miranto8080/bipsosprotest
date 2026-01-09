'use client';
import Sidebar from "./components/SidebarDi";

export default function DistributeurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
          header,
          nav,
          footer {
            display: none !important;
          }
        `}</style>
        <div className="flex flex-col min-h-screen">

          <div className="flex flex-1">
            <Sidebar />

            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
    </>
  );
}
