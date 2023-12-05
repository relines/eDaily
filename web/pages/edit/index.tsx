import React, { useState } from "react";
import NoSSR from "react-no-ssr";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import styles from "./index.module.less";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

type Iprops = {};

export default function Index(props: Iprops) {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      1234
      <NoSSR>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </NoSSR>
    </div>
  );
}
