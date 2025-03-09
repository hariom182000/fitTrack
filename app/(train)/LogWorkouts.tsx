import Card from "@/components/Card";
import { MUSCLES } from "@/constants";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogWorkouts() {
  const db = SQLite.useSQLiteContext();
  useEffect(() => {
    async function setup() {
      try {
        const result = await db.getAllAsync("SELECT * FROM Lifts");
      } catch (error) {
      }
    }
    setup();
  }, []);

  return (
    <SafeAreaView className="flex-1 p-4 bg-silverBlack h-full">
      <Text className="text-xl font-bold mb-4 text-white">Log Workouts</Text>
      <View className="flex-row flex-wrap justify-between">
        {MUSCLES.map((muscle) => (
          <View key={muscle} className="w-[48%] mb-4">
            <Link href={`/muscle/${muscle}`} asChild>
              <Card text={muscle} />
            </Link>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
