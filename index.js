
import express from "express"

const port = 3000;
const app = express();



app.get("/",(req,res,next) =>{
    const d = new Date("December 15, 2023 10:09:00");
    let day = d.getDay();

    var type = "its a weekday"
    var adv = "work hard"
    
    if(day === 0 || day === 6){
        type = "its weekend"
        adv = "have fun"
    } 
    
    
    
    
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
      });
    })

 

app.listen(port,(res,req) =>{
    console.log(`Listening on port ${port}`);
})