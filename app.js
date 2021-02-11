const  express = require ("express")
const app= express()
const cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/login", (req,res)=> {

    console.log(req)

    res.json({status:"logado com sucesso"})

} )
module.exports=app
