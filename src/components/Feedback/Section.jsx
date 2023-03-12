import css from "components/Feedback/Feedback.module.css";
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.headertwo}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
