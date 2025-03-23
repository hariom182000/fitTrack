import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Button from "@/components/Button";
import { Steps } from "@/types";
import StepsSvg from "@/components/svgs/StepsSvg";

export default function StepsScreen() {
  const [todaySteps, setTodaySteps] = useState<number>(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSteps, setNewSteps] = useState("");
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: { data: number[] }[];
  }>({
    labels: [],
    datasets: [{ data: [] }],
  });
  const db = useSQLiteContext();

  const fetchTodaySteps = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await db.getAllAsync<Steps>(
      "SELECT * FROM Steps WHERE date >= ? ORDER BY date DESC LIMIT 1",
      Math.floor(today.getTime() / 1000)
    );
    setTodaySteps(result[0]?.steps || 0);
  };

  const fetchStepsHistory = async () => {
    const result = await db.getAllAsync<Steps>(
      "SELECT * FROM Steps ORDER BY date DESC LIMIT 7"
    );

    const labels = result
      .map((step) => {
        const date = new Date(step.date * 1000);
        return `${date.getDate()}/${date.getMonth() + 1}`;
      })
      .reverse();

    const data = result.map((step) => step.steps).reverse();

    setChartData({
      labels,
      datasets: [{ data }],
    });
  };

  const addSteps = async () => {
    if (!newSteps) return;

    const unixTimestamp = Math.floor(Date.now() / 1000);
    await db.runAsync(
      "INSERT INTO Steps (steps, date) VALUES (?, ?)",
      parseInt(newSteps),
      unixTimestamp
    );

    setShowAddModal(false);
    setNewSteps("");
    fetchTodaySteps();
    fetchStepsHistory();
  };

  useEffect(() => {
    fetchTodaySteps();
    fetchStepsHistory();
  }, []);

  return (
    <SafeAreaView className="bg-silverBlack h-full p-4">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-bold text-white">Steps Tracker</Text>
      </View>

      <View className="bg-silverGrey rounded-lg p-4 mb-6 flex-row justify-between items-center">
        <View>
          <Text className="text-white text-lg mb-2">Today's Steps</Text>
          <Text className="text-white text-3xl font-bold">{todaySteps}</Text>
        </View>
        <Button
          text="Edit"
          onPress={() => setShowAddModal(true)}
          otherStyles={{ width: "40%", backgroundColor: "#1b1b1b" }}
        />
      </View>
      <StepsSvg width={100} height={100} fill={"#C2C2C2"} rotation={160} />
      <ScrollView className="flex-1 my-4">
        <View className="bg-silverGrey rounded-lg p-4">
          <Text className="text-white text-lg mb-4">Weekly Progress</Text>
          {chartData.datasets[0].data.length > 0 ? (
            <LineChart
              data={chartData}
              width={Dimensions.get("window").width - 48}
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
            />
          ) : (
            <Text className="text-white text-center">
              No steps data available
            </Text>
          )}
        </View>
      </ScrollView>
      <View className="flex-row justify-center items-center">
        <StepsSvg width={100} height={100} fill={"#C2C2C2"} rotation={120} />
      </View>
      <View className="flex-row justify-end items-center">
        <StepsSvg width={100} height={100} fill={"#C2C2C2"} rotation={95} />
      </View>

      <Modal
        visible={showAddModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAddModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-silverGrey w-[80%] p-6 rounded-lg">
            <Text className="text-white text-xl font-bold mb-4">
              Edit Steps
            </Text>
            <TextInput
              className="bg-silverBlack text-white py-3 px-4 rounded-lg mb-4"
              placeholder="Enter number of steps"
              placeholderTextColor="#94a0a0"
              keyboardType="numeric"
              value={newSteps}
              onChangeText={setNewSteps}
            />
            <View className="flex-row justify-end space-x-4">
              <TouchableOpacity
                onPress={() => setShowAddModal(false)}
                className="px-4 py-2"
              >
                <Text className="text-white">Cancel</Text>
              </TouchableOpacity>
              <Button text="Add" onPress={addSteps} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
