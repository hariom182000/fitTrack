import Card from "@/components/Card";
import { MUSCLES } from "@/constants";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";
import MuscleIcon from "@/components/MuscleIcon";

export default function LogWorkouts() {
  const db = SQLite.useSQLiteContext();
  useEffect(() => {
    async function setup() {
      try {
        const result = await db.getAllAsync("SELECT * FROM Lifts");
      } catch (error) {}
    }
    setup();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-silverBlack">
      <View className="p-4">
        <Text className="text-xl font-bold mb-4 text-white">Log Workouts</Text>
      </View>
      <ScrollView className="flex-1 px-4">
        <View className="flex-row flex-wrap justify-between">
          {MUSCLES.map((muscle) => (
            <View key={muscle} className="w-[48%] mb-4">
              <Link href={`/muscle/${muscle}`} asChild>
                <Card
                  text={muscle}
                  iconComponent={
                    <MuscleIcon muscle={muscle} width={80} height={80} />
                  }
                  onPress={() => {}}
                />
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
