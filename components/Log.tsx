import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import MuscleIcon from "./MuscleIcon";
import DeleteSvg from "./svgs/DeleteSvg";
import { LogProps } from "@/types";

export default function Log({ log, deleteLog }: LogProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <View className="px-4 py-1 bg-silverGrey rounded-lg m-3 flex-row justify-between">
      <View>
        <View className="flex-row items-center">
          <Text className="text-white font-bold">
            {log.targetMuscle.toUpperCase()}
          </Text>
          <View className="items-center ml-4">
            <MuscleIcon muscle={log.targetMuscle} width={40} height={40} />
          </View>
        </View>
        <Text className="text-white mt-1 font-semibold">{log.exercise}</Text>
        <Text className="text-silverSlate mt-1 font-semibold">
          {log.weightLifted}kg x {log.repsDone} reps
        </Text>
      </View>
      <TouchableOpacity
        className="flex-col justify-center"
        onPress={() => setShowDeleteModal(true)}
      >
        <DeleteSvg width={40} height={40} fill={"#C2C2C2"} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-neutral-800">
          <View className="bg-silverGrey p-6 rounded-lg w-4/5">
            <Text className="text-lg font-bold text-white mb-4">
              Delete Log?
            </Text>
            <Text className="text-white">
              Are you sure you want to delete this workout log?
            </Text>
            <View className="flex-row justify-end mt-6">
              <Pressable
                onPress={() => setShowDeleteModal(false)}
                className="mr-4"
              >
                <Text className="text-silverSlate">Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  deleteLog(log);
                  setShowDeleteModal(false);
                }}
              >
                <Text className="text-white font-bold">Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
