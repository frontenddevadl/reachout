import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import BreathingIntervalsScreen from './BreathingIntervalsScreen';
import ReminderSettingsScreen from './ReminderSettingsScreen';
import VibrationSettingsScreen from './VibrationSettingsScreen';

const list = [
  {
    name: 'breathing-intervals',
    text: 'Breathing Intervals',
    screen: BreathingIntervalsScreen,
  },
  {
    name: 'breathing-reminder',
    text: 'Breathing Reminders',
    screen: ReminderSettingsScreen
  },
  {
    name: 'vibration-settings',
    text: 'Vibration Settings',
    screen: VibrationSettingsScreen
  }
];


export default class SettingsMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l) => (
            <ListItem
            key={l.name}
            title={l.text}
            onPress={()=> {
              this.props.navigation.navigate('SettingsScreen',{
                title: l.text,
                screen: l.screen,
                navigation: this.props.navigation
              });
            }}
            />
          ))
        }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
