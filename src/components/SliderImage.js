import { View, Text } from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";

const SliderImage = () => {
  const [slideImage, setSlideImage] = useState([
    require("../img/dummy-banner-01.jpeg"),
    require("../img/dummy-banner-02.jpeg"),
    require("../img/dummy-banner-03.png"),
    require("../img/dummy-banner-04.jpeg"),
  ]);

  return (
    <View>
      <SliderBox
        images={slideImage}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#c8522d"
        autoplay
        circleLoop
      />
    </View>
  );
};

export default SliderImage;
