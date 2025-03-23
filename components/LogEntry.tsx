import React from "react";
import { TextInput, View } from "react-native";
import Dropdown from "./DropDown";
import { EXCERICSE_FOR_MUSCLE } from "@/constants";
import Button from "./Button";
import { LogEntryProps } from "@/types";

export default function LogEntry({ targetMuscle, liftData, onChange, onSubmit }: LogEntryProps) {
  return (
    <View className="z-40">
      <Dropdown
        onSelect={(selectedExercise: string) => {
          onChange({ ...liftData, selectedExercise: selectedExercise });
        }}
        placeHolderMessage={"select exercise"}
        selectedValue={liftData.selectedExercise || ""}
        options={EXCERICSE_FOR_MUSCLE[targetMuscle as keyof typeof EXCERICSE_FOR_MUSCLE] || []}
      />

      <TextInput
        className="flex-row justify-center items-center text-white py-3 my-3 bg-silverGrey rounded-lg px-3"
        placeholder="Weight Lifted"
        value={liftData?.weightLifted || ""}
        inputMode="numeric"
        placeholderTextColor={"#94a0a0"}
        keyboardType="numeric"
        onChangeText={(weightLifted) =>
          onChange({ ...liftData, weightLifted: weightLifted })
        }
      />

      <TextInput
        className="flex-row justify-center items-center text-white py-3 my-3 px-3 bg-silverGrey rounded-lg"
        placeholder="Reps Done"
        value={liftData?.repsDone || ""}
        keyboardType="numeric"
        inputMode="numeric"
        placeholderTextColor={"#94a0a0"}
        onChangeText={(repsDone) =>
          onChange({ ...liftData, repsDone: repsDone })
        }
      />
      <View className="flex-row justify-center py-5">
        <Button text="submit" onPress={onSubmit} />
      </View>
    </View>
  );
}