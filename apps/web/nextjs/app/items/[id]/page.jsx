export async function generateMetadata({ params }) {
  return { title: `Item • ${params.id}` };
}

export default function ItemDetailPage({ params }) {
  const { id } = params;
  return (
    <section className="card">
      <h2>Item Detail</h2>
      <p>
        Showing details for <span className="mono">{id}</span>.
      </p>
      <ul>
        <li><strong>Name:</strong> Placeholder name</li>
        <li><strong>Era:</strong> Placeholder era</li>
        <li><strong>Year:</strong> Placeholder year</li>
      </ul>
    </section>
  );
}

