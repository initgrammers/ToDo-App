import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import Text from '../Text';
import { Container, Button } from "./Styled";

const MainHeader = ({scene, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Container>
      <Button onPress={navigation.goBack}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </Button>
      <Text fontSize={24} fontWeight="bold">
        {title}
      </Text>
    </Container>
  );
};

export default MainHeader;
