import css from './Options.module.css'

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  const feedbackTypes = ['good', 'neutral', 'bad'];

  return (
    <div className={css.options}>
      {feedbackTypes.map((type) => (
        <button key={type} onClick={() => updateFeedback(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}

export default Options;