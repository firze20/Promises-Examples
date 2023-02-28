let cookBeans = (): Promise<string> => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
  }
  
  let steamBroccoli = (): Promise<string> => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
  }
  
  let cookRice = (): Promise<string> => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
  }
  
  let bakeChicken = (): Promise<string> => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken');
     }, 1000);
   });
  }
  
export {cookBeans, steamBroccoli, cookRice, bakeChicken};