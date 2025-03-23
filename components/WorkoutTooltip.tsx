import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Workout } from '@/types';

interface WorkoutTooltipProps {
  visible: boolean;
  onClose: () => void;
  date: string;
  sets: Workout[];
}

export default function WorkoutTooltip({ visible, onClose, date, sets }: WorkoutTooltipProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        className="flex-1 justify-center items-center bg-black/50"
        activeOpacity={1}
        onPress={onClose}
      >
        <View className="bg-silverGrey p-4 rounded-lg w-4/5">
          <Text className="text-white text-lg font-bold mb-2">
            Workout Summary for {date}
          </Text>
          {sets.map((set, index) => (
            <View key={index} className="mb-2">
              <Text className="text-white">
                Set {index + 1}: {set.weightLifted}kg × {set.repsDone} reps
              </Text>
            </View>
          ))}
          <TouchableOpacity 
            className="mt-4 bg-silverBlack p-2 rounded-lg"
            onPress={onClose}
          >
            <Text className="text-white text-center">Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
} 