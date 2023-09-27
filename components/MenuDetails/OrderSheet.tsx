import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Minus, Plus, X } from "@tamagui/lucide-icons";
import { Button, H2, Image, Stack, Text, XStack, YStack } from "tamagui";

interface OrderSheetProps {
  title: string;
  onSheetClose: () => void;
}

const OrderSheet = ({ title, onSheetClose }: OrderSheetProps) => {
  const insets = useSafeAreaInsets();
  const [numItems, setNumItems] = useState(0);

  return (
    <>
      <Image
        style={{ width: "100%", height: 150 }}
        resizeMode="cover"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        source={{
          uri: "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.webp?s=1024x1024&w=is&k=20&c=IzPnrDvP2_VumQARAcA7EuTifPfuA236bA4r70rppa0="
        }}
      />
      <Stack
        position="absolute"
        top="$3"
        left="$3"
        borderRadius="50%"
        backgroundColor="$background"
        padding="$1"
        onPress={onSheetClose}
      >
        <X size="$size.1" />
      </Stack>
      <YStack
        flex={1}
        justifyContent="space-between"
        marginHorizontal="$3"
      >
        <XStack
          marginTop="$2"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>{title}</H2>
          <Text fontSize="$8">$ 3</Text>
        </XStack>
        <XStack
          justifyContent="center"
          alignItems="center"
          marginBottom={0}
          paddingBottom={0}
        >
          <Button
            circular
            icon={<Minus />}
            marginBottom={0}
            paddingBottom={0}
            onPress={() => {
              numItems > 0 ? setNumItems(numItems - 1) : undefined;
            }}
          />
          <Text
            paddingHorizontal="$4"
            fos="$5"
          >
            {numItems}
          </Text>
          <Button
            circular
            icon={<Plus />}
            marginBottom={0}
            paddingBottom={0}
            onPress={() => {
              setNumItems(numItems + 1);
            }}
          />
        </XStack>
        <Button
          marginBottom={insets.bottom}
          height="$5"
        >
          Add to Cart
        </Button>
      </YStack>
    </>
  );
};

export default OrderSheet;
