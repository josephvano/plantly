import { Entypo, Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";

const hasFinishedOnboarding = false;

export default function Layout() {
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
        name="index"
        options={{
          tabBarShowLabel: false,
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
