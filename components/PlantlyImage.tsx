import { Image, useWindowDimensions } from "react-native";
const PlantlyImageSource = require("@/assets/plantly.png");

export const PlantlyImage = () => {
  const { width } = useWindowDimensions();

  /**
   * Calculate the image size based on the screen width, but limit it to a maximum of 400 pixels.
   * This ensures that the image scales appropriately on different devices while maintaining a reasonable size for larger screens.
   */
  const imageSize = Math.min(width / 1.5, 400);

  return (
    <Image
      source={PlantlyImageSource}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};
