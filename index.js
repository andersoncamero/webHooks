const express = require("express")

const app = express()
app.use(express.json())
const PORT = 3000

app.post("/hook", (req, res)=>{
    console.log(req.body);
    res.status(200).end()
})

app.listen(PORT, ()=> console.log(` server listen in port: ${PORT}`));
