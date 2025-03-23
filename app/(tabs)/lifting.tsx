import Card from "@/components/Card";
import CalendarSvg from "@/components/svgs/calendarSvg";
import DumbellSvg from "@/components/svgs/DumbellSvg";
import GraphSvg from "@/components/svgs/GraphSvg";
import LogWorkoutSvg from "@/components/svgs/LogWorkoutSvg";
import { Link } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class lifting extends Component {
  render() {
    return (
      <SafeAreaView className="bg-silverBlack h-full">
        <View className="flex-row flex-wrap justify-evenly">
          <Link href="/(train)/LogWorkouts" asChild>
            <Card
              text="Log Workout"
              otherStyles={{
                width: "40%",
                marginVertical: "10%",
                marginHorizontal: "2%",
              }}
              iconComponent={
                <LogWorkoutSvg fill={"#C2C2C2"} width={80} height={80} />
              }
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
              iconComponent={
                <CalendarSvg fill={"#C2C2C2"} width={80} height={80} />
              }
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
              iconComponent={
                <DumbellSvg fill={"#C2C2C2"} width={80} height={80} />
              }
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
              iconComponent={
                <GraphSvg fill={"#C2C2C2"} width={80} height={80} />
              }
            />
          </Link>
        </View>
      </SafeAreaView>
    );
  }
}
