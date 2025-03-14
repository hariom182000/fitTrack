import React from "react";
import { Text, View } from "react-native";
import BenchPressSvg from "./svgs/BenchPressSvg";

const NoWorkoutsCard = () => {
  return (
    <View className="items-center mt-12">
      <Text className="text-white">
        No workout? No excuses. Get up and move!
      </Text>
      <View className="flex-row justify-center items-center mt-24">
        <BenchPressSvg fill={"#C2C2C2"} height={450} width={450}  />
      </View>
      <Text className="text-white">
        If you’re waiting for a sign… this is it!
      </Text>
    </View>
  );
};

export default NoWorkoutsCard;
