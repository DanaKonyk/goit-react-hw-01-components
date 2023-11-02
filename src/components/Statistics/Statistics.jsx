import css from './Statistics.module.css'

export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
              <ul className={css.statList}>
                {data.map(item => {
                    return (
                <li className={css.item} key={item.id}>
        <span className={css.label}>{item.label} </span>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>
         );
                })}

            </ul>
        </section>
    );
};