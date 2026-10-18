import { PlantCard } from "@/components/PlantCard";
import { usePlantStore } from "@/lib";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const plants = usePlantStore((state) => state.plants);
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
    >
      <StatusBar style="auto" />
    </FlatList>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
