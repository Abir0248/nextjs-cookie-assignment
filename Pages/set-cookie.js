import { NextResponse } from "next/server";

export async function getServerHandler() {
  return new NextResponse().cookie("theme", "dark");
}

export default function SetCookiePage() {
  return (
    <div className="p-4">
      <h1 className="text-xl">Cookie has been set to theme: dark</h1>
    </div>
  );
}
