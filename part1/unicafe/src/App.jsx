import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Feedback = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => (
  <div>
    <h1>Give Feedback</h1>
    <Button handleClick={handleGoodClick} text="Good" />
    <Button handleClick={handleNeutralClick} text="Neutral" />
    <Button handleClick={handleBadClick} text="Bad" />
  </div>
);

const Statistics = ({ feedbackData }) => {
  const total = feedbackData.find((statistic) => statistic.text === 'all').value;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            {feedbackData.map((statistic) => (
              <StatisticLine
                key={statistic.text}
                text={statistic.text}
                value={statistic.value}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};



const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const feedbackData = [
    { text: 'good', value: good },
    { text: 'neutral', value: neutral },
    { text: 'bad', value: bad },
    { text: 'all', value: good + neutral + bad },
    { text: 'average', value: (good - bad) / (good + neutral + bad) || 0 },
    { text: 'positive', value: `${(good / (good + neutral + bad)) * 100 || 0} %` },
  ];
  

  return (
    <div>
      <Feedback
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
      />
      <Statistics feedbackData={feedbackData} />
    </div>
  );
};

export default App