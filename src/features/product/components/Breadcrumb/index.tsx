import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  console.log(segments);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-1 font-edit font-semibold">
        <li>
          <Link to="/" className="text-low-gray hover:text-green-default">
            Home
          </Link>
        </li>

        {segments.map((segment, idx) => {
          const to = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return (
            <li key={to} className="flex items-center gap-1">
              <span className="text-low-gray">
                {isLast ? (
                  <span className="text-green-default capitalize">
                    / {segment.replace(/-/g, " ")}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-low-gray hover:text-green-default capitalize"
                  >
                    / {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
