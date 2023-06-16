import React, { useState } from 'react';

const BirthDateForm = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the entered date (e.g., validation, processing, etc.)
    const birthDate = `${day}/${month}/${year}`;
    console.log(birthDate);

    // Reset the form
    setDay('');
    setMonth('');
    setYear('');
  };

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
  );
};

export default BirthDateForm;