import { useUserStore } from "@/lib";
import { StyleSheet, View, Text } from "react-native";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);

  const handleToggle = () => {
    console.log("Toggle onboarding");
    toggleOnboarding();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.lead}>This is the profile screen</Text>
      <PlantlyButton onPress={handleToggle}>Back to onboarding</PlantlyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  lead: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
