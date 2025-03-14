import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DateCard({ date, handleOnPress }) {
  const [isTouched, setIsTouched] = useState(false);

  return date !== undefined && date !== "" ? (
    <TouchableOpacity
      className={`w-[14%] flex-row justify-evenly p-3 items-center rounded-full ${
        isTouched ? "bg-silverGrey" : ""
      }`}
      onPress={() => handleOnPress({ date })}
      onPressIn={() => setIsTouched(true)}
      onPressOut={() => setIsTouched(false)}
      accessibilityRole="button"
      accessibilityLabel={`Date: ${date}`}
    >
      <Text className="text-white text-center">{date}</Text>
    </TouchableOpacity>
  ) : (
    <View className="w-[14%]"></View>
  );
}
