const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Server started at port no. : 3000");
});

//used to parese req.body in express -> PUT or POST
const bodyParser =  require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.get("/", (request,response) => {
    response.send("Hello G");
})

app.post('/api/cars', (request,response) =>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {console.log("Connection Successful!")})
.catch((error) => {console.log("Recieved on error!");})