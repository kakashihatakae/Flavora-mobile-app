import React from "react";
import { AlarmClock, Truck } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { H6, Image, styled, Text, useTheme, XStack, YStack } from "tamagui";
import { Card } from "tamagui";

const RoundedMenuCard = styled(Card, {
  bordered: true,
  borderRadius: "$5"
});

interface MenuCardProps {
  title: string;
  image: string;
  order_deadline: Date;
  delivery_estimate: Date;
}

const MenuCard = ({
  title,
  image,
  order_deadline,
  delivery_estimate
}: MenuCardProps) => {
  const theme = useTheme();
  const orderDeadline = dayjs(order_deadline).format("MMM, DD hh:mm A");
  const deliveryEstimate = dayjs(delivery_estimate).format("MMM, DD hh:mm A");
  return (
    <Link
      href="/home/menu_details/123"
      asChild
    >
      <RoundedMenuCard
        animation="bouncy"
        pressStyle={{ scale: 0.875 }}
        marginBottom="$3"
      >
        <Image
          style={{ width: "100%", height: 150 }}
          resizeMode="cover"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          source={{
            uri: "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.webp?s=1024x1024&w=is&k=20&c=IzPnrDvP2_VumQARAcA7EuTifPfuA236bA4r70rppa0="
          }}
        />
        <Card.Footer>
          <XStack
            flex={1}
            justifyContent="space-between"
            paddingHorizontal="$2.5"
            paddingVertical="$3"
          >
            <H6 fontWeight="100">{title}</H6>
            <YStack>
              <XStack paddingBottom="$2">
                <AlarmClock
                  size="$1"
                  color={theme.color11.get()}
                />
                <Text
                  marginLeft="$1.5"
                  paddingTop="$0.5"
                  color={theme.color11.get()}
                >
                  {orderDeadline}
                </Text>
              </XStack>
              <XStack>
                <Truck
                  size="$1"
                  color={theme.color11.get()}
                />
                <Text
                  color={theme.color11.get()}
                  paddingTop="$0.5"
                  paddingLeft="$1.5"
                >
                  {deliveryEstimate}
                </Text>
              </XStack>
            </YStack>
          </XStack>
        </Card.Footer>
      </RoundedMenuCard>
    </Link>
  );
};

export default MenuCard;
