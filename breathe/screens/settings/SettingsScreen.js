import React from 'react';
import settingsStore from '../../mobx/settings';

export default class SettingsScreen extends React.Component {
    
    static navigationOptions = ({navigation}) => {
      const helpTitle = navigation.getParam('title', 'help');
  
      return {
        title: helpTitle,
      }
    };
  
    constructor(props) {
      super(props);
  
    }
  
    render() {
      const { navigation } = this.props;
      const Screen = navigation.getParam('screen');
      return (
        <Screen navigation={this.props.navigation} screenProps={{ settingsStore: settingsStore}} />
      );
    }
  }