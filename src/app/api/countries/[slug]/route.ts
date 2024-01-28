import { NextResponse } from "next/server";
import mysql  from 'mysql2/promise'

export async function GET( request: Request,
  { params }: { params: { slug: string } }){
  
  try{
    
    const connection = await mysql.createConnection({
      host     : process.env.db_host,
      user     : process.env.db_user,
      password : process.env.db_password,
      database:  process.env.db_database
    
    });
    if(!connection) return NextResponse.json({status:500,message:'Error connecting to database'})
    const searchName = params.slug

    const [countriesResults, countriesFields] = await connection.execute(`
      SELECT countries.name, countries.iso2 
      FROM countries 
      WHERE countries.name LIKE ?`, [searchName + '%']); 

    const [statesResults, statesFields] = await connection.execute(`
      SELECT states.name, states.country_name , states.country_code
      FROM states 
      WHERE states.name LIKE ?`, [searchName + '%']); 

    connection.end()

    const results = {
      countries: countriesResults,
      states: statesResults
    }

    return NextResponse.json({message: results})

  }
  catch(e:any){
    return NextResponse.json({status:500,message:e.message})
  }
  


}