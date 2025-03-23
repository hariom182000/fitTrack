import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-chart-kit";
import { useSQLiteContext } from "expo-sqlite";
import Dropdown from "@/components/DropDown";
import WorkoutTooltip from "@/components/WorkoutTooltip";
import { EXCERICSE_FOR_MUSCLE, MUSCLES } from "@/constants";
import { Workout } from "@/types";

interface ChartData {
  labels: string[];
  datasets: { data: number[] }[];
}

interface TooltipData {
  date: string;
  sets: Workout[];
}

const ITEMS_PER_PAGE = 30;

export default function ViewProgress() {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [lastDate, setLastDate] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [allWorkouts, setAllWorkouts] = useState<Workout[]>([]);

  const db = useSQLiteContext();

  const fetchExerciseData = async (pageNum: number = 0) => {
    if (!selectedExercise) return;
    setIsLoading(true);

    try {
      let query = `
        SELECT weightLifted, date, repsDone, id, targetMuscle, exercise
        FROM Lifts 
        WHERE exercise = ?
      `;
      const params: (string | number)[] = [selectedExercise];

      if (lastDate) {
        query += " AND date < ?";
        params.push(lastDate);
      }

      query += " ORDER BY date ASC LIMIT ?";
      params.push(ITEMS_PER_PAGE);

      const lifts = await db.getAllAsync<Workout>(query, ...params);

      if (lifts.length < ITEMS_PER_PAGE) {
        setHasMoreData(false);
      }

      if (lifts.length > 0) {
        setLastDate(lifts[lifts.length - 1].date);
      }

      // Group lifts by date
      const liftsByDate = lifts.reduce((acc, lift) => {
        const date = new Date(lift.date * 1000);
        const dateKey = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        
        if (!acc[dateKey]) {
          acc[dateKey] = {
            date: dateKey,
            sets: [],
          };
        }
        acc[dateKey].sets.push(lift);
        return acc;
      }, {} as Record<string, { date: string; sets: Workout[] }>);

      // Convert to arrays for the chart
      const newLabels = Object.values(liftsByDate).map(({ date, sets }) => {
        return `${date} (${sets.length} sets)`;
      });

      const newData = Object.values(liftsByDate).map(({ sets }) => {
        return Math.max(...sets.map(set => set.weightLifted));
      });

      // Store all workouts for tooltip
      if (pageNum === 0) {
        setAllWorkouts(lifts);
        setChartData({
          labels: newLabels,
          datasets: [{ data: newData }],
        });
      } else {
        setAllWorkouts(prev => [...prev, ...lifts]);
        setChartData(prev => ({
          labels: [...prev.labels, ...newLabels],
          datasets: [{
            data: [...prev.datasets[0].data, ...newData]
          }]
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPage(0);
    setHasMoreData(true);
    setLastDate(null);
    fetchExerciseData(0);
  }, [selectedExercise]);

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const paddingToBottom = 20;
    const isCloseToBottom = contentOffset.x + layoutMeasurement.width >= contentSize.width - paddingToBottom;

    if (isCloseToBottom && hasMoreData && !isLoading) {
      setPage(prev => prev + 1);
      fetchExerciseData(page + 1);
    }
  };

  const handleDataPointClick = (data: any) => {
    const date = chartData.labels[data.index].split(' ')[0]; // Get date part without sets count
    const workoutsForDate = allWorkouts.filter(workout => {
      const workoutDate = new Date(workout.date * 1000);
      const workoutDateStr = `${workoutDate.getDate()}/${workoutDate.getMonth() + 1}/${workoutDate.getFullYear()}`;
      return workoutDateStr === date;
    });

    setTooltipData({
      date,
      sets: workoutsForDate
    });
    setShowTooltip(true);
  };

  return (
    <SafeAreaView className="flex-1 p-4 py-10 bg-silverBlack h-full">
      <View className="flex-row items-center mb-4">
        <Text className="text-xl font-bold text-white">Lets flex those numbers !!</Text>
      </View>
      
      <View className="mb-4">
        
        <Dropdown
          onSelect={setSelectedMuscle}
          selectedValue={selectedMuscle}
          options={MUSCLES}
          placeHolderMessage="Select muscle group"
        />
      </View>

      {selectedMuscle && (
        <View className="mb-4">
          
          <Dropdown
            onSelect={setSelectedExercise}
            selectedValue={selectedExercise}
            options={EXCERICSE_FOR_MUSCLE[selectedMuscle as keyof typeof EXCERICSE_FOR_MUSCLE] || []}
            placeHolderMessage="Select exercise"
          />
        </View>
      )}

      {selectedExercise && chartData.datasets[0].data.length > 0 && (
        <View className="mt-4">
           
          <Text className="text-silverSlate text-sm mb-2">Showing highest weight per day</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <LineChart
              data={chartData}
              width={Math.max(Dimensions.get("window").width - 32, chartData.labels.length * 50)}
              height={220}
              chartConfig={{
                backgroundColor: "#1E1E1E",
                backgroundGradientFrom: "#1E1E1E",
                backgroundGradientTo: "#1E1E1E",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              withDots={true}
              withInnerLines={true}
              withOuterLines={true}
              withVerticalLines={true}
              withHorizontalLines={true}
              withVerticalLabels={true}
              withHorizontalLabels={true}
              withShadow={true}
              onDataPointClick={handleDataPointClick}
            />
          </ScrollView>
          {isLoading && (
            <Text className="text-silverSlate text-sm text-center mt-2">Loading more data...</Text>
          )}
        </View>
      )}

      {tooltipData && (
        <WorkoutTooltip
          visible={showTooltip}
          onClose={() => setShowTooltip(false)}
          date={tooltipData.date}
          sets={tooltipData.sets}
        />
      )}
    </SafeAreaView>
  );
}

