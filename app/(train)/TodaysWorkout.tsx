import WorkoutLedger from "@/components/WorkoutLedger";
import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodaysWorkout() {
  const db = useSQLiteContext();
  const [workouts, setWorkouts] = useState([]);
  const [page, setPage] = useState(0);
  const LIMIT = 10;

  const fetchWorkouts = async () => {
    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    const lifts = db.getAllSync(
      `SELECT * FROM Lifts WHERE date >= ? ORDER BY date DESC LIMIT ? OFFSET ?`,
      Math.floor(todaysDate.getTime() / 1000),
      LIMIT,
      page * LIMIT
    );
    setWorkouts((prevWorkouts) => [...prevWorkouts, ...lifts]);
  };

  useEffect(() => {
    fetchWorkouts();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-silverBlack h-full">
      <Text className="text-xl font-bold text-white mb-4">Todays Workouts</Text>
      <WorkoutLedger
        workouts={workouts}
        loadMore={loadMore}
        setWorkouts={setWorkouts}
      />
    </SafeAreaView>
  );
}
