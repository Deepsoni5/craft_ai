const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Successfully Logged in",
            user:req.user,
              
          })
    }
    else {
        res.status(403).json({
             error: true,
             message:"Not Authorized",
        })
    }
})

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message:"Log In Failed",
    })
})

router.get('/google/callback',
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect:"/login/failed",
        })
  );

router.get('/google',
  passport.authenticate('google',['profile','email']));

router.get('/github/callback',
    passport.authenticate("github", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect:"/login/failed",
        })
  );

router.get('/github',
  passport.authenticate('github',['profile','email']));

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect( process.env.CLIENT_URL);
})
router.get('/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/login/failed'
}), function (req, res) {
    console.log(req.user)
    res.redirect(process.env.CLIENT_URL) // Successful auth
});

router.get('/discord', passport.authenticate('discord'));



module.exports = router;                