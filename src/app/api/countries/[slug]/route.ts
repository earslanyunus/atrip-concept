import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET( request: Request,
  { params }: { params: { slug: string } }){
  
  try{
    const searchText = `${params.slug}:*`
    let { data: countries, error:errorCountry } = await supabase
    .from('countries')
    .select('name,iso3,numeric_code,id')
    .textSearch('name',searchText)
    .limit(5)

    let { data: state, error:errorState } = await supabase
    .from('states')
    .select('name,country_name,id')
    .textSearch('name',searchText)
    .limit(5)

    if (errorCountry || errorState) {

      return NextResponse.json({status:500,message:errorCountry?.message || errorState?.message})
      

      
      
    }

    // if(countries === null ||countries.length===0){
    //   return NextResponse.json({status:404,message:"Country not found"})
    // }
    // if(state === null ||state.length===0){
    //   return NextResponse.json({status:404,message:"State not found"})
    // }
    return NextResponse.json({status:200,data:[...(countries || []), ...(state || [])]})
    
    
   

  }
  catch(e:any){
    return NextResponse.json({status:500,message:e.message})
  }
  


}