const express = require("express");
const path = require("path");
const app = express();
app.post('/api/auth',(req,res)=>{
    res.status(400).json({errors:{global:"Invalid credentials"}});
})
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
//Run the application to the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on ${port}`));