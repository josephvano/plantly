import { PlantlyButton } from "@/components/Button";
import { useUserStore } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={[
        theme.color.green,
        theme.color.greenLight,
        theme.color.greenLighter,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <PlantlyButton onPress={handlePress}>Onboard me!</PlantlyButton>
    </LinearGradient>
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
