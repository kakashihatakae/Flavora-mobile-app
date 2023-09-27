import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronRight, LogOut, UserCog2 } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import {
  AlertDialog,
  Button,
  ListItem,
  Separator,
  Text,
  YGroup,
  YStack
} from "tamagui";

import { resetAuth } from "../../utils/AuthUtils";

const Account = () => {
  const insets = useSafeAreaInsets();

  const onLogout = async () => {
    try {
      await resetAuth();
      router.replace("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <YStack
      paddingHorizontal="$3"
      paddingTop={insets.top}
      backgroundColor="$backgroundStrong"
      flex={1}
    >
      <Text
        fontWeight="600"
        fontSize="$9"
        marginTop="$2"
        marginBottom="$3.5"
      >
        Account
      </Text>
      <YGroup
        alignSelf="center"
        bordered
        size="$5"
        separator={<Separator />}
      >
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            iconAfter={ChevronRight}
            title="Manage Account"
            icon={UserCog2}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            iconAfter={ChevronRight}
            title={<Text color="$red10Light">Logout</Text>}
            icon={LogOut}
            onPress={onLogout}
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};

export default Account;
