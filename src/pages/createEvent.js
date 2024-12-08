import EventActivitiesInfo from "@/components/CreateEventsInfo/EventActivitiesInfo/EventActivitiesInfo";
import GeneralInfo from "@/components/CreateEventsInfo/GeneralInfo/GeneralInfo";
import ReviewAndSubmit from "@/components/CreateEventsInfo/ReviewAndSubmit/ReviewAndSubmit";
import TicketingInfo from "@/components/CreateEventsInfo/TicketingInfo/TicketingInfo";
import React, { useState } from "react";

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    eventName: "",
    eventDescription: "",
    eventFormat: "online",
    eventType: "meeting",
    gateOpeningTime: "",
    eventStartingTime: "",
    eventEndingTime: "",
    locationUrl: "",
    organizerName: "",
    phone: "",
    email: "",
    address: "",
    // Step 2 data
    activities: [],
    performers: [],
    // Step 3 data
    ticketType: "Regular",
    ticketDetails: "",
    ticketPrice: "",
    currency: "BD",
    includedVAT: false,
    quantity: "",
    maxPurchase: "",
    ageCheck: false,
    nidCheck: false,
    passportCheck: false,
    studentIDCheck: false,
    paymentMethods: [],
    termsAccepted: false,
  });
  const handlePaymentMethodChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      paymentMethods: checked
        ? [...prev.paymentMethods, value]
        : prev.paymentMethods.filter((method) => method !== value),
    }));
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle next and previous buttons
  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      alert("Please complete all required fields.");
    }
  };

  const handlePrevious = () => setStep(step - 1);

  // Step validation logic
  const validateStep = () => {
    if (step === 1) {
      return formData.eventName && formData.email;
    } else if (step === 3) {
      return formData.termsAccepted;
    }
    return true;
  };

  const handleSubmit = () => {
    // Final form submission
    if (validateStep()) {
      alert("Event submitted successfully!");
      console.log("Form Data: ", formData);
    } else {
      alert("Please complete all required fields before submitting.");
    }
  };

  return (
    <div className="container">
      <h1>Create Event - Step {step}</h1>

      {step === 1 && (
        <GeneralInfo
          formData={formData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        ></GeneralInfo>
      )}

      {step === 2 && (
        <EventActivitiesInfo
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        ></EventActivitiesInfo>
      )}

      {step === 3 && (
        <TicketingInfo
          formData={formData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handlePaymentMethodChange={handlePaymentMethodChange}
        ></TicketingInfo>
      )}

      {step === 4 && (
        <form>
          <h2>Additional Information</h2>
          <label htmlFor="extraInfo">Any Additional Information:</label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            placeholder="Enter any extra information about the event"
            value={formData.extraInfo}
            onChange={handleInputChange}
          ></textarea>

          <div className="button-group">
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 5 && (
        <ReviewAndSubmit
          formData={formData}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        ></ReviewAndSubmit>
      )}
    </div>
  );
};

export default CreateEvent;
