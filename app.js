const express = require("express");
let morgan = require("morgan");

const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const Blog = require("./models/Blog");
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//   res.sendFile('./cleanServer/home.html', { root: __dirname })
// })

// app.get('/', (req, res) =>{
//   res.render('home', {
//     name : "G Lay",
//     age : 23
//   })
// })

//logging
// app.use((req,res,next) =>{
//   console.log(`${req.method} ${req.originalUrl} --`);
//   next();
// })

// let logger = (req,res,next) =>{
//    console.log(`${req.method} ${req.originalUrl} --`);
//    next();
//  }

//With every setup finished for example, if database setup finished, the server should respond
let mongoURL =
  "mongodb+srv://sawglay2_db_user:Hmh77001@cluster0.stuhbwx.mongodb.net/?appName=Cluster0";
mongoose.connect(mongoURL).then(() => {
  console.log("Connected to db");
  app.listen(3000, () => {
    console.log("App is running on port 3000");
  });
});

app.set("views", "./views"); //middleware
app.set("view engine", "ejs"); //middleware
app.use(expressLayouts);
app.set("layout", "layouts/defaults");

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/add-blog", async (req, res) => {
  let blog = new Blog({
    title: "blog title 3",
    intro: "blog intro 3",
    body: "blog body 3",
  });

  await blog.save(); //await -> async
  res.send("blog saved");
});


app.get("/", async (req, res) => {
  res.redirect("/blogs");
});


app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

//Redirect
app.get("/contact-us", (req, res) => {
  res.redirect("contact");
});

//404 Page
//Express, Route with Order is important
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404 not found",
  });
});

// app.listen(3000, () => {
//   console.log('app is running on port 3000');

// })
