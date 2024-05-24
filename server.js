const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require("./routes/emailRoutes");
const Path = require("path");

const app = express();

// dotenv configuration
dotenv.config();


// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   optionsSuccessStatus: 200,
// };


//middlewares
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(Path.join(__dirname, './personal-portfolio/build')));

// app.use(cors({
//   origin: "http://localhost:3000"
// }))
// signup and login routes
// app.use('/email', emailRoutes);
app.use("/api/v1/portfolio", require("./routes/emailRoutes"));


app.get("*", (req, res)=>{
  res.sendFile(Path.join(__dirname, './personal-portfolio/build/index.html'))
});

// port 
const port  = process.env.PORT || 8080;

// Listen 
app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
})
