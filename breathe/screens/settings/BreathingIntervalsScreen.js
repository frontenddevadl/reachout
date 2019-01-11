import React from 'react';
import {observer} from 'mobx-react';
import { View, Text } from 'react-native';
import { Slider, Button } from 'react-native-elements';

@observer
export default class BreathingIntervalsScreen extends React.Component {
  static navigationOptions = {
    title: 'Breathing Intervals',
  };

  _navListener;
  settingsStore;

  constructor(props) {
    super(props);
    this.settingsStore = props.screenProps.settingsStore;
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('willBlur', () => this.settingsStore.saveSettings());
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  
  setDefaultValues() {
    this.settingsStore.setDefaultValues();
  }

  render() {
    
    return (
      <View style={{flex: 1, paddingLeft:10, paddingRight: 10, alignItems: 'stretch', justifyContent: 'center'}}>

        <Text>Total Duration {this.settingsStore.totalDuration} min</Text>
        <Slider
          value={this.settingsStore.totalDuration}
          onValueChange={(value) => this.settingsStore.setTotalDuration(value)}
          minimumValue={2}
          maximumValue={20}
          step={1}
        />

        <Text>Time To Breathe In {this.settingsStore.timeToBreatheIn}s</Text>
        <Slider
          value={this.settingsStore.timeToBreatheIn}
          onValueChange={(value) => this.settingsStore.setTimeToBreatheIn(value)}
          minimumValue={2}
          maximumValue={10}
          step={0.5}
        />

        <Text>Time To Hold {this.settingsStore.timeToHold}s</Text>
        <Slider
          value={this.settingsStore.timeToHold}
          onValueChange={(value) => this.settingsStore.setTimetoHold(value)}
          minimumValue={0}
          maximumValue={5}
          step={0.5}
        />

        <Text>Time To Breathe Out {this.settingsStore.timeToBreatheOut}s</Text>
        <Slider
          value={this.settingsStore.timeToBreatheOut}
          onValueChange={(value) => this.settingsStore.setTimeToBreatheOut(value)}
          minimumValue={2}
          maximumValue={10}
          step={0.5}
        />
     
        <Text>Time To Hold Out {this.settingsStore.timeToHoldOut}s</Text>
        <Slider
          value={this.settingsStore.timeToHoldOut}
          onValueChange={(value) => this.settingsStore.setTimeToHoldOut(value)}
          minimumValue={0}
          maximumValue={5}
          step={0.5}
        />

        <Button onPress={() => this.setDefaultValues()} title="Default Values" accessibilityLabel="Set Default Values"/>
      </View>
    );
  }
}
