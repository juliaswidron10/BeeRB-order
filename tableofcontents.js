import React from "react";

function TableOfContents() {
  return (
    <div className="report">
      <title>Table of contents</title>
      <section className="introduction">
        <h1>Introduction</h1>
        <h2>Concept</h2>
        <h2>Target audience</h2>
        <h2>Team building and teamwork</h2>
        <h2>Development process, tools we used</h2>
      </section>

      <section className="process">
        <h1>Process</h1>
        <h2>Research</h2>
        <h3>Market analysis</h3>
        <h3>User analysis</h3>
        <h2>Translation</h2>
        <h2>Prototype development</h2>
        <h3>Wireframes and prototyping</h3>
        <h3>Design and style tile</h3>
        <h3>Content production</h3>
        <h2>Technical documentation</h2>
      </section>

      <section className="technical_documentation">
        <h1>Technical documentation</h1>
        <h2>Code structure</h2>
        <h2>Acticity diagrams</h2>
        <h2>Databases</h2>
        <h2>New technologies we used</h2>
        <h3>React</h3>
        <h3>Antd</h3>
        <h3>Router</h3>
        <h2>Optimization</h2>
      </section>

      <section className="conclusion">
        <h1>Conclusion</h1>
        <h2>Challenges we faced</h2>
        <h2>Did we reach our goals?</h2>
      </section>
    </div>
  );
}

TableOfContents();
