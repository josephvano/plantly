import { PlantlyButton } from "@/components/Button";
import { PlantlyImage } from "@/components/PlantlyImage";
import { useUserStore } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
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
      <View>
        <Text style={[styles.text, styles.heading]}>Plantly</Text>
        <Text style={[styles.text, styles.tagline]}>
          Keep your plants happy and hydrated!
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton onPress={handlePress}>Onboard me!</PlantlyButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
  text: {
    color: theme.color.white,
    textAlign: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 24,
  },
  tagline: {
    fontSize: 16,
  },
});
