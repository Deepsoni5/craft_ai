const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors=require("cors")
const passportSetup=require("./passport")
const app = express();
const authRoute=require("./routes/auth")
require("dotenv").config();
const PORT=process.env.PORT || 5000;


app.use(cookieSession({
    name:"session",
    keys:["deep"],
    maxAge:24*60*60*100
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))

app.use("/auth",authRoute)
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})

