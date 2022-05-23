const express = require("express"); //importing express
const router = express.Router();
//creating app object
const app = express(); //this express function returns app object

const port = 5001; //creating seprate variable for port.

const firstmiddleware = (req, res, next) => {
  console.log("first");
  next(); // this allows to proceed to the next function
};

app.use(firstmiddleware);
const secondmiddleware = (req, res, next) => {
  console.log("second");
  next();
};

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});


app.get("/contact", secondmiddleware, (req, res) => {
  res.send("<h1>Contact Page</h1>");
});
app.get("/career", secondmiddleware, (req, res) => {
  res.send("<h1>Career Page</h1>");
});

3;
app.listen(port); //local server port
