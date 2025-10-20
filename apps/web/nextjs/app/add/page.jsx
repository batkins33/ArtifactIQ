export const metadata = { title: "Add / Identify" };

export default function AddIdentifyPage() {
  return (
    <section className="card">
      <h2>Add / Identify</h2>
      <p className="muted">
        Placeholder form for adding an artifact or running identification.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <br />
          <input placeholder="Artifact name" style={{ width: "100%", padding: 8 }} />
        </label>
        <br /><br />
        <label>
          Image URL
          <br />
          <input placeholder="https://..." style={{ width: "100%", padding: 8 }} />
        </label>
        <br /><br />
        <button type="submit">Save</button>
      </form>
    </section>
  );
}

