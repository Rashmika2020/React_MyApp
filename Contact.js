import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../firebase";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [telephonenumber, setTelephonenumber] = useState("");

  const [loader, setLoader] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        gender:gender,
        city:city,
        telephonenumber:telephonenumber,
      })

      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      }); 


      setName("");
    setEmail("");
    setGender("");
    setCity("");
    setTelephonenumber("");
  };

    return(
      
            <form className="form" onSubmit={handleSubmit}>
      <h1>Data Form </h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

<label>Gender</label>
      <input
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

<label>City</label>
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

<label>Telephone Number</label>
      <input
        placeholder="Telephone Number"
        value={telephonenumber}
        onChange={(e) => setTelephonenumber(e.target.value)}
      />

      

      <button
        type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
        Submit
      </button>


        </form>
    )
    }
  

export default Contact;