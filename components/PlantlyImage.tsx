import { Image, useWindowDimensions } from "react-native";
const PlantlyImageSource = require("@/assets/plantly.png");

type Props = {
  size?: number;
};

/**
 * PlantlyImage component that displays the Plantly logo.
 * The size of the image is dynamically calculated based on the screen width, with a maximum limit of 400 pixels.
 * @param param0
 * @param param0.size
 * @constructor
 */
export const PlantlyImage = ({ size }: Props) => {
  const { width } = useWindowDimensions();

  /**
   * Calculate the image size based on the screen width, but limit it to a maximum of 400 pixels.
   * This ensures that the image scales appropriately on different devices while maintaining a reasonable size for larger screens.
   */
  const imageSize = size ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={PlantlyImageSource}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};
