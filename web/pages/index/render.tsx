import React, { useContext } from "react";
import { SProps, IContext } from "ssr-types";
import { IData } from "~/typings/data";
import { useStoreContext } from "ssr-common-utils";
// import styles from "./index.less";

import MyCalendar from "@/components/calendar/index";
import MyList from "../list/index";
import MyEdit from "../edit/index";

import styles from "./index.module.less";

export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(useStoreContext());
  console.log(12, state);
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.calendarContainer}`}>
        <MyCalendar />
      </div>
      <div className={`${styles.content} ${styles.listContainer}`}>
        <MyList />
      </div>
      <div className={`${styles.content} ${styles.editContainer}`}>
        <MyEdit />
      </div>
    </div>
  );
}
