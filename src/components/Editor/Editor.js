/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import classes from "./Editor.module.css";
import CollapseIcon from "../UI/CollapseIcon";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

const Editor = (props) => {
  const options = props.options;
  const screenType = screen.width > 720 ? "large" : "small";
  const [showCollapsed, setShowCollapsed] = useState(false);
  let collapsedClass = {};
  if (screenType === "small") {
    collapsedClass.editor = {};
    collapsedClass.heading = {};
    collapsedClass.editorWindow = "editor-window-vertical-collapse";
  } else {
    collapsedClass.editor = {
      width: "30px",
    };
    collapsedClass.heading = {};
    collapsedClass.editorWindow = "";
  }
  console.log(collapsedClass, showCollapsed);

  const onBeforeChangeHandler = (editor, data, value) => {
    props.onBeforeChangeHandler(value);
  };

  const collapseClickHandler = () => {
    setShowCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`${classes.editor}`}
      style={showCollapsed ? collapsedClass.editor : {}}
    >
      <div
        className={`${classes["editor-heading"]}`}
        style={showCollapsed ? collapsedClass.heading : {}}
      >
        {(!showCollapsed || screenType === "small") && props.heading}
        <CollapseIcon
          show={showCollapsed}
          collapseClickHandler={collapseClickHandler}
        />
      </div>
      <CodeMirror
        className={`${
          showCollapsed ? classes[collapsedClass.editorWindow] : ""
        }`}
        value={props.value}
        onBeforeChange={onBeforeChangeHandler}
        options={options}
      />
    </div>
  );
};

export default Editor;
