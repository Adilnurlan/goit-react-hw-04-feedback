import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <ul className={s.btnList} onClick={evt => onLeaveFeedback(evt)}>
        <li>
          <button type="button" name="good">
            Good
          </button>
        </li>
        <li>
          <button type="button" name="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad">
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
