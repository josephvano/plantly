import { Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { useUserStore } from "@/lib";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.color.green,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          title: "Plantly",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
