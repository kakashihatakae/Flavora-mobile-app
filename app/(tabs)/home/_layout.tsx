import React from "react";
import { Pressable } from "react-native";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Link, Stack } from "expo-router";
import { View } from "tamagui";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="menu_feed"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="menu_details/[id]"
        options={{
          headerLeft: () => (
            <Link
              href="/home/menu_feed"
              asChild
            >
              <Pressable>
                <View
                  backgroundColor="$backgroundStrong"
                  borderRadius="$10"
                  padding="$2"
                >
                  <ArrowLeft size="$1.5" />
                </View>
              </Pressable>
            </Link>
          ),
          headerTransparent: true,
          headerTitle: ""
        }}
      />
    </Stack>
  );
};

export default _layout;
