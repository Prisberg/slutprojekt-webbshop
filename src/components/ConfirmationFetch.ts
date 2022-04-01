export async function fakeFetch(_: string){

  return new Promise((resolve)=>{

      setTimeout(()=>{

          resolve("valid");

      }, 2000);

  });

}