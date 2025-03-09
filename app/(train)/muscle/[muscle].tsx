import LogEntry from "@/components/LogEntry";
import MuscleIcon from "@/components/MuscleIcon";
import { MUSCLE_MESSAGES } from "@/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function trainMuscle() {
  const { muscle } = useLocalSearchParams();

  const [liftData, setLiftData] = useState({
    selectedExercise: "",
    weightLifted: 0,
    repsDone: 0,
  });

  const db = useSQLiteContext();
  const router = useRouter();

  const logEntryInDb = async () => {
    const statement = await db.prepareAsync(
      "INSERT INTO Lifts (targetMuscle, weightLifted, repsDone, date) VALUES ($targetMuscle, $weightLifted, $repsDone, $date)"
    );
    const unixTimestamp = Math.floor(Date.now() / 1000);
    await statement
      .executeAsync({
        $targetMuscle: muscle,
        $weightLifted: liftData.weightLifted,
        $repsDone: liftData.repsDone,
        $date: unixTimestamp,
      })
      .then(() => {
        router.replace("/(train)/TodaysWorkout");
      })
      .catch(() => {});
  };

  return (
    <SafeAreaView className="flex-row items-center justify-center px-2 bg-silverBlack h-full ">
      <View className="w-[90%] ">
        <View className="flex-row justify-center m-4">
          <Text className="text-white font-bold">
            {MUSCLE_MESSAGES[muscle]}
          </Text>
        </View>

        <View className="flex-row justify-center">
          <MuscleIcon muscle={muscle} />
        </View>
        <LogEntry
          targetMuscle={muscle}
          liftData={liftData}
          onChange={setLiftData}
          onSubmit={logEntryInDb}
        />
      </View>
    </SafeAreaView>
  );
}
