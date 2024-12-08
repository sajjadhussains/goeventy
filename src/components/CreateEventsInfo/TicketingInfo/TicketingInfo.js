import React from "react";

const TicketingInfo = ({
  formData,
  handleInputChange,
  handleNext,
  handlePrevious,
  handlePaymentMethodChange,
}) => {
  return (
    <form>
      <h2>Ticketing Information</h2>
      <label>Select Ticket Type:</label>
      <select
        name="ticketType"
        value={formData.ticketType}
        onChange={handleInputChange}
      >
        <option value="Regular">Regular</option>
        <option value="Free">Free</option>
        <option value="VIP">VIP</option>
        <option value="Child">Child</option>
        <option value="Custom">Custom</option>
      </select>

      <label htmlFor="ticketDetails">Ticketing Details (Optional):</label>
      <textarea
        id="ticketDetails"
        name="ticketDetails"
        value={formData.ticketDetails}
        onChange={handleInputChange}
      ></textarea>

      <label htmlFor="ticketPrice">Ticket Price:</label>
      <input
        type="number"
        id="ticketPrice"
        name="ticketPrice"
        value={formData.ticketPrice}
        onChange={handleInputChange}
      />

      <label>Select Currency:</label>
      <select
        name="currency"
        value={formData.currency}
        onChange={handleInputChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="BDT">BDT</option>
      </select>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="includedVAT"
          name="includedVAT"
          checked={formData.includedVAT}
          onChange={handleInputChange}
        />
        <label htmlFor="includedVAT">Included VAT</label>
      </div>

      <label htmlFor="quantity">
        Total Number of Tickets for this Category:
      </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />

      <label htmlFor="maxPurchase">Maximum Number of Purchase by a User:</label>
      <input
        type="number"
        id="maxPurchase"
        name="maxPurchase"
        value={formData.maxPurchase}
        onChange={handleInputChange}
      />

      <h3>Add Other Validation Details:</h3>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="ageCheck"
          name="ageCheck"
          checked={formData.ageCheck}
          onChange={handleInputChange}
        />
        <label htmlFor="ageCheck">Age Check Using Birth Date</label>

        <input
          type="checkbox"
          id="nidCheck"
          name="nidCheck"
          checked={formData.nidCheck}
          onChange={handleInputChange}
        />
        <label htmlFor="nidCheck">National ID (NID) Check</label>

        <input
          type="checkbox"
          id="passportCheck"
          name="passportCheck"
          checked={formData.passportCheck}
          onChange={handleInputChange}
        />
        <label htmlFor="passportCheck">Passport Check</label>

        <input
          type="checkbox"
          id="studentIDCheck"
          name="studentIDCheck"
          checked={formData.studentIDCheck}
          onChange={handleInputChange}
        />
        <label htmlFor="studentIDCheck">Student ID Check</label>
      </div>

      <h3>Payment Methods:</h3>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="creditCard"
          name="paymentMethods"
          value="Credit Card"
          checked={formData.paymentMethods.includes("Credit Card")}
          onChange={(e) => handlePaymentMethodChange(e)}
        />
        <label htmlFor="creditCard">Credit Card</label>

        <input
          type="checkbox"
          id="mobileBanking"
          name="paymentMethods"
          value="Mobile Banking"
          checked={formData.paymentMethods.includes("Mobile Banking")}
          onChange={(e) => handlePaymentMethodChange(e)}
        />
        <label htmlFor="mobileBanking">Mobile Banking</label>

        <input
          type="checkbox"
          id="paypal"
          name="paymentMethods"
          value="PayPal"
          checked={formData.paymentMethods.includes("PayPal")}
          onChange={(e) => handlePaymentMethodChange(e)}
        />
        <label htmlFor="paypal">PayPal</label>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleInputChange}
        />
        <label htmlFor="termsAccepted">
          I agree to the terms and conditions
        </label>
      </div>

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

export default TicketingInfo;
