import React from "react";
import "./tasklist.css";
import PropType from "prop-types";

export default function Tasklist({ title }) {
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
    </div>
  );
}
Tasklist.propType *
  {
    title: PropType.string.isRequired
  };
