import Card from "@/components/Card";
import { Link } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class lifting extends Component {
  render() {
    return (
      <SafeAreaView className="bg-silverBlack h-full">
        <Text> lifting </Text>
        <View className="flex-row flex-wrap justify-evenly">
          <Link href="/(train)/LogWorkouts" asChild>
            <Card
              text="Log Workout"
              otherStyles={{
                width: "40%",
                marginVertical: "10%",
                marginHorizontal: "2%",
              }}
            />
          </Link>

          <Link href="/(train)/PastWorkouts" asChild>
            <Card
              text="Past Workouts"
              otherStyles={{
                width: "40%",
                marginVertical: "10%",
                marginHorizontal: "2%",
              }}
            />
          </Link>
          <Link href="/(train)/TodaysWorkout" asChild>
            <Card
              text="Todays Workout"
              otherStyles={{
                width: "40%",
                marginVertical: "10%",
                marginHorizontal: "2%",
              }}
            />
          </Link>
          <Link href="/(train)/ViewProgress" asChild>
            <Card
              text="View Progress"
              otherStyles={{
                width: "40%",
                marginVertical: "10%",
                marginHorizontal: "2%",
              }}
            />
          </Link>
        </View>
      </SafeAreaView>
    );
  }
}
