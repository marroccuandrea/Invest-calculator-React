export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investimento iniziale</label>
          <input type="number" required />
        </p>
        <p>
          <label>Investimento annuale</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Ritorno previsto</label>
          <input type="number" required />
        </p>
        <p>
          <label>Durata</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
