import { PlantlyButton } from "@/components/Button";
import { useUserStore } from "@/lib";
import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import { theme } from "@/theme";

export default function OnboardingScreen() {
  const router = useRouter();

  const toggleOnboarding = useUserStore((state) => state.toggleOnboarding);

  const handlePress = () => {
    console.log("Clicked onboarding");
    toggleOnboarding();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <PlantlyButton onPress={handlePress}>Onboard me!</PlantlyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
});
