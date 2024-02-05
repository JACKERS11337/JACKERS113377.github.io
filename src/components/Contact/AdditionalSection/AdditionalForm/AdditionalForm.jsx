import form from "./AdditionalForm.module.css";

const AdditionalForm = () => {
  return (
    <form className={form.form}>
      <label htmlFor="name">
        Full Name <b>*</b>
      </label>
      <input type="text" id="name" placeholder="Vasya Petrushkin" />
      <label htmlFor="email">
        Email <b>*</b>
      </label>
      <input type="text" id="email" placeholder="youremail@example.com" />
      <label htmlFor="tell">
        Tell us about it <b>*</b>
      </label>
      <textarea
        id="tell"
        cols="30"
        rows="10"
        placeholder="Write here..."
      ></textarea>
      <button className={form.submit_email}>Send Message</button>
    </form>
  );
};

export default AdditionalForm;
