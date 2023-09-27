import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, UserCircle2 } from "@tamagui/lucide-icons";
import { Tabs, useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          //   tabBarLabel: "1"
          tabBarIcon(props) {
            return (
              <Home
                // name="one-up"
                {...props}
              />
            );
          }
          //   // headerLeft() {
          //   //   return (
          //   //     <Button
          //   //       ml="$2.5"
          //   //       onPress={() => router.push("/")}
          //   //     >
          //   //       <MaterialCommunityIcons name="arrow-left" />
          //   //     </Button>
          //   //   );
          //   // }
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarLabel: "Account",
          tabBarIcon(props) {
            return <UserCircle2 {...props} />;
          }
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
    </Tabs>
  );
}
