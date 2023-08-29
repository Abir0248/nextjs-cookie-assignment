import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Cookie-Based Web App Assignment</h1>
      <ul className="list-disc ml-8">
        <li className="my-2">
          <Link href="/set-cookie">Set Cookie</Link>
        </li>
        <li className="my-2">
          <Link href="/read-cookie">Read Cookie</Link>
        </li>
        <li className="my-2">
          <Link href="/redirect">Redirect Example</Link>
        </li>
      </ul>
    </div>
  );
}
