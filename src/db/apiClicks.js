import supabase from "./supabase";


export async function getClicksForUrls(urlIDs) {
    const {data , error} = await supabase.from("clicks").select("*").in("url_id",urlIDs);
    
    if(error) {
        console.log(error.message)
        throw new Error("Unable to load the clicks");
    }


    return data;

}