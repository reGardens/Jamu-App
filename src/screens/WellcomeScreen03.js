import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import ViewContainer from "../components/ViewContainer";

const WellcomeScreen03 = ({ navigation }) => {
  return (
    <ViewContainer className="flex-1 justify-center items-center">
      <Text className="text-3xl text-black font-extrabold">Page 3</Text>

      <TouchableOpacity className="absolute bottom-40">
        <Pressable
          title="Next"
          className="bg-[#FFD8A9] px-7 py-2 rounded-md"
          onPress={() => {
            navigation.navigate("WellcomeScreen01");
          }}
        >
          <Text className="font-bold">Finish</Text>
        </Pressable>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default WellcomeScreen03;
