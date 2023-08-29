import { NextResponse } from "next/server";

export async function getServerHandler({ req }) {
  const { authorization } = req.headers;

  if (authorization) {
    return NextResponse.next().header(
      "Authorization",
      `Bearer ${authorization}`
    );
  }

  return new NextResponse("Unauthorized").status(401);
}
