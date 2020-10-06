const express = require("express");
const App = express();
const connectDB = require("./db/connection");
const cors= require('cors')
const UserRoutes= require('./routes/userroutes')




connectDB();
const Port = process.env.Port || 8081;

App.use(cors())
App.use(express.json({extended:false}));
App.use('/api/v1',UserRoutes)
App.get('/',(req,res)=>{
    res.status(200).send({message:"welcome to me2love backend servers"})
})
App.listen(Port, (err, successs) => {
  if (err) throw err;
  console.log(`server running on port ${Port}`);
});
