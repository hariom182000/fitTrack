import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MONTHS } from "@/constants";
import LeftSvg from "../svgs/LeftSvg";
import RightSvg from "../svgs/RightSvg";

export default function MonthSelector({ selectedMonth, setSelectedMonth }) {
  const months = MONTHS;
  const onLeftClick = () => {
    const index = months.indexOf(selectedMonth);
    if (index > 0) setSelectedMonth(months[index - 1]);
  };
  const onRightClick = () => {
    const index = months.indexOf(selectedMonth);
    if (index < 11) setSelectedMonth(months[index + 1]);
  };
  return (
    <View className="w-full flex-row justify-evenly">
      <TouchableOpacity onPress={onLeftClick} className="mt-1">
        {" "}
        <LeftSvg width={20} height={20} fill={"white"} />{" "}
      </TouchableOpacity>

      <Text className="text-white mx-28 w-[22%] text-center">
        {" "}
        {selectedMonth}
      </Text>

      <TouchableOpacity onPress={onRightClick} className="mt-1">
        {" "}
        <RightSvg width={20} height={20} fill={"white"} />{" "}
      </TouchableOpacity>
    </View>
  );
}
