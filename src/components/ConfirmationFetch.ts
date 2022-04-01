export async function fakeFetch(_: string){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({validate: "valid"});
        }, 2000);
    });
}