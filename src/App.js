import './App.css';
import { useState } from 'react';

function App() {
  // get current date
  const d = new Date();
  const todayDate = d.toISOString().substring(0, 10);
  const dateMax = new Date(d.setMonth(d.getMonth() + 1))
    .toISOString()
    .substring(0, 10);

  const [formState, setFormState] = useState({
    name: '',
    date: todayDate,
    numPeople: 1,
    telephone: '',
    allergies: {
      nuts: false,
      seafood: false,
      other: false,
      specify: '',
    },
    requirements: 'none',
    comments: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name, bookingDate);
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
            value={formState.name}
            onChange={(e) => setFormState({ name: e.target.value })}
          />
        </div>
        {/* <!-- Date --> */}
        <div className="form-group">
          <label htmlFor="booking-date">When would you like to book?</label>
          <input
            type="date"
            name="booking-date"
            id="booking-date"
            value={formState.date}
            onChange={(e) => setFormState({ date: e.target.value })}
            min={todayDate}
            max={dateMax}
          />
        </div>
        {/* <!-- Number of people --> */}
        <div className="form-group">
          <label htmlFor="numPeople">How many people?</label>
          <select
            name="numPeople"
            id="numPeople"
            value={formState.numPeople}
            onChange={(e) => setFormState({ numPeople: e.target.value })}
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
            value={formState.telephone}
            onChange={(e) => setFormState({ telephone: e.target.value })}
          />
        </div>
        {/* <!-- Allergies --> */}
        <div className="form-group">
          <fieldset>
            <legend>Allergies</legend>

            <label htmlFor="nuts">Nuts</label>
            <input
              type="checkbox"
              name="allergies"
              id="nuts"
              value="nuts"
              onChange={(e) =>
                setFormState({ allergies: { nuts: e.target.checked } })
              }
            />
            <label htmlFor="seafood">Seafood</label>
            <input
              type="checkbox"
              name="allergies"
              id="seafood"
              value="seafood"
              onChange={(e) =>
                setFormState({ allergies: { seafood: e.target.checked } })
              }
            />
            <label htmlFor="otherd">Other</label>
            <input
              type="checkbox"
              name="allergies"
              id="other"
              value="other"
              onChange={(e) =>
                setFormState({ allergies: { other: e.target.checked } })
              }
            />

            <label htmlFor="specify">(Please Specify)</label>
            <textarea
              name="specify"
              id="specify"
              cols="30"
              rows="1"
              disabled={!formState.allergies.other === true}
              onChange={(e) =>
                setFormState({ allergies: { specify: e.target.value } })
              }
            ></textarea>
          </fieldset>
        </div>
        {/* <!-- Dietary requirements --> */}
        <fieldset>
          <legend>Dietary requirements</legend>
          <div className="form-group">
            <label htmlFor="requirements-none">None</label>
            <input
              type="radio"
              name="requirements"
              id=""
              value={formState.requirements}
              onChange={(e) => setFormState({ requirements: e.target.value })}
            />
            <label htmlFor="requirements-vegetarian">Vegetarian</label>
            <input
              type="radio"
              name="requirements"
              id=""
              value={formState.requirements}
              // checked={formState.requirements === 'vegetarian'}
              onChange={(e) => setFormState({ requirements: e.target.value })}
            />
            <label htmlFor="requirements-vegan">Vegan</label>
            <input
              type="radio"
              name="requirements"
              id=""
              value={formState.requirements}
              // checked={formState.requirements === 'vegan'}
              onChange={(e) => setFormState({ requirements: e.target.value })}
            />
          </div>
        </fieldset>
        {/* <!-- Comments --> */}
        <div className="form-group">
          <label htmlFor="comments">Additional comments</label>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            onChange={(e) => setFormState({ comments: e.target.value })}
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
