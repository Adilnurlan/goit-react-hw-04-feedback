import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    evt.target.nodeName === 'BUTTON' &&
      this.setState(prevState => ({
        [evt.target.name]: prevState[evt.target.name] + 1,
      }));
  };

  countTotalFeedback = () => {
    const allValues = Object.values(this.state);
    return allValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((100 * this.state.good) / this.countTotalFeedback()).toFixed()
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
