import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
}

export default Feedback