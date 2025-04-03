const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    auth: {
      user: "reachapac4@gmail.com", 
      pass: "rscfzvoohajwccly",
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: email,
      to: 'otilejacob17@gmail.com',
      subject: `Message from ${name}`,
      text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send email', error });
      }
      res.status(200).json({ message: 'Email sent successfully', info });
    });
});
  
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});