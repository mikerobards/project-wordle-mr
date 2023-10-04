import React from 'react';

function GameOver({ answer, guesses }) {
  if (guesses[guesses.length - 1] === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (guesses.length === 6) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  } else {
    return null;
  }
}



function GuessInput({ handleAddGuess, guesses, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(tentativeGuess);
    setTentativeGuess('');
  }
  gameOver = false;
  if (guesses.length === 6 || guesses[guesses.length - 1] === answer) {
    gameOver = true
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameOver}
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          pattern='[a-zA-Z]{5}'
          title="5 letter word"
          value={tentativeGuess}
          onChange={event => { setTentativeGuess(event.target.value.toUpperCase()); }} />
        <GameOver guesses={guesses} answer={answer} />
      </form >
    </>
  );
}

export default GuessInput;
