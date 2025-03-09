import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-silverBlack h-full">
      <Text className="text-white"> hiiiii </Text>
      <Link href="/lifting" className="text-white">
        track progress now
      </Link>
    </SafeAreaView>
  );
}