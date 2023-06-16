import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const BirthDateForm = () => {
    const router = useRouter()
    const readerId = router.query.param

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleDayChange = (e) => {
        setDay(e.target.value)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Do something with the entered date (e.g., validation, processing, etc.)
        const birthDate = `${year}-${month}-${day}`
        window.alert(birthDate)

        try {
            const loginUser = await axios.get(`/api/user/${readerId}`)

            if (loginUser.data.dateOfBirth === birthDate) {
                window.alert('Login Successful!!')
            }
        } catch (e) {
            window.alert(e)
            setDay('')
            setMonth('')
            setYear('')
        }

        // Reset the form
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="day">Day:</label>
                <input
                    type="number"
                    id="day"
                    name="day"
                    value={day}
                    onChange={handleDayChange}
                    min="1"
                    max="31"
                    required
                />
            </div>
            <div>
                <label htmlFor="month">Month:</label>
                <input
                    type="number"
                    id="month"
                    name="month"
                    value={month}
                    onChange={handleMonthChange}
                    min="1"
                    max="12"
                    required
                />
            </div>
            <div>
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    name="year"
                    value={year}
                    onChange={handleYearChange}
                    min="1900"
                    max="2023"
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default BirthDateForm
