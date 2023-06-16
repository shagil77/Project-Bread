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
        <form onSubmit={handleSubmit}
        style={{ maxWidth: '400px', padding:'40px', margin: 'auto auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid black' }}>
            <div style={{ marginBottom: '10px'}}>
            <h1 style={{ textAlign: 'center' }}>Sign In Reader</h1>
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
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
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
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
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
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <button type="submit"
            style={{
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}>Submit</button>
        </form>
    )
}

export default BirthDateForm
