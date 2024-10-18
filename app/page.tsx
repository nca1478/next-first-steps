import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Home Page</span>

      <Link className="pt-2" href={"/about"}>
        About Page
      </Link>
    </main>
  );
}
