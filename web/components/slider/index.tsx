import React from "react";
import { SProps } from "ssr-types";
import { ItemMapArr } from "~/typings/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "antd";
import "swiper/swiper.min.css";
import styles from "./index.module.less";

// 示例代码特殊处理 swiper 的 useLayoutEffect 在服务端渲染报错，实际应用可自行删除
React.useLayoutEffect = React.useEffect;

interface Props extends SProps {
  data: ItemMapArr[];
}

const params = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
};

function Slider(props: Props) {
  const data = props.data[0];
  return (
    <div className={styles.swiperContainer}>
      <Swiper {...params}>
        {data.itemMap.map((val) => (
          <SwiperSlide key={val.img}>
            <img src={val.img} className={styles.carouselImg} />
            <Button type="primary">132</Button>
            <div className={styles.sliderDescContainer}>
              <span className={styles.sliderTitle}>{val.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
