import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log('guess submitted!', guess);
        setGuess('');
      }}
      className="guess-input-wrapper"

    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        pattern={'[A-Z]{5}'}
        value={guess}
        onChange={event => { setGuess(event.target.value.toUpperCase()); }} />
    </form >
  );
}

export default GuessInput;
