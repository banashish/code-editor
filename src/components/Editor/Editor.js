import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import classes from "./Editor.module.css";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

const Editor = (props) => {
  const options = props.options;

  const onBeforeChangeHandler = ((editor, data, value) => {
    props.onBeforeChangeHandler(value);
  });
  return (
      <div className={classes.editor}>
          <p className={classes['editor-heading']}>{props.heading}</p>
          <CodeMirror
            className={`react-codemirror2`}
            value={props.value}
            onBeforeChange={onBeforeChangeHandler}
            options={options}
          />
      </div>
  );
};

export default Editor;
