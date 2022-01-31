export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {stats.map(({ label, percentage, id }) => (
        <li key={id}>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        ))}
      </ul>
    </section>
  );
};
