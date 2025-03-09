import Button from "@/components/Button";
import Log from "@/components/Log";
import LogTable from "@/components/LogTable";
import NoWorkoutsCard from "@/components/NoWorkoutsCard";
import BencPressSvg from "@/components/svgs/BencPressSvg";
import { deleteLog } from "@/Utils";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodaysWorkout() {
  const db = useSQLiteContext();
  const router = useRouter();
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
      {workouts.length == 0 ?  (
      < NoWorkoutsCard/>
      ) : (
        <View>
        
          <LogTable>
            <FlatList
              data={workouts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Log
                  log={item}
                  deleteLog={() => {
                    deleteLog({ log: item, db, setWorkouts });
                  }}
                />
              )}
              onEndReached={loadMore}
              onEndReachedThreshold={0.5}
            />
          </LogTable>
          <View className="flex-row justify-center my-12">
            <Button
              text={"keep Logging"}
              onPress={() => {
                router.replace("/(train)/LogWorkouts");
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
