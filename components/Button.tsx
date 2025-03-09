import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-silverGrey flex justify-center items-center w-[40%] py-3 rounded-lg"
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}