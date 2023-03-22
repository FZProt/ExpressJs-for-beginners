const app=require("./app")
const PORT=7777;

app.listen(PORT,()=>{
    for(var a=0; a<100; a++){
        for(var b=0; b<100; b++){
            for(var c=0; c<=a*b; b++){
                console.log("010110");
            }
        }
    }
    console.log(`server at PORT ${PORT}`)
});
