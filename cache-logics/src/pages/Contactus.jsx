import React, { useState, useEffect } from "react";
import "../css/Contactus.css";
import "../index.css";
import email from "../assets/mail-01.svg";
import phone from "../assets/mobile-icon.svg";
import office from "../assets/Icon-2.svg";

const Contactus = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        privacyPolicy: false,
    });

    const [errors, setErrors] = useState({});

    // Load data from session storage on component mount
    useEffect(() => {
        const storedData = sessionStorage.getItem("contactFormData");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    // Save data to session storage on change
    useEffect(() => {
        sessionStorage.setItem("contactFormData", JSON.stringify(formData));
    }, [formData]);

    const validate = () => {
        let errors = {};
        if (!formData.firstName.trim()) errors.firstName = "*First name is required";
        if (!formData.lastName.trim()) errors.lastName = "*Last name is required";
        if (!formData.email.trim()) {
            errors.email = "*Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "*Invalid email address";
        }
        if (!formData.message.trim()) errors.message = "*Message cannot be empty";
        if (!formData.privacyPolicy) errors.privacyPolicy = "*You must agree to the privacy policy";
        return errors;
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            sessionStorage.removeItem("contactFormData"); // Clear session storage after successful submission
            setFormData({ firstName: "", lastName: "", email: "", message: "", privacyPolicy: false });
        }
    };

    return (
        <div className="contact-us" id="contact-us-page">
            <div className="contact-us-intro">
                <span className="contact-us-intro__subtitle">Contact Us</span>
                <h2 className="contact-us-intro__title">Let’s Build the Next Product Together</h2>
                <p className="contact-us-intro__description">
                    We’d love to hear from you. Please fill out this form or shoot us an email.
                </p>
            </div>
            <div className="contact-main">
                <div className="contact-info">
                    <div>
                        <img src={email} alt="Email" />
                        <h3>Email</h3>
                        <p>Our friendly team is here to help.</p>
                        <span>hi@cachelogic.tech</span>
                    </div>
                    <div>
                        <img src={phone} alt="Phone" />
                        <h3>Phone</h3>
                        <p>Mon-Fri from 8am to 5pm.</p>
                        <span>+1 (555) 000-0000</span>
                    </div>
                    <div>
                        <img src={office} alt="Office" />
                        <h3>Office</h3>
                        <p>Come say hello at our office HQ.</p>
                        <span>Building X, Street Y</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="first-name">First name</label>
                                <input
                                    className="names"
                                    type="text"
                                    id="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="last-name">Last name</label>
                                <input
                                    className="names"
                                    type="text"
                                    id="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Leave us a message..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <div className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                checked={formData.privacyPolicy}
                                onChange={handleChange}
                            />
                            <label htmlFor="privacyPolicy">
                                You agree to our friendly <a href="#">privacy policy</a>.
                            </label>
                            {errors.privacyPolicy && <span className="error">{errors.privacyPolicy}</span>}
                        </div>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
