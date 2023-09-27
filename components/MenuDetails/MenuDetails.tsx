import React, { useState } from "react";
import { View } from "react-native";
import { AlarmClock, Truck } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import {
  H4,
  Image,
  Sheet,
  styled,
  Text,
  ThemeableStack,
  useTheme,
  XStack,
  YStack
} from "tamagui";
import { ScrollView } from "tamagui";

import ItemCard from "./ItemCard";
import OrderSheet from "./OrderSheet";

const testMenu = {
  image: "https://images.app.goo.gl/L4R5UbxXGHdFroxG8",
  title: "Sangeeta's kitchen",
  order_deadline: "",
  delivery_deadline: "",
  description: "", // maybe?
  itmes: [] // more specific
};
const StyledHeading = styled(ThemeableStack, {
  name: "Divider_Heading",
  borderStyle: "solid",
  borderWidth: "$0.5",
  borderTopColor: "$kaka",
  bordered: true
});

const Divider = styled(ThemeableStack, {
  name: "Divider"
});

const MenuDetails = () => {
  const theme = useTheme();
  const [showSheet, setShowSheet] = useState(false);
  const [sheetData, setSheetData] = useState(0);

  const orderDeadline = dayjs(new Date(2023, 8, 17)).format("MMM, DD hh:mm A");
  const deliveryEstimate = dayjs(new Date(2023, 8, 17)).format(
    "MMM, DD hh:mm A"
  );

  return (
    <YStack
      backgroundColor="$backgroundStrong"
      flex={1}
    >
      <ScrollView>
        <Image
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          source={{
            uri: "https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.webp?s=1024x1024&w=is&k=20&c=IzPnrDvP2_VumQARAcA7EuTifPfuA236bA4r70rppa0="
          }}
        />
        <YStack paddingHorizontal="$3">
          <Text
            fontWeight="600"
            fontSize="$8"
            marginTop="$2"
          >
            Shreyas'Kitchen
          </Text>
          <YStack
            paddingBottom="$2"
            paddingTop="$2"
            flex={1}
          >
            <XStack
              paddingEnd="$space.4.5"
              paddingBottom="$space.2"
            >
              <Text
                fontWeight="400"
                fontSize="$5"
                paddingEnd="$space.2"
              >
                Order Deadline{" "}
              </Text>
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
              <Text
                fontWeight="400"
                fontSize="$5"
                paddingEnd="$space.2"
              >
                Estimated Delivery{" "}
              </Text>
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

          <Divider
            width="100%"
            height="$size.0.25"
          />
          <StyledHeading
            borderColor="$backgroundTransparent"
            borderBottomColor="$borderTopColor"
            paddingBottom="$1"
            marginTop="$2"
            marginBottom="$4"
          >
            <H4
              fontWeight="400"
              fontSize="$7"
              marginTop="$2"
            >
              Todays Menu
            </H4>
          </StyledHeading>
          {[1, 2, 3, 4].map((num) => (
            <View key={num}>
              <ItemCard
                onPress={() => {
                  setShowSheet(!showSheet);
                  setSheetData(num);
                }}
              />
            </View>
          ))}
          {showSheet && (
            <Sheet
              animation="lazy"
              open={showSheet}
              onOpenChange={setShowSheet}
              modal
              snapPoints={[50]}
              dismissOnSnapToBottom
              animationConfig={{
                damping: 17,
                type: "spring"
              }}
            >
              <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
                opacity={0.6}
              />
              <Sheet.Handle />
              <Sheet.Frame>
                <OrderSheet
                  title="Chicken Tikka Masala"
                  onSheetClose={() => setShowSheet(!showSheet)}
                />
              </Sheet.Frame>
            </Sheet>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default MenuDetails;
