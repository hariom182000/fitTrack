import React, { forwardRef } from "react";
import { Pressable, Text } from "react-native";

const Card = forwardRef(({ text, onPress, otherStyles }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className="flex-row w-full justify-center item-center rounded-lg py-12 bg-silverGrey"
      style={{ ...otherStyles }}
    >
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
});

export default Card;