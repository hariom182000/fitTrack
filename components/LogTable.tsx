import React from "react";
import { View } from "react-native";

export default function LogTable({ children}) {
return(
    <View className="border-silverGrey border-4 rounded-xl max-h-[75%]">
        {children}
    </View>
);
}
