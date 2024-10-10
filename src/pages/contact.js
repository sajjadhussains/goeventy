import { useForm } from "react-hook-form";
const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <section className="contact-section">
        <div className="container-xl">
          <h1 className="title">Contact Us</h1>
          <div className="contact-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>

                <input
                  className="form-control"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p className="error-message" role="alert">
                    Name is required
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  placeholder="Email"
                  {...register("mail", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && (
                  <p className="error-message" role="alert">
                    {errors.mail.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Phone number with county code
                </label>
                <input
                  className="form-control"
                  placeholder="Phone number"
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                  aria-invalid={errors.number ? "true" : "false"}
                />
                {errors.mail && (
                  <p className="error-message" role="alert">
                    {errors.mail.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Business/Organization name
                </label>
                <input
                  className="form-control"
                  placeholder="Business/Organization"
                  {...register("businessName", {
                    required: "Business/Organization name is required",
                  })}
                  aria-invalid={errors.businessName ? "true" : "false"}
                />
                {errors.mail && (
                  <p className="error-message" role="alert">
                    {errors.businessName.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register("messageText", {
                    required: "Message is required",
                  })}
                  aria-invalid={errors.messageText ? "true" : "false"}
                ></textarea>
                {errors.mail && (
                  <p className="error-message" role="alert">
                    {errors.messageText.message}
                  </p>
                )}
              </div>

              <input className="btn btn-submit" type="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
