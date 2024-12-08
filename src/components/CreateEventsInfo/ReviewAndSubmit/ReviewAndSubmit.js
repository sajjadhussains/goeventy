import React from "react";

const ReviewAndSubmit = ({ formData, handlePrevious, handleSubmit }) => {
  return (
    <form>
      <h2>Review and Submit</h2>
      <p>Please review your information before submitting:</p>
      <ul>
        <li>
          <strong>Event Name:</strong> {formData.eventName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>Event Description:</strong> {formData.eventDescription}
        </li>
        {/* Add more fields as necessary */}
      </ul>

      <div className="button-group">
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewAndSubmit;
