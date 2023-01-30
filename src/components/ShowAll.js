import { View, Text, Pressable } from "react-native";
import React from "react";
import Container from "./Container";

const ShowAll = () => {
  return (
    <Container>
      <View className="flex justify-between flex-row my-2">
        <Text>Product</Text>
        <Pressable>
          <Text
            onPress={() => {
              alert("oke");
            }}
          >
            View All..
          </Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default ShowAll;
