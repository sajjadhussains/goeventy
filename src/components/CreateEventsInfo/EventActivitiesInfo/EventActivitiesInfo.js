import React from "react";

const EventActivitiesInfo = ({
  handleInputChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <form>
      <h2>Add Event Activities</h2>
      <label htmlFor="activities">Activities:</label>
      <input
        type="text"
        id="activities"
        name="activities"
        placeholder="Add activities"
        onChange={handleInputChange}
      />

      <label htmlFor="performers">Performers:</label>
      <input
        type="text"
        id="performers"
        name="performers"
        placeholder="Add performers"
        onChange={handleInputChange}
      />

      <div className="button-group">
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </form>
  );
};

export default EventActivitiesInfo;
