import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (loading) {
          const res = await fetch("https://api.spacexdata.com/v3/launches", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          const json = await res.json();
          setLaunches(json);
          setLoading(false);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
        setLoading(false);
      }
    })();
  }, [loading]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={launches}
        renderItem={({
          item,
          index,
          separators,
        }: {
          item: any;
          index: number;
          separators: any;
        }) => {
          //console.log(item, "ITEM");
          return (
            <Text key={index} style={styles.missionName}>
              {item.mission_name}
            </Text>
          );
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  missionName: {
    fontSize: 24,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
