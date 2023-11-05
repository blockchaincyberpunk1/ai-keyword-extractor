// Importing the Text component from the Chakra UI library.
import { Text } from '@chakra-ui/react';

// Footer component definition. It is a stateless functional component.
const Footer = () => {
  // The Footer component returns a single Text component containing the author's name.
  return (
    // The Text component from Chakra UI is used to create a styled text element.
    // The 'color' prop is set to 'button' which should be a custom color defined in the theme.
    // If 'button' is not a custom color in the theme, this will not work as expected.
    // The color should be defined in the theme or replaced with a valid color value.
    <Text color='button'>
      Created by Sheneeza Volcov {/* Text content showing the creator's name */}
    </Text>
  );
};

// Exporting the Footer component so it can be used in other parts of the application.
export default Footer;
