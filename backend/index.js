const express = require("express");
const passport = require("passport");
const cors = require("cors")
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const app = express();
require("dotenv").config();
const PORT=process.env.PORT || 8000;
require("./database/index")();
const authRoute = require("./routes/auth");
app.use(cookieSession({
    name: "session",
    keys: ['deepsoni'],
    maxAge: 24 * 60 * 60 * 100,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth", authRoute);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})

