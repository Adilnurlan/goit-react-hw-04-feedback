import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <ul className={s.btnList}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
