export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hello Nested Layout</span>
      {children}
    </main>
  );
}
