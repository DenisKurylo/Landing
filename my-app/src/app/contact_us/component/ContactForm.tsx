import cl from "./contact_form.module.scss";

const ContactForm = () => {
    return (
        <section className={cl.contact}>
            <h1>Contact us</h1>
            <p>Subheading for description or instructions</p>

            <form className={cl.form}>
                <div className={cl.row}>
                    <label>
                        First name
                        <input type="text" placeholder="Jane" />
                    </label>

                    <label>
                        Last name
                        <input type="text" placeholder="Smitherton" />
                    </label>
                </div>

                <label>
                    Email address
                    <input type="email" placeholder="email@janesfakedomain.net" />
                </label>

                <label>
                    Number
                    <input type="tel" placeholder="+380-XX-XX-XX-XXX" />
                </label>

                <label>
                    Your message
                    <textarea placeholder="Enter your question or message" />
                </label>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;