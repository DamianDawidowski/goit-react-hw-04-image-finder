import css from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  var randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={css.statistics}>
      {title !== '' && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.itemStat}
              style={{ backgroundColor: `${randomColor()}` }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
      id: propTypes.number.isRequired,
    })
  ),
};

export default Statistics;
