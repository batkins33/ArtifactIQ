"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const link = (href, label) => (
    <Link href={href} className={pathname === href ? "active" : undefined}>
      {label}
    </Link>
  );
  return (
    <nav className="nav">
      {link("/", "Home")}
      {link("/add", "Add / Identify")}
      {link("/collection", "Collection")}
      {link("/items/demo-item", "Item Detail")}
    </nav>
  );
}

