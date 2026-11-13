import { asset } from "../../data/nav";

/** Renders "Bi-on Ca+B" with the Bi-on wordmark followed by the suffix; other names stay plain text. */
export default function ProductName({ name }: { name: string }) {
  if (!name.startsWith("Bi-on ")) return <>{name}</>;
  return (
    <span className="pn" aria-label={name}>
      <img className="bl-in" src={asset("bi-on.svg")} alt="" aria-hidden="true" />
      <span aria-hidden="true">{name.slice(6)}</span>
    </span>
  );
}
