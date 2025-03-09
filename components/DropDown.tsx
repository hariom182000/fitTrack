import { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";

const Dropdown = ({ options, selectedValue, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="my-3">
      <Pressable
        className="bg-silverGrey p-3 rounded-lg "
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-silverSlate">
          {selectedValue || "Select an Exercise"}
        </Text>
      </Pressable>
      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="flex-1 justify-center items-center rounded-lg"
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-silverGrey rounded-lg w-[60%] max-h-[40%]">
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  className=" border-2 border-silverBlack p-4"
                  onPress={() => {
                    onSelect(item);
                    setModalVisible(false);
                  }}
                >
                  <Text className="text-white">{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Dropdown;