import { useState } from "react";

export default function ExpansibleText({ contracted, expanded }) {
  const [isContracted, setIsContracted] = useState(true);

  return (
    <div>
      <p className="whitespace-pre-line text-pretty">
        {isContracted ? contracted : expanded}
      </p>
      <button
        onClick={() => setIsContracted(!isContracted)}
        className="flex items-center gap-1 text-sm font-light rounded outline-none cursor-pointer text-neutral-200 outline-1 outline-transparent outline outline-offset-2 focus-visible:outline-white"
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
