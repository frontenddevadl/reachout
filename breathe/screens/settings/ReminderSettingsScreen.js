import React from 'react';
import {observer} from 'mobx-react';
import { View, Text } from 'react-native';

@observer
export default class ReminderSettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Breathing Intervals',
  };

  constructor(props) {
    super(props);
  }


  render() {
    
    return (
      <View style={{flex: 1, paddingLeft:10, paddingRight: 10, alignItems: 'stretch', justifyContent: 'center'}}>

        <Text>Set breathing reminder</Text>
      </View>
    );
  }
}
