import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("auth", request);
}
