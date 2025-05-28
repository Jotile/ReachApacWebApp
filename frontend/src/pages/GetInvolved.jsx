import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { toast } from "react-toastify";

function PartnerForm() {
  const [partnerData, setPartnerData] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    types: [],
    mission: "",
    reason: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setPartnerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (type) => {
    setPartnerData((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  const resetForm = () => {
    setPartnerData({
      name: "",
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
      types: [],
      mission: "",
      reason: "",
      comments: "",
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://reachapacservice.azurewebsites.net/submit-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnerData),
      });

      if (res.ok) {
        toast.success("Partner form submitted!");
        resetForm();
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          required
          placeholder="Full Name / Organization *"
          value={partnerData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Contact Person (if applicable)"
          value={partnerData.contactPerson}
          onChange={(e) => handleChange("contactPerson", e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          required
          placeholder="Email Address *"
          value={partnerData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full p-3 border rounded"
        />
        <PhoneInput
          country="ug"
          value={partnerData.phone}
          onChange={(val) => handleChange("phone", val)}
          inputStyle={{
            width: "100%",
            paddingLeft: "48px",
            height: "48px",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <input
        type="url"
        placeholder="Website or Social Media Link"
        value={partnerData.website}
        onChange={(e) => handleChange("website", e.target.value)}
        className="w-full p-3 border rounded"
      />

      <div>
        <label className="block font-medium mb-2">Type of Partnership *</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Medical Support",
            "Educational Programs",
            "Financial Contributions",
            "Volunteering",
            "Capacity Building / Training",
            "Other",
          ].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={partnerData.types.includes(type)}
                onChange={() => handleCheckbox(type)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Brief description of your work/mission *"
        required
        value={partnerData.mission}
        onChange={(e) => handleChange("mission", e.target.value)}
        rows="4"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Why are you interested in partnering with us? *"
        required
        value={partnerData.reason}
        onChange={(e) => handleChange("reason", e.target.value)}
        rows="4"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Any questions or comments?"
        value={partnerData.comments}
        onChange={(e) => handleChange("comments", e.target.value)}
        rows="3"
        className="w-full p-3 border rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 ${
          isSubmitting ? "opacity-60 cursor-wait" : ""
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Partnership Interest"}
      </button>
    </form>
  );
}


export function GetInvolved() {
  const currentYear = new Date().getFullYear();
  const [volunteerData, setVolunteerData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    occupation: "",
    areasOfInterest: [],
    availabilitySeason: "",
    availabilityYear: currentYear.toString(),
    experience: "",
    experienceDetails: "",
    why: "",
    emergencyType: "phone",
    emergencyPhone: "",
    emergencyEmail: "",
    relationship: "",
    resume: null,
  });
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false);

  const handleVolunteerChange = (field, value) => {
    setVolunteerData((prev) => ({ ...prev, [field]: value }));
  };

  const resetVolunteerForm = () => {
    setVolunteerData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      age: "",
      occupation: "",
      areasOfInterest: [],
      availabilitySeason: "",
      availabilityYear: currentYear.toString(),
      experience: "",
      experienceDetails: "",
      why: "",
      emergencyType: "phone",
      emergencyPhone: "",
      emergencyEmail: "",
      relationship: "",
      resume: null,
    });
  };

  const handleVolunteerSubmit = async (e) => {
  e.preventDefault();
  setIsSubmittingVolunteer(true);
  try {
    const formData = new FormData();
    const payload = { ...volunteerData };
    delete payload.resume;
    formData.append("data", JSON.stringify(payload));
    if (volunteerData.resume) {
      formData.append("resume", volunteerData.resume);
    }
    const res = await fetch("https://reachapacservice.azurewebsites.net/submit-volunteer", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      toast.success("Volunteer form submitted!");
      resetVolunteerForm();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Submission failed.");
  } finally {
    setIsSubmittingVolunteer(false);
  }
};


  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-secondary to-accent text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-20"
      >

        {/* Volunteer Form Section */}
        <section className="bg-white/90 p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-primary text-center">Volunteer With Us</h2>
          <form className="space-y-6" onSubmit={handleVolunteerSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={volunteerData.fullName}
                onChange={(e) => handleVolunteerChange("fullName", e.target.value)}
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={volunteerData.email}
                onChange={(e) => handleVolunteerChange("email", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone Number *</label>
              <PhoneInput
                country="ug"
                value={volunteerData.phone}
                onChange={(val) => handleVolunteerChange("phone", val)}
                inputProps={{ required: true }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  height: "48px",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <input
              type="text"
              required
              placeholder="City & Country *"
              value={volunteerData.city}
              onChange={(e) => handleVolunteerChange("city", e.target.value)}
              className="w-full p-3 border rounded"
            />

            <select
              required
              className="w-full p-3 border rounded"
              value={volunteerData.age}
              onChange={(e) => handleVolunteerChange("age", e.target.value)}
            >
              <option value="">Select Age Range *</option>
              <option>Under 18</option>
              <option>18–24</option>
              <option>25–34</option>
              <option>35–44</option>
              <option>45 and above</option>
            </select>

            <input
              type="text"
              required
              placeholder="Occupation / Field of Study *"
              value={volunteerData.occupation}
              onChange={(e) => handleVolunteerChange("occupation", e.target.value)}
              className="w-full p-3 border rounded"
            />

            {/* Areas of Interest */}
            <div>
              <label className="block font-medium mb-2">Areas You're Interested In *</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Medical Services", "Public Health / Community Outreach", "Administrative Support",
                  "Education & Mentorship", "Fundraising & Event Planning", "Logistics & Supplies",
                  "Media & Communications", "Student Internship / Practicum", "Other"
                ].map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={volunteerData.areasOfInterest.includes(interest)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setVolunteerData((prev) => ({
                          ...prev,
                          areasOfInterest: checked
                            ? [...prev.areasOfInterest, interest]
                            : prev.areasOfInterest.filter((i) => i !== interest),
                        }));
                      }}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="grid md:grid-cols-2 gap-6">
              <select
                required
                className="w-full p-3 border rounded"
                value={volunteerData.availabilitySeason}
                onChange={(e) => handleVolunteerChange("availabilitySeason", e.target.value)}
              >
                <option value="">Select Season *</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
              </select>

              <input
                type="number"
                min={currentYear}
                required
                placeholder="Availability Year *"
                value={volunteerData.availabilityYear}
                onChange={(e) => handleVolunteerChange("availabilityYear", e.target.value)}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block font-medium mb-1">Do you have previous volunteer experience?</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="Yes"
                    checked={volunteerData.experience === "Yes"}
                    onChange={(e) => handleVolunteerChange("experience", e.target.value)}
                    className="mr-2"
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="No"
                    checked={volunteerData.experience === "No"}
                    onChange={(e) => handleVolunteerChange("experience", e.target.value)}
                    className="mr-2"
                  /> No
                </label>
              </div>
              {volunteerData.experience === "Yes" && (
                <input
                  type="text"
                  placeholder="Please describe briefly"
                  className="w-full mt-3 p-3 border rounded"
                  value={volunteerData.experienceDetails}
                  onChange={(e) => handleVolunteerChange("experienceDetails", e.target.value)}
                />
              )}
            </div>

            {/* Why Volunteer */}
            <textarea
              placeholder="Why do you want to volunteer with us? (100–250 words)"
              rows="4"
              required
              value={volunteerData.why}
              onChange={(e) => handleVolunteerChange("why", e.target.value)}
              className="w-full p-3 border rounded"
            />

            {/* Emergency Contact */}
            <div>
              <label className="block font-medium mb-1">Emergency Contact Type *</label>
              <select
                value={volunteerData.emergencyType}
                onChange={(e) => handleVolunteerChange("emergencyType", e.target.value)}
                className="w-full p-3 border rounded"
              >
                <option value="phone">Phone Number</option>
                <option value="email">Email Address</option>
              </select>

              {volunteerData.emergencyType === "phone" ? (
                <PhoneInput
                  country="ug"
                  value={volunteerData.emergencyPhone}
                  onChange={(val) => handleVolunteerChange("emergencyPhone", val)}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "48px",
                    height: "48px",
                    borderRadius: "0.5rem",
                    border: "1px solid #ccc",
                  }}
                />
              ) : (
                <input
                  type="email"
                  className="w-full p-3 border rounded mt-2"
                  placeholder="Emergency Contact Email"
                  value={volunteerData.emergencyEmail}
                  onChange={(e) => handleVolunteerChange("emergencyEmail", e.target.value)}
                />
              )}
            </div>

            {/* Relationship */}
            <input
              type="text"
              placeholder="Relationship to Emergency Contact"
              value={volunteerData.relationship}
              onChange={(e) => handleVolunteerChange("relationship", e.target.value)}
              className="w-full p-3 border rounded"
            />

            {/* Resume Upload + Preview */}
            <div>
              <label className="block font-medium mb-1">Attach Resume / CV (optional)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full p-3 border rounded bg-white"
                onChange={(e) => handleVolunteerChange("resume", e.target.files[0])}
              />
              {volunteerData.resume && (
                <div className="mt-2 text-sm">
                  📎 <strong>{volunteerData.resume.name}</strong>{" "}
                  <a
                    href={URL.createObjectURL(volunteerData.resume)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline ml-2"
                  >
                    View
                  </a>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmittingVolunteer}
              className={`w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 ${isSubmittingVolunteer ? "opacity-60 cursor-wait" : ""}`}
            >
              {isSubmittingVolunteer ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </section>

        {/* Donate Section */}
        <section className="bg-yellow-50 p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-primary text-center">Donate</h2>
          <p className="text-lg text-justify">
            Over 80% of Uganda’s population resides in rural areas with limited healthcare access. Your donation helps us fund quarterly medical camps, life-changing surgeries, and educational programs for future healthcare workers.
          </p>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
            <li>Sponsor quarterly medical camps</li>
            <li>Sponsor surgeries (cleft lip, burns, orthopedics, etc.)</li>
            <li>Support training and scholarships for health workers</li>
            <li>Invest in sustainable healthcare infrastructure</li>
          </ul>
          <div className="text-center pt-4">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=WXN6M2WXZE5X8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-opacity-90"
              onClick={() => toast.info("You are being redirected to PayPal.")}
            >
              Donate via PayPal
            </a>
          </div>
        </section>

        {/* Partner Section */}
        <section className="bg-white/90 p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-primary text-center">Partner With Us</h2>

          <PartnerForm />
        </section>
      </motion.div>
    </section>
  );
}



