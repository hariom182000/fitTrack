import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import DownSvg from "../svgs/DownSvg";

export default function DropDownSelector({
  dataList,
  setSelectedData,
  selectedData,
  selectionMessage,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View className="bg-silverGrey rounded-xl z-50 absolute px-2.5 py-1">
      <TouchableOpacity
        onPress={() => {
          setShowDropDown((showDropDown) => !showDropDown);
        }}
      >
        <View className="flex-row justify-between items-center  w-full">
          <Text className="text-white w-[85%] text-start">
            {selectedData
              ? showDropDown == true
                ? selectionMessage
                : selectedData
              : selectionMessage}
          </Text>
          <View className="flex-row items-center  mt-1">
            <DownSvg fill={"white"} height={13} width={13} />
          </View>
        </View>
      </TouchableOpacity>
      {showDropDown && (
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedData(item);
                setShowDropDown(false);
              }}
              className={`flex-row justify-center items-center rounded-lg border-2 border-silverBlack p-1 my-1 ${
                item === selectedData
                  ? "bg-silverWhite rounded-xl"
                  : "bg-silverGrey"
              }`}
            >
              <Text
                className={` ${
                  item == selectedData ? " text-black font-bold" : "text-white"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
