import { NextResponse } from "next/server";

export async function getServerHandler() {
  return NextResponse.redirect("/set-cookie");
}

export default function RedirectPage() {
  return null;
}
