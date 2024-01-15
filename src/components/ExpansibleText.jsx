import { useState } from "react";

export default function ExpansibleText({ contracted, expanded }) {
  const [isContracted, setIsContracted] = useState(true);

  return (
    <div>
      <p className="font-light whitespace-pre-line text-neutral-200 text-pretty">
        {isContracted ? contracted : expanded}
      </p>
      <button
        onClick={() => setIsContracted(!isContracted)}
        className="flex items-center gap-1 text-sm"
      >
        {isContracted ? "Mostrar mas" : "Mostrar menos"}
        <ion-icon
          name={isContracted ? "chevron-down" : "chevron-up"}
          class="size-3.5"
        ></ion-icon>
      </button>
    </div>
  );
}
