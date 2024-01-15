import { API } from "./api";
//redirection
export async function getUrl(string){
    try{
        const res=await fetch(`http://localhost:9000/getUrl/${string}`,{
            method:"GET",   
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting getUrl",error);
    }
}
export async function loginUser(details){
    try{
        const res=await fetch(`${API}/login`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}
export async function registerUser(details){
    try{
        const res=await fetch(`${API}/register`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}
export async function forgotPassword(details){
    try{
        const res=await fetch(`${API}/forgot`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error forgot password",error);
    }
}
export async function resetPassword(details,id){
    try{
        const res=await fetch(`${API}/reset/${id}`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error reset password",error);
    }
}

export async function getAllUrls(){
    try{
        const res=await fetch(`${API}/getUrl`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting all urls",error);
    }
}
export async function addUrl(details){
    try{
        const res=await fetch(`${API}/addUrl`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding long urls",error);
    }
}
export async function shortUrl(details){
    try{
        const res=await fetch(`${API}/shortUrl`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error creating short url",error);
    }
}
export async function activateAccount(id){
    try{
        const res=await fetch(`${API}/activation/${id}`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error activating account",error);
    }
}
export async function totalCount(){
    try{
        const res=await fetch(`${API}/count`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting total count",error);
    }
}