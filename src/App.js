import './App.css';
import { useState } from 'react';

function App() {
  // get current date
  const d = new Date();
  const todayDate = d.toISOString().substring(0, 10);
  const dateMax = new Date(d.setMonth(d.getMonth() + 1))
    .toISOString()
    .substring(0, 10);

  const [name, setName] = useState('');
  const [bookingDate, setBookingDate] = useState(todayDate);
  const [numPeople, setNumPeople] = useState();
  const [tel, setTel] = useState('');

  const allergyOptions = ['peanuts', 'seafood', 'other'];
  const [allergies, setAllergies] = useState(
    new Array(allergyOptions.length).fill(false)
  );

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = allergies.map((item, index) =>
      index === position ? !item : item
    );
    setAllergies(updatedCheckedState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, bookingDate);
  };

  return (
    <div className="container">
      <h1>Booking Form</h1>
      <form action="" id="booking-form" onSubmit={submitHandler}>
        {/* <!-- Name --> */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            min={todayDate}
            max={dateMax}
          />
        </div>
        {/* <!-- Date --> */}
        <div className="form-group">
          <label htmlFor="booking-date">When would you like to book?</label>
          <input
            type="date"
            name="booking-date"
            id="booking-date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>
        {/* <!-- Number of people --> */}
        <div className="form-group">
          <label htmlFor="numPeople">How many people?</label>
          <select
            name="numPeople"
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="0">Group larger than 10</option>
          </select>
        </div>
        {/* <!-- Telephone --> */}
        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        {/* <!-- Allergies --> */}
        <div className="form-group">
          <fieldset>
            <legend>Allergies</legend>
            {allergyOptions.map((option, i) => {
              return (
                <div key={`option-${i}`}>
                  <label htmlFor="{option}">{option.toUpperCase()}</label>
                  <input
                    type="checkbox"
                    name="allergies"
                    id={option}
                    value={option}
                    checked={allergies[i]}
                    onChange={() => handleCheckboxChange(i)}
                  />
                </div>
              );
            })}
          </fieldset>
        </div>
        {/* <!-- Vegan --> */}
        <div className="form-group">
          <label htmlFor="vegan">Vegan</label>
          <input type="checkbox" name="vegan" id="" value="vegan" />
        </div>
        {/* <!-- Inside / Outside --> */}
        <div className="form-group">
          <fieldset>
            <legend>Would you like to sit inside or outside?</legend>
            <label htmlFor="location-inside">Inside</label>
            <input
              type="radio"
              name="location"
              id="location-inside"
              value="inside"
              checked
            />
            <label htmlFor="loaction-outside">Outside</label>
            <input
              type="radio"
              name="location"
              id="location-outside"
              value="ouside"
            />
          </fieldset>
        </div>
        {/* <!-- Comments --> */}
        <div className="form-group">
          <label htmlFor="comments">Additional comments</label>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        {/* <!-- Submit --> */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
