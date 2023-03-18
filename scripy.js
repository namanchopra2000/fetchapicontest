function PromiseAPI1() {
   const p1 =  new Promise((resolve ) => {
      setTimeout(()=>{
         fetch("https://dummyjson.com/posts").then((res)=>res.json())
         .then((data)=> { data.posts.forEach((value) =>{
            document.getElementById('con').innerHTML += `<h1>${value.id}</h1>
            <p>${value.title}</p>` ;
            
         })
      })
      },1000)
      resolve(true);
   })
   p1.then((value)=>{
      if(value==true){
         console.log(value , "Promise 1 is true go for promise 2")
         PromiseAPI2()
      }
   })
}
function  PromiseAPI2(){
   const p2 = new Promise((resolve ) => {
      setTimeout(()=>{
         fetch("https://dummyjson.com/products").then((res)=> res.json())
         .then((data)=> { data.products.forEach((value) =>{
            document.getElementById('pro').innerHTML += `<h1>${value.id}</h1>
            <p>${value.title}</p>` ;
            
         })
      })
   },2000)
   resolve(true);
})
p2.then((value)=>{
   if(value==true){
      console.log(value , "Promise 2 is true go for promise 3")
      PromiseAPI3()
   }
})
}
function  PromiseAPI3() {
   const p3 = new Promise((resolve ) => {
      setTimeout(()=>{
         fetch("https://dummyjson.com/todo").then((res)=> res.json())
         .then((data)=> { data.todos.forEach((value) =>{
            document.getElementById('todo').innerHTML += `<h1>${value.id}</h1>
            <p>${value.todo}</p>` ;
            
         })
      })
   },3000)
   resolve(true);
})
}