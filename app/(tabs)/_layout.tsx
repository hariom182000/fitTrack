import { Tabs } from "expo-router";
import React, { Component } from "react";

export default class TabLayout extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Screen name="lifting" options={{ headerShown: false }} />
        <Tabs.Screen name="steps" options={{ headerShown: false }} />
        <Tabs.Screen name="weight" options={{ headerShown: false }} />
      </Tabs>
    );
  }
}