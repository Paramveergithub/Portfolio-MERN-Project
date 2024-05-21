// create api
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

dotenv.config();

// transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,  // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async(req, res) => {
    const {name, email, msg} = req.body;
    console.log(name, email, msg);

    // validation  
    if(!name || !email || !msg){
      return res.status(500).send({
        success: false,
        message : "Please enter all fields",
      })
    }
    
    // email matter 
    var mailOption = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject:"Regarding Mern Portfolio App",
      html: `
      <h5>Detail Information</h5>
      <ul>
        <li><p>Name :- ${name}</p></li>
        <li><p>Email :- ${email}</p></li>
        <li><p>Message :- ${msg}</p></li>
      </ul>`
    };

    transporter.sendMail(mailOption, function(err, info){
      if(err){
        console.log(err);
      }else{
        return res.status(500).send({
          success: true,
          message : "Email sent successfully"
        })
      }
    });
}); 

module.exports = {sendEmail};
