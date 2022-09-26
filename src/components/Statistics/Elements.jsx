import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Elements = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Elements.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
