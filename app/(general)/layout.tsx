import { Navbar } from "@/components";

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello Nested Layout</span>
        {children}
      </main>
    </>
  );
}
