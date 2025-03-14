import { Stack } from "expo-router";
import React from "react";
export default function TrainLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="LogWorkouts"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="PastWorkouts"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ViewProgress"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="TodaysWorkout"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="muscle/[muscle]"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ViewWorkout"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
