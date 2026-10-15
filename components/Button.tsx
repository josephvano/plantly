import { theme } from "@/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  onPress: () => void;
  children: React.ReactNode;
};

export const Button = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: theme.color.primary,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: theme.color.white,
  },
});
