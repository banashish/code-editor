import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import classes from "./EditorWindow.module.css";

const EditorWindow = (props) => {
    const [HTMLValue, setHTMLValue] = useState("<p>Enter your html here</p>");
    const [CSSValue, setCSSValue] = useState("/* here comes your styling */");
    const [JSValue, setJSValue] = useState("// here your js");
    const templateString = `
    <html>
    <head>
    <style>
    ${CSSValue}
    </style>
    <body>
    ${HTMLValue}
    <script>
    ${JSValue}
    </script>
    </body>
    `
    const onBeforeChangeHandler = (editor, value) => {
        if (editor === "HTML") {
            setHTMLValue(value);
        }
        else if (editor === "CSS") {
            setCSSValue(value);
        } else {
            setJSValue(value);
        }
    }

    useEffect(() => {
        props.sourceDocHandler(templateString);
    },[props, templateString])

    return (
        <div className={classes["editor-window"]}>
            <Editor
                options={{
                    mode: "xml",
                    theme: "material",
                }}
                heading="HTML"
                value={HTMLValue}
                onBeforeChangeHandler={onBeforeChangeHandler.bind(null, "HTML")}
            />
            <Editor
                options={{
                    mode: "css",
                    theme: "material",
                }}
                heading="CSS"
                value={CSSValue}
                onBeforeChangeHandler={onBeforeChangeHandler.bind(null, "CSS")}
            />
            <Editor
                options={{
                    mode: "javascript",
                    theme: "material",
                }}
                heading="JS"
                value={JSValue}
                onBeforeChangeHandler={onBeforeChangeHandler.bind(null, "js")}
            />
        </div>
    );
};

export default EditorWindow;
