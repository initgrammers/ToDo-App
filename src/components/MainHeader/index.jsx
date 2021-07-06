import React from 'react';
import {Feather} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons';
import View from '../View';
import Text from '../Text';
import {Button} from './Styled'

const MainHeader = () => (
  <View
    background="white"
    padding={20}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between">
    <Text fontSize={24} fontWeight="bold">
      Board
    </Text>
    <View flexDirection="row">
      <Button>
        <Feather name="search" size={22} color="black" />
      </Button>
      <Button>
        <Fontisto name="bell" size={22} color="black" />
      </Button>
      <Button>
        <SimpleLineIcons name="menu" size={22} color="black" />
      </Button>
    </View>
  </View>
);

export default MainHeader;
