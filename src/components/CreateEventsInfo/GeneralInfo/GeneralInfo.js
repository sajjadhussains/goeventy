import React from "react";

const GeneralInfo = ({ formData, handleInputChange, handleNext }) => {
  return (
    <form>
      <label htmlFor="eventName">Event Name:</label>
      <input
        type="text"
        id="eventName"
        name="eventName"
        required
        value={formData.eventName}
        onChange={handleInputChange}
      />
      <label htmlFor="eventDescription">Event Description (Optional):</label>
      <textarea
        id="eventDescription"
        name="eventDescription"
        value={formData.eventDescription}
        onChange={handleInputChange}
      ></textarea>
      <label htmlFor="eventFormat">Event Format:</label>
      <select
        id="eventFormat"
        name="eventFormat"
        value={formData.eventFormat}
        onChange={handleInputChange}
      >
        <option value="online">Online</option>
        <option value="offline">Onsite</option>
      </select>
      <label htmlFor="eventType">Event Type:</label>
      <select
        id="eventType"
        name="eventType"
        value={formData.eventType}
        onChange={handleInputChange}
      >
        <option value="meeting">Meeting</option>
        <option value="seminar">Seminar</option>
      </select>
      <label htmlFor="gateOpeningTime">Gate Opening Time:</label>
      <input
        type="time"
        id="gateOpeningTime"
        name="gateOpeningTime"
        value={formData.gateOpeningTime}
        onChange={handleInputChange}
      />
      <label htmlFor="eventStartingTime">Event Starting Time:</label>
      <input
        type="time"
        id="eventStartingTime"
        name="eventStartingTime"
        value={formData.eventStartingTime}
        onChange={handleInputChange}
      />
      <label htmlFor="eventEndingTime">Event Ending Time:</label>
      <input
        type="time"
        id="eventEndingTime"
        name="eventEndingTime"
        value={formData.eventEndingTime}
        onChange={handleInputChange}
      />
      <label htmlFor="locationUrl">Event Location (URL):</label>
      <input
        type="url"
        id="locationUrl"
        name="locationUrl"
        placeholder="Enter location URL"
        value={formData.locationUrl}
        onChange={handleInputChange}
      />
      <label htmlFor="organizerName">Name of Organizer:</label>
      <input
        type="text"
        id="organizerName"
        name="organizerName"
        value={formData.organizerName}
        onChange={handleInputChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label htmlFor="address">Address (Optional):</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />

      <div className="button-group">
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </form>
  );
};

export default GeneralInfo;
