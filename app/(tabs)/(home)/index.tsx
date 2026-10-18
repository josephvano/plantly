import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/lib";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          onPress={() => {
            router.navigate("/new");
          }}
        >
          Add your first plant
        </PlantlyButton>
      }
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
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
