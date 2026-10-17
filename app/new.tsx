import { View, Text, StyleSheet } from "react-native";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Check it</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
