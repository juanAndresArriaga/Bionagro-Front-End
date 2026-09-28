import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="default-padding text-center">
      <div className="container">
        <h1 style={{ fontSize: 96, color: "var(--color-primary)" }}>404</h1>
        <h3 className="mb-15">Page Not Found</h3>
        <p className="mb-25">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-theme btn-md radius">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
