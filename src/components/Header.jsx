// Import necessary dependencies
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/ai-logo.svg';
import { useSelector } from 'react-redux'; // Import useSelector hook


// Header component displaying the logo, title, and description
const Header = () => {
  // Access the title and description from the Redux state
  const headerState = useSelector((state) => state.header);
  const { title, description } = headerState;
  
  return (
    <>
      {/* Logo */}
      <Image src={logo} alt='logo' width={200} marginBottom='1rem' />

      {/* Title */}
      <Heading color='button' marginBottom='1rem'>
        {/* Use the title from the Redux state */}
        {title}
      </Heading>

      {/* Description */}
      <Text color='button' fontSize={25} textAlign='center'>
        {/* Use the description from the Redux state */}
        {description}
      </Text>
    </>
  );
};

export default Header;
