import React, { useState } from "react";

import { HawaGrid } from "../../layout";
import clsx from "clsx";
import { HawaLandingCard } from "../../elements";

export default {
  title: "Layout/Grid",
  component: HawaGrid
};
function generateRandomText(minLength, maxLength) {
  const characterPool =
    " a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 ";
  const textLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let randomText = "";

  for (let i = 0; i < textLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    randomText += characterPool[randomIndex];
  }

  return randomText;
}
const Template = (args) => {
  const randomArray = Array.from({ length: 20 }, () => {
    let n = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    let nn = Math.round(Math.random() * 5);
    let height = `px-[${n}px]`;
    const randomText = generateRandomText(10, 500);

    return (
      <HawaLandingCard
        texts={{
          titleTip: "Card",
          title: "Random Hash",
          description: randomText,
          linkText: "More"
        }}
        // className={'bg-red-200'}
      />
      // <div
      //   className={clsx(" w-full rounded bg-red-500 p-10 h-min", height)}
      //     style={{ paddingTop: n }}
      // >
      //   {/* Element {i} */}
      //   <br />
      //   {n}
      // </div>
    );
  });

  const [arr, setArr] = useState(randomArray);
  return (
    <HawaGrid>
      {/* <img src="https://source.unsplash.com/bYuI23mnmDQ" alt="" />
        <img src="https://source.unsplash.com/Nllx4R-2c3o" alt="" />
        <img src="https://source.unsplash.com/lp40q07DIe0" alt="" />
        <img src="https://source.unsplash.com/wfalq01jJuU" alt="" />
        <img src="https://source.unsplash.com/rMHNK_skwwU" alt="" />
        <img src="https://source.unsplash.com/WBMjuGpbrCQ" alt="" />
        <img src="https://source.unsplash.com/nCUZ5BYBL_o" alt="" />
        <img src="https://source.unsplash.com/3u4fzMQZhjc" alt="" />
        <img src="https://source.unsplash.com/haOIqIPSwps" alt="" />
        <img src="https://source.unsplash.com/3UrYD7NNVxk" alt="" />
        <img src="https://source.unsplash.com/fm1JKDItlVM" alt="" />
        <img src="https://source.unsplash.com/qPpq1EVs8vw" alt="" />
        <img src="https://source.unsplash.com/xRyL63AwZFE" alt="" />
        <img src="https://source.unsplash.com/XeNKWTiCPNw" alt="" />
        <img src="https://source.unsplash.com/DFt3T5r_4FE" alt="" />
        <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt="" /> */}
      {arr.map((a, i) => {
        let height = `h-[${a.toString()}px]`.toString();
        return a;
        //   <div
        //     className={clsx(" w-full rounded bg-red-500 p-10", height)}
        //     //   style={{ height: a }}
        //   >
        //     Element {i}
        //     <br />
        //     {a}
        //   </div>
      })}
    </HawaGrid>
  );
};

export const Masonry = Template.bind({});
Masonry.args = {};
