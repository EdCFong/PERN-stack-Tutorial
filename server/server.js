require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use((req, res, next) =>{
 next();
});


//Get all Restaurants
app.get("/getRestaurants", (req, res) => {
  res.status(200).json({
      status: "success",
      data: {
restaurant:["mcdonals", "wendys"]
      }
  })
});

//Get a restaurant 
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params)
})

//Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req)
})





const port = process.env.PORT || 3001;
app.listen(port, () => {
   console.log(`server is up and listening on port ${port}`);
});