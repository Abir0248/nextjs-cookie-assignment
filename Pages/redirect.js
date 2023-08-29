// pages/redirect.js
import { NextResponse } from "next/server";

export async function getServerHandler() {
  return new NextResponse.redirect("/set-cookie");
}

export default function RedirectPage() {
  return null;
}
