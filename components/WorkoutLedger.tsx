import { deleteLog } from "@/Utils";
import { FlatList, View } from "react-native";
import NoWorkoutsCard from "./NoWorkoutsCard";
import LogTable from "./LogTable";
import Log from "./Log";
import Button from "./Button";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { WorkoutLedgerProps } from "@/types";

interface Workout {
  id: number;
  targetMuscle: string;
  exercise: string;
  weightLifted: number;
  repsDone: number;
  date: number;
}

const WorkoutLedger = ({ workouts, setWorkouts, loadMore }: WorkoutLedgerProps) => {
  const router = useRouter();
  const db = useSQLiteContext();

  return (
    <View>
      {workouts.length == 0 ? (
        <NoWorkoutsCard />
      ) : (
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
      )}
      <View className="flex-row justify-center my-12">
        <Button
          text={"keep Logging"}
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
};

export default WorkoutLedger;
