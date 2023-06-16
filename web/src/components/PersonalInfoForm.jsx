import React, { useState } from 'react'
import BirthDateForm from './BirthDateForm'

const PersonalInfoForm = () => {
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [gender, setGender] = useState('')

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleDayChange = (e) => {
        setDay(e.target.value)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Do something with the entered data (e.g., validation, processing, etc.)
        const personalInfo = {
            firstName,
            middleName,
            lastName,
            age,
            birthDate: `${day}/${month}/${year}`,
            gender,
        }
        console.log(personalInfo)

        // Reset the form
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setAge('')
        setDay('')
        setMonth('')
        setYear('')
        setGender('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="middleName">Middle Name:</label>
                <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={middleName}
                    onChange={handleMiddleNameChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleAgeChange}
                    required
                />
            </div>
            <BirthDateForm></BirthDateForm>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonalInfoForm
