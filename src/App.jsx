import { useState, useEffect } from 'react'
import css from './App.module.css'
import Description from './components/Description/Description'
import Options from './components/Optoins/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './Notifiaction/Notifivation'
function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.app}>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        totalFeedback={totalFeedback} 
        resetFeedback={resetFeedback} 
      />
      {totalFeedback > 0 ? (
        <Feedback 
          feedback={feedback} 
          totalFeedback={totalFeedback} 
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;