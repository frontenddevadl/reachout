import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
import HelpTopicScreen from '../screens/HelpTopicScreen';
import CreditsScreen from '../screens/CreditsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const HelpStack = createStackNavigator({
  Help: HelpScreen,
  HelpTopic: HelpTopicScreen,
});

HelpStack.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'}
    />
  ),
};

const CreditsStack = createStackNavigator({
  Credits: CreditsScreen,
});

CreditsStack.navigationOptions = {
  tabBarLabel: 'Credits',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  HelpStack,
  CreditsStack,
});
