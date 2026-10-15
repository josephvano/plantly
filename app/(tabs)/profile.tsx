import { StyleSheet, View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.lead}>This is the profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lead: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
