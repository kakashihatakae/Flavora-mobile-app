import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, Text, YStack } from "tamagui";

import { getAllActiveMenus } from "../../../components/Home/HomeHelper";
import MenuCard from "../../../components/Home/MenuCard";

export default function Tab1() {
  useEffect(() => {
    const homeApiCall = async () => {
      getAllActiveMenus();
    };
    homeApiCall();
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <YStack
      paddingHorizontal="$4"
      backgroundColor="$backgroundStrong"
      paddingTop={insets.top}
      flex={1}
    >
      <Text
        fontWeight="600"
        fontSize="$9"
        marginTop="$2"
        marginBottom="$3.5"
      >
        Home
      </Text>
      <ScrollView>
        <MenuCard
          title="Shreyas' Kitchen"
          order_deadline={new Date(2023, 8, 17)}
          delivery_estimate={new Date(2023, 8, 18)}
          image="https://images.app.goo.gl/L4R5UbxXGHdFroxG8"
        />
        <MenuCard
          title="Shreyas' Kitchen"
          order_deadline={new Date(2023, 8, 17)}
          delivery_estimate={new Date(2023, 8, 18)}
          image="https://images.app.goo.gl/L4R5UbxXGHdFroxG8"
        />
      </ScrollView>
    </YStack>
  );
}
