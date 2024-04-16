import { getAllMovies } from "@/db/data";
import { NextResponse } from "next/server";

export const GET = async () => {
   const photos = await getAllMovies();

   return NextResponse.json(photos);
}
