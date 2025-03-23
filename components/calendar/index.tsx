import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import DropDownSelector from "./DropDownSelector";
import { getDateData, getYears } from "@/Utils";
import MonthSelector from "./MonthSelector";
import { DAYS, MONTHS } from "@/constants";
import DateCard from "./DateCard";
import { useRouter } from "expo-router";

export default function Calendar({}) {
  const years = getYears();

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(
    MONTHS[new Date(Date.now()).getMonth()]
  );
  const router = useRouter();

  const datesGrid = useMemo(() => {
    const dateList = getDateData({
      year: selectedYear,
      monthIndex: MONTHS.indexOf(selectedMonth),
    });
    const datesGrid = [];
    let week = [null, null, null, null, null, null, null];
    dateList.forEach((date) => {
      week[date.getDay()] = date.getDate();
      if (date.getDay() === 6) {
        datesGrid.push(week);
        week = [null, null, null, null, null, null, null];
      }
    });
    if (week.length > 0) {
      datesGrid.push(week);
    }
    return datesGrid;
  }, [selectedYear, selectedMonth]);

  const handleOnPress = ({ date }) => {
    router.replace({
      pathname: `/(train)/ViewWorkout`,
      params: {
        date,
        monthIndex: MONTHS.indexOf(selectedMonth),
        year: selectedYear,
      },
    });
  };

  return (
    <View className="px-3">
      <View className="flex-row justify-end">
        <View className="w-[30%] mt-10">
          <DropDownSelector
            dataList={years}
            selectedData={selectedYear}
            setSelectedData={setSelectedYear}
            selectionMessage={"select Year"}
          />
        </View>
      </View>

      <View className="mt-12 w-full  bg-silverGrey p-2 rounded-xl">
        <MonthSelector
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </View>

      <View className="flex-row justify-evenly mt-5 mb-2 bg-silverGrey p-2 rounded-xl">
        {DAYS.map((day, index) => (
          <View key={index} className="w-[14%] items-center">
            <Text className="text-white text-center">{day}</Text>
          </View>
        ))}
      </View>
      {datesGrid.map((week, index) => (
        <View key={index} className="flex-row justify-evenly">
          {week.map((date) => (
            <DateCard date={date} handleOnPress={handleOnPress} />
          ))}
        </View>
      ))}
    </View>
  );
}
