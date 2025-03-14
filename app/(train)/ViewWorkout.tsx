import WorkoutLedger from "@/components/WorkoutLedger";
import { MONTHS } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ViewWorkout() {
  const { date, monthIndex, year } = useLocalSearchParams();
  const db = useSQLiteContext();
  const [workouts, setWorkouts] = useState([]);
  const [page, setPage] = useState(0);
  const LIMIT = 10;

  const fetchWorkouts = async () => {
    const targetDate = new Date(year, monthIndex, date).getTime() / 1000;
    const nextDay = new Date(year, monthIndex, date + 1).getTime() / 1000;
    const lifts = db.getAllSync(
      `SELECT * FROM Lifts 
       WHERE date >= ? AND date < ? 
       ORDER BY date DESC LIMIT ? OFFSET ?`,
      targetDate,
      nextDay,
      LIMIT,
      page * LIMIT
    );
    console.log("lifts are", lifts);
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
      <Text className="text-xl font-bold text-white mb-4">{`Workout Log for  ${date} ${MONTHS[monthIndex]} ${year}`}</Text>
      <WorkoutLedger
        workouts={workouts}
        loadMore={loadMore}
        setWorkouts={setWorkouts}
      />
    </SafeAreaView>
  );
}
