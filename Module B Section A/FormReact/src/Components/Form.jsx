import React, { useState } from "react";
import styles from "./Form.module.css";
import ListRender from "./ListRender";
import Button from "./Button";

const Form = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
    organizationSize: "",
    industry: "",
    agree: false,
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log("Form submitted", formData);
    setRecords([formData, ...records]);
  };
  //   console.log(records);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.signup_form}>
        <h2>Try Sign free for 14 days</h2>
        <p>
          Already have a Formstack account?{" "}
          <a href="/start-trial">Start your trial in app</a>
        </p>
        <div>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Work Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Organization Name
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Organization Size
            <select
              name="organizationSize"
              value={formData.organizationSize}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="small">1000</option>
              <option value="medium">10,000</option>
              <option value="large">20,000</option>
              <option value="large">80,000</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Industry
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="tech">Healthcare</option>
              <option value="finance">Automobiles</option>
              <option value="healthcare">Tech</option>
              <option value="education">Civil</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I understand and agree to the{" "}
            <a href="/privacy-policy">Formstack Privacy Policy</a>,{" "}
            <a href="/software-services-agreement">
              Software Services Agreement
            </a>
            , and <a href="/acceptable-use-policy">Acceptable Use Policy</a>.
          </label>
        </div>
      
    <Button/>

      </form>
      <ListRender users={records} />
    </>
  );
};

export default Form;
         
// .btn-grad {
//     background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
//     margin: 10px;
//     padding: 15px 45px;
//     text-align: center;
//     text-transform: uppercase;
//     transition: 0.5s;
//     background-size: 200% auto;
//     color: white;            
//     box-shadow: 0 0 20px #eee;
//     border-radius: 10px;
//     display: block;
//   }

//   .btn-grad:hover {
//     background-position: right center; /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }
 