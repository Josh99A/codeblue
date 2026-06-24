import Image from "next/image";
import codeBlueMark from "@/assets/code-blue-mark-dark-removebg-preview.png";

export default function Loading() {
  return (
    <main className="route-loader" aria-busy="true" aria-live="polite">
      <div className="route-loader-shell">
        <div className="route-loader-mark-wrap">
          <span className="route-loader-ripple route-loader-ripple-one" />
          <span className="route-loader-ripple route-loader-ripple-two" />
          <div className="route-loader-mark-card">
            <Image
              src={codeBlueMark}
              alt="Code Blue"
              priority
              className="route-loader-mark"
            />
          </div>
        </div>

        <div className="route-loader-copy">
          <p className="route-loader-kicker">Code Blue</p>
          <h1 className="route-loader-title">Preparing your care screen</h1>
          <p className="route-loader-text">
            Loading the next step quickly and securely.
          </p>
        </div>

        <div className="route-loader-progress" aria-hidden="true">
          <span className="route-loader-progress-bar" />
        </div>
      </div>
    </main>
  );
}
