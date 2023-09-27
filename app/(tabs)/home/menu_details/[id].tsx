import React from "react";
import { useLocalSearchParams } from "expo-router";

import MenuDetails from "../../../../components/MenuDetails/MenuDetails";

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  return <MenuDetails />;
};

export default DetailsPage;
