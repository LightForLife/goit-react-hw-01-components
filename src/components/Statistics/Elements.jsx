import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Elements = ({ data }) => {
  return data.map(({ id, label, percentage }) => (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));
};

Elements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
