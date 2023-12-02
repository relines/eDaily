import React, { useContext } from "react";
import { SProps } from "ssr-types";
import styles from "./index.module.less";

type Iprops = {};

export default function Index(props: Iprops) {
  const data = [
    {
      id: 1,
      title: "title1",
      desc: "test1",
      createTime: "2023-12-02 23:33:00",
    },
    {
      id: 2,
      title: "title2",
      desc: "test2",
      createTime: "2023-12-03 23:03:00",
    },
  ];
  return (
    <div className={styles.container}>
      {data.map((item: any) => {
        return (
          <div className={`${styles.itemContainer}`}>
            <div>{item.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
