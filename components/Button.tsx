import { theme } from "@/theme";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  Platform,
} from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  onPress: () => void;
  children: React.ReactNode;
};

export const PlantlyButton = ({ onPress, children }: Props) => {
  const handlePressed = async () => {
    if (Platform.OS !== "web") {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={handlePressed}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: theme.color.primary,
  },
  pressed: {
    backgroundColor: theme.color.secondary,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: theme.color.white,
  },
});
