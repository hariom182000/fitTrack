import React from "react";
import { View } from "react-native";
import { LogTableProps } from "@/types";

export default function LogTable({ children }: LogTableProps) {
  return (
    <View className="border-silverGrey border-4 rounded-xl max-h-[80%]">
      {children}
    </View>
  );
}
