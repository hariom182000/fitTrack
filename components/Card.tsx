import React, { forwardRef } from "react";
import { Pressable, Text, View } from "react-native";

interface CardProps {
  text: string;
  onPress: () => void;
  otherStyles?: any;
  iconComponent?: React.ReactNode;
}

const Card = forwardRef<View, CardProps>(
  ({ text, onPress, otherStyles, iconComponent }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        className="w-full rounded-lg py-8 bg-silverGrey"
        style={{ ...otherStyles }}
      >
        <View className="items-center justify-center">
          {iconComponent && (
            <View className="mb-2">
              {iconComponent}
            </View>
          )}
          <Text className="text-white text-center">{text}</Text>
        </View>
      </Pressable>
    );
  }
);

export default Card;
