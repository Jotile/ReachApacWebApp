const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const db = require('./config/firebase');

const upload = multer({ storage: multer.memoryStorage() });
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
      to: 'info@reachapac.org',
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

app.post('/submit-volunteer', upload.single('resume'), async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const volunteerData = { ...data, resumeName: req.file ? req.file.originalname : null };
    await db.collection('volunteers').add(volunteerData);

    // Compose email
    const mailOptions = {
      from: 'reachapac4@gmail.com',
      to: 'info@reachapac.org',
      subject: `New Volunteer Application: ${data.fullName || 'Anonymous'}`,
      html: `
        <h2>New Volunteer Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Occupation:</strong> ${data.occupation}</p>
        <p><strong>Areas of Interest:</strong> ${Array.isArray(data.areasOfInterest) ? data.areasOfInterest.join(', ') : data.areasOfInterest}</p>
        <p><strong>Availability:</strong> ${data.availabilitySeason} ${data.availabilityYear}</p>
        <p><strong>Previous Experience:</strong> ${data.experience}</p>
        <p><strong>Experience Details:</strong> ${data.experienceDetails}</p>
        <p><strong>Why Volunteer:</strong> ${data.why}</p>
        <p><strong>Emergency Contact Type:</strong> ${data.emergencyType}</p>
        <p><strong>Emergency Contact:</strong> ${data.emergencyType === 'email' ? data.emergencyEmail : data.emergencyPhone}</p>
        <p><strong>Relationship:</strong> ${data.relationship}</p>
        ${req.file ? `<p><strong>Resume:</strong> Attached as "${req.file.originalname}"</p>` : ''}
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
              contentType: req.file.mimetype,
            },
          ]
        : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send email', error });
      }
      return res.status(200).json({ message: 'Form submitted and email sent!', info });
    });
  } catch (error) {
    console.error("Submission failed:", error);
    return res.status(500).json({ message: 'Error processing request', error });
  }
});

app.post('/submit-partner', async (req, res) => {
  try {
    const data = req.body;
    await db.collection('partners').add(data);

    const emailBody = `
      <h2>New Partnership Interest</h2>
      <p><strong>Organization / Name:</strong> ${data.name}</p>
      <p><strong>Contact Person:</strong> ${data.contactPerson || 'N/A'}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Website / Social:</strong> ${data.website || 'N/A'}</p>
      <p><strong>Partnership Types:</strong> ${Array.isArray(data.types) ? data.types.join(', ') : data.types}</p>
      <p><strong>Mission Description:</strong> ${data.mission}</p>
      <p><strong>Reason for Interest:</strong> ${data.reason}</p>
      <p><strong>Questions / Comments:</strong> ${data.comments || 'None'}</p>
    `;

    const mailOptions = {
      from: 'reachapac4@gmail.com',
      to: 'info@reachapac.org',
      subject: `New Partnership Submission: ${data.name || 'Unknown'}`,
      html: emailBody,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send email', error });
      }
      return res.status(200).json({ message: 'Partner form submitted and email sent!', info });
    });
  } catch (error) {
    console.error("Partner submission failed:", error);
    return res.status(500).json({ message: 'Error processing request', error });
  }
});
  
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});