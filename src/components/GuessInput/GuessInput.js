import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleAddGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title="5 letter word"
        value={tentativeGuess}
        onChange={event => { setTentativeGuess(event.target.value.toUpperCase()); }} />
    </form >
  );
}

export default GuessInput;
