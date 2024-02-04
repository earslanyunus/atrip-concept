import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET( request: Request,
  { params }: { params: { slug: string } }){
  
  try{
    const searchText = `${params.slug}:*`
    let { data: countries, error } = await supabase
    .from('countries')
    .select()
    .textSearch('name',searchText)

    if (error) {
      return NextResponse.json({status:500,message:error.message})
      
    }

    if(countries === null ||countries.length===0){
      return NextResponse.json({status:404,message:"Country not found"})
    }
    return NextResponse.json({status:200,data:countries})
    
    
   

  }
  catch(e:any){
    return NextResponse.json({status:500,message:e.message})
  }
  


}