import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'


const RegisterPage: React.FC = () => {
  const router = useRouter()

  const [readerId, setReaderId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [school, setSchool] = useState("");
  const [readerType, setReaderType] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your backend API
      const response = await axios.post("/api/register", {
        
        readerId,
        firstName,
        middleName,
        lastName,
        gender,
        dateOfBirth,
        school,
        readerType,
        profilePicture,
      });



      if(response) {
        router.push(`signin?param=${readerId}`)
        window.alert("Registered Successfully!")
      }
    } catch (error) {
      console.error(error);
      window.alert(error)
    }
  };

return (
  <div>
    <h1 style={{ textAlign: "center" }}>Register Page</h1>
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="readerId">Reader ID:</label>
        <input
          type="text"
          id="readerId"
          value={readerId}
          onChange={(e) => setReaderId(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="middleName">Middle Name:</label>
        <input
          type="text"
          id="middleName"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="text"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="readerType">Reader Type:</label>
        <input
          type="text"
          id="readerType"
          value={readerType}
          onChange={(e) => setReaderType(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="text"
          id="profilePicture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Register
      </button>
    </form>
  </div>
)
      }


export default RegisterPage;
