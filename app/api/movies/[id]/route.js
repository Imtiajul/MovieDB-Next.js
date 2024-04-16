import { deleteMovieById, getMovieById, updateMovieTitle } from "@/db/data";
import { NextResponse } from "next/server";

export const GET = async (request, {params:{id}}) => {
   // console.log(typeof(parseInt(id))+'movie Id');
   const movie = await getMovieById(parseInt(id));
   // console.log(movie);
   return NextResponse.json(movie);
}

export const DELETE = async (request, {params: {id}}) =>{
   const response = await deleteMovieById(id)

   return NextResponse.json(response);
}


export const PATCH = async (request, {params: {id}}) =>{
   const formData = await request.formData();
   const title = formData.get('title');
   // console.log(title.get('title'));

   const response = await updateMovieTitle(id, title)

   console.log(response);

   return NextResponse.json(response);

}