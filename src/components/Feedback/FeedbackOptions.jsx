import css from "components/Feedback/Feedback.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.buttons}>
      <li className={css.itembtn}>
        <button
          className={css.btn}
          name="good"
          type="button"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li className={css.itembtn}>
        <button
          className={css.btn}
          name="neutral"
          type="button"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li className={css.itembtn}>
        <button
          className={css.btn}
          name="bad"
          type="button"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
