import Footer from "@/components/utils/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 bg-[#141819] text-[#ddd]">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
      <Footer />
    </main>
  );
}
