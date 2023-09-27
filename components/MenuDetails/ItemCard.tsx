import React from "react";
import { View } from "react-native";
import { PlusCircle } from "@tamagui/lucide-icons";
import { Card, getTokens, Image, Text, XStack, YStack } from "tamagui";

interface ItemCardProps {
  onPress: () => void;
}

const ItemCard = ({ onPress }: ItemCardProps) => {
  const tokens = getTokens();

  return (
    <Card
      bordered
      marginBottom="$1.5"
      onPress={onPress}
    >
      <XStack>
        <Image
          style={{ width: 100, height: 90 }}
          borderRadius={5}
          source={{
            uri: "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.webp?s=1024x1024&w=is&k=20&c=IzPnrDvP2_VumQARAcA7EuTifPfuA236bA4r70rppa0="
          }}
        />
        <YStack flex={1}>
          <Card.Header
            paddingStart="$3"
            paddingTop="$3"
          >
            <Text
              fow="600"
              fontSize="$5"
            >
              Chicken Tikka Masala
            </Text>
          </Card.Header>
          <XStack
            justifyContent="space-between"
            paddingHorizontal="$3"
          >
            <Text marginBottom="$3">$ 3</Text>
            <View style={{ marginBottom: tokens.space[3].val }}>
              <PlusCircle />
            </View>
          </XStack>
        </YStack>
      </XStack>
    </Card>
  );
};

export default ItemCard;
