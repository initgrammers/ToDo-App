import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import Text from '../Text';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  border-color: #eeeef1;
  border-bottom-width: 2px;
  border-top-width: 2px;
  max-width: ${Dimensions.get('window').width}px;
`;

const Tab = styled.TouchableOpacity`
  margin: 16px;
  margin-bottom: 0px;
`;

const ContentTab = styled.View`
  border-bottom-color: black;
  margin-top: 12px;
  padding-bottom: 12px;
`;

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <Container>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Tab
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <ContentTab style={{borderBottomWidth: isFocused ? 2 : 0}}>
                <Text style={{opacity: isFocused ? 1 : 0.5}}>{label}</Text>
              </ContentTab>
            </Tab>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default TabBar;
