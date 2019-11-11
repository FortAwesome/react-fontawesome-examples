// Packages
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card() {
  return (
    <div class="cards">
      <div class="card">
        {/* Change icon color */}
        <FontAwesomeIcon icon={["fas", "coffee"]} color="red" size="6x" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={['fas', 'coffee']} color="red" size="6x"/>`}</code>
      </div>

      <div class="card">
        {/* Change icon size */}
        <FontAwesomeIcon icon={["fas", "car"]} />
        <FontAwesomeIcon icon={["fas", "car"]} size="2x" />
        <FontAwesomeIcon icon={["fas", "car"]} size="6x" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={['fas', 'car']} />`}</code>
        <code>{`<FontAwesomeIcon icon={['fas', 'car']} size="2x" />`}</code>
        <code>{`<FontAwesomeIcon icon={['fas', 'car']} size="6x" />`}</code>
      </div>

      <div class="card">
        {/* Transform an icon. Make it smaller and move it */}
        <FontAwesomeIcon
          icon={["fas", "address-book"]}
          size="6x"
          transform="shrink-6 left-6"
        />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={["fas", "address-book"]} size="6x" transform="shrink-6 left-6" />`}</code>
      </div>

      <div class="card">
        {/* Make an icon spin */}
        <FontAwesomeIcon icon={["fas", "camera-retro"]} size="6x" spin />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={["fas", "camera-retro"]} size="6x" spin />`}</code>
      </div>

      <div class="card">
        {/* Make an icon pulse (slower spin) */}
        <FontAwesomeIcon icon={["fas", "rocket"]} size="6x" pulse />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={["fas", "rocket"]} size="6x" pulse />`}</code>
      </div>

      <div class="card">
        {/* Flip an icon */}
        <FontAwesomeIcon icon={["fas", "book"]} size="6x" flip="vertical" />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={["fas", "book"]} size="6x" flip="vertical" />`}</code>
      </div>

      <div class="card">
        {/* Rotate an icon */}
        <FontAwesomeIcon icon={["fas", "bomb"]} size="6x" transform={{ rotate: 45 }} />
        <p>Code:</p>
        <code>{`<FontAwesomeIcon icon={["fas", "bomb"]} size="6x" transform={{ rotate: 42 }} />`}</code>
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
          <FontAwesomeIcon icon={["fas", "square"]} color="green" />
          <FontAwesomeIcon icon={["fas", "check"]} inverse transform="shrink-6" />
        </span>
        <p>Code:</p>
        <code>
          {`<span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={["fas", "square"]} color="green" />
          <FontAwesomeIcon icon={["fas", "check"]} inverse transform="shrink-6" />
        </span>`}
        </code>
      </div>
    </div>
  );
}
