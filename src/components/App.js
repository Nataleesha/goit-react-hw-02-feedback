import { Component } from "react";
import { Statistics } from "components/Feedback/Statistics";
import { FeedbackOptions } from "components/Feedback/FeedbackOptions";
import { Section } from "components/Feedback/Section";
import { Notification } from "components/Feedback/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  onLeaveFeedback = (event) => {
    const label = event.target.name;
    this.setState((prevState) => {
      return { [label]: prevState[label] + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave a feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <Notification message="No feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePct={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Feedback />
//     </div>
//   );
// }

// export default App;
