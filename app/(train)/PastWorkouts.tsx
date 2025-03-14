import Calendar from "@/components/calendar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PastWorkouts() {
  return (
    <SafeAreaView className="flex-1 p-4 bg-silverBlack h-full">
      <Text className="text-xl font-bold text-white mb-4">Past Workouts</Text>
      <Calendar />
    </SafeAreaView>
  );
}