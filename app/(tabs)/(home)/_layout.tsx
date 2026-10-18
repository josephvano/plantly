import { theme } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href={"/new"} asChild>
              <Pressable hitSlop={16}>
                <Feather
                  name="plus-circle"
                  size={36}
                  color={theme.color.green}
                  style={{ marginRight: 16 }}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackTitle: "",
          headerTintColor: theme.color.black,
        }}
      />
    </Stack>
  );
}
