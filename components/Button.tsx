import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export default function Button({
  text,
  onPress,
  otherStyles,
  iconComponent,
}: {
  text: string;
  onPress: () => void;
  otherStyles?: StyleProp<ViewStyle>;
  iconComponent?: React.ReactNode;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-silverGrey w-[40%] py-3.5 rounded-3xl"
      style={otherStyles}
    >
      <View className="flex-row justify-around items-center max-h-[30px]">
        <Text className="text-white">{text}</Text>
        {iconComponent && <View className="my-2">{iconComponent}</View>}
      </View>
    </TouchableOpacity>
  );
}
