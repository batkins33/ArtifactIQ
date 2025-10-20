import Link from "next/link";

const demoItems = [
  { id: "demo-item", name: "Bronze Coin", era: "Roman", year: "90 CE" },
  { id: "vase-123", name: "Clay Vase", era: "Han Dynasty", year: "150 BCE" },
  { id: "spear-42", name: "Iron Spearhead", era: "Medieval", year: "1200 CE" },
];

export const metadata = { title: "Collection" };

export default function CollectionPage() {
  return (
    <section>
      <h2>Collection</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {demoItems.map((it) => (
          <div key={it.id} className="card">
            <div className="muted mono" style={{ fontSize: 12 }}>#{it.id}</div>
            <div style={{ fontWeight: 600, marginTop: 6 }}>{it.name}</div>
            <div className="muted">{it.era} • {it.year}</div>
            <div style={{ marginTop: 8 }}>
              <Link href={`/items/${it.id}`}>View details →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

