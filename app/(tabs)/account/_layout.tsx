import React from "react";
import { Stack, usePathname } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Account",
          headerShadowVisible: false,
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default _layout;
