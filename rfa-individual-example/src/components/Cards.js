// Packages
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressBook,
  faCameraRetro,
  faRocket,
  faBook,
  faBomb,
  faSquare,
  faCheck,
  faCar
} from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div class="cards">
      <div class="card">
        {/* Change icon color */}
        <FontAwesomeIcon icon={faCoffee} color="red" size="6x" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faCoffee} color="red" size="6x"/>`}</code>
      </div>

      <div class="card">
        {/* Change icon size */}
        <FontAwesomeIcon icon={faCar} />
        <FontAwesomeIcon icon={faCar} size="2x" />
        <FontAwesomeIcon icon={faCar} size="6x" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faCar} />`}</code>
        <code>{`<FontAwesomeIcon icon={faCar} size="2x" />`}</code>
        <code>{`<FontAwesomeIcon icon={faCar} size="6x" />`}</code>
      </div>

      <div class="card">
        {/* Transform an icon. Make it smaller and move it */}
        <FontAwesomeIcon
          icon={faAddressBook}
          size="6x"
          transform="shrink-6 left-6"
        />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faAddressBook} size="6x" transform="shrink-6 left-6" />`}</code>
      </div>

      <div class="card">
        {/* Make an icon spin */}
        <FontAwesomeIcon icon={faCameraRetro} size="6x" spin />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faCameraRetro} size="6x" spin />`}</code>
      </div>

      <div class="card">
        {/* Make an icon pulse (slower spin) */}
        <FontAwesomeIcon icon={faRocket} size="6x" pulse />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faRocket} size="6x" pulse />`}</code>
      </div>

      <div class="card">
        {/* Flip an icon */}
        <FontAwesomeIcon icon={faBook} size="6x" flip="vertical" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faBook} size="6x" flip="vertical" />`}</code>
      </div>

      <div class="card">
        {/* Rotate an icon */}
        <FontAwesomeIcon icon={faBomb} size="6x" transform={{ rotate: 45 }} />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={faTruck} size="6x" transform={{ rotate: 42 }} />`}</code>
      </div>

      <div class="card">
        {/* 
        Stack an icon on on top of another icon using a Span for something a little more custom

        Span: the span tag ties the icons together while the class name declaration tells the compiler what to expect

        Square: this is a solid black icon normally that we've changed to green

        Check: the check is also black originally but we've used "inverse" making it white and shrinking it enough to fit
        comfortably inside of the green square
         */}
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} color="green" />
          <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6" />
        </span>
        <p>Code:</p>
        <code>
          {`<span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} color="green" />
          <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6" />
        </span>`}
        </code>
      </div>
    </div>
  );
}
