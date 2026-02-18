const express=require("express");
const app=express();
const ExpressError=require("./ExpressError"); // error class

const checktoken=(req,res,next)=>{
    let{token}=req.query;
    if(token=="giveaccess"){
        next();
    }

    throw new ExpressError(401,"Access denied");
}

app.get("/api",checktoken,(req,res)=>{
    res.send("data");
})

app.get("/random",(req,res)=>{
    res.send("this was random function")
})

// express has bydefault error handler
app.get("/err",(err,req,res)=>{
    abcd=abcd
  
})

 // custom error handler 
//app.use((err,req,res,next)=>{
     console.log("******ERROR*****");
  //    next(); // if , we will not pass the err as a argument in next so it will not call the next error handler middleware 
     //next(err); // iska matlab ki mai error handle kr chuka hu , ab agge tum karo (jo bhi custom error handler middleware hoga  ya express ka default error handler chalega)

   //   res.send(err); //its output: {"status":401,"message":"Access denied"}
//})


app.use((err,req,res,next)=>{
    let {status, message}=err;
    res.status(status).send(message) // show the actual message (ouput:Access denied)
})


    // THIS MIDDLEWARE ONLY FOR UNDERSTANDING THE CONCEPT
// app.use((err,req,res,next)=>{
//      console.log("******ERROR 2 middleware*****");
//      next(err);
      
// })
 
/*     IN SUMMARY
    next(): iska mtlb ki jo middleware error handle nahi kar raha hai usko call karo
    next(err): iska mtlb ki jo middleware error handle  kar raha hai usko call karo
: */




// app.use((req,res)=>{
//     res.status(404).send("page not found");
// })


app.listen(8080,()=>{
    console.log("server is working on 8080 port");
    
})