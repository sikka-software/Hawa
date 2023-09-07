import React from "react";
import { Card, CardContent, Carousel } from "../../elements";

export default {
  title: "Elements/Carousel",
  component: Carousel
};

const images = [
  "https://source.unsplash.com/9bp48ITvd00",
  "https://source.unsplash.com/4HG5hlhmZg8",
  "https://source.unsplash.com/oBmlsTW2pHY",
  "https://source.unsplash.com/1kdIG_258bU",
  "https://source.unsplash.com/l8vKWxhVuts",
  "https://source.unsplash.com/0LGDmbnk0-U",
  "https://source.unsplash.com/tVqQSfXQ_SI",
  "https://source.unsplash.com/9bp48ITvd00",
  "https://source.unsplash.com/4HG5hlhmZg8",
  "https://source.unsplash.com/oBmlsTW2pHY",
  "https://source.unsplash.com/1kdIG_258bU",
  "https://source.unsplash.com/l8vKWxhVuts",
  "https://source.unsplash.com/0LGDmbnk0-U",
  "https://source.unsplash.com/tVqQSfXQ_SI",
  "https://source.unsplash.com/9bp48ITvd00",
  "https://source.unsplash.com/4HG5hlhmZg8",
  "https://source.unsplash.com/oBmlsTW2pHY",
  "https://source.unsplash.com/1kdIG_258bU",
  "https://source.unsplash.com/l8vKWxhVuts",
  "https://source.unsplash.com/0LGDmbnk0-U",
  "https://source.unsplash.com/tVqQSfXQ_SI",
  "https://source.unsplash.com/9bp48ITvd00",
  "https://source.unsplash.com/4HG5hlhmZg8",
  "https://source.unsplash.com/oBmlsTW2pHY",
  "https://source.unsplash.com/1kdIG_258bU",
  "https://source.unsplash.com/l8vKWxhVuts",
  "https://source.unsplash.com/0LGDmbnk0-U",
  "https://source.unsplash.com/tVqQSfXQ_SI",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400",
  "https://via.placeholder.com/1000x400"
];

export const CarouselStory = () => {
  return (
    <Card>
      <CardContent headless>
        <Carousel images={images} />
      </CardContent>
    </Card>
  );
};

CarouselStory.storyName = "Carousel";
