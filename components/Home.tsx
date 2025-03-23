import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import RunnerSvg from "./svgs/RunnerSvg";

export default function Home() {
  return (
    <SafeAreaView className="bg-silverBlack h-full px-4 py-16">
      <View className="w-full h-[65%] items-center justify-center">
        <RunnerSvg fill={"#C2C2C2"} />
      </View>

      <Text className="text-white my-6 text-2xl font-bold">
        {" "}
        Track Your Fitness{" "}
      </Text>

      <Text className="text-white my-6">
        log your gym progress, visualize your journey with graphs, and achieve
        your goals faster.
      </Text>
      <View className="w-full justify-center items-center my-6">
        <Button
          text="track progress now"
          onPress={() => router.push("/lifting")}
        />
      </View>
    </SafeAreaView>
  );
}
