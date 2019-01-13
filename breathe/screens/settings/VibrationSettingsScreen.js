import React from 'react';
import {observer} from 'mobx-react';
import { View, Text } from 'react-native';

@observer
export default class VibrationSettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Breathing Intervals',
  };

  constructor(props) {
    super(props);
  }


  render() {
    
    return (
      <View style={{flex: 1, paddingLeft:10, paddingRight: 10, alignItems: 'stretch', justifyContent: 'center'}}>

        <Text>Vibration settings</Text>
      </View>
    );
  }
}
