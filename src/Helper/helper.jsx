const API=import.meta.env.VITE_API;
const pass=import.meta.env.VITE_pass;
//function to redirect to the original url using short url
export async function getUrl(string){
    try{
        const res=await fetch(`${API}/getUrl/${string}`,{
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
//function to login user
export async function loginUser(details){
    try{
        const res=await fetch(`${API}/login`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "pass":pass
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}
//function to register user
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
//function to forgot password and mail
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
//function to reset password
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
//function to get all urls list
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
//function to add long url
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
//function to add short url
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
//function to activate account
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
//function to get the total number of urls created
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