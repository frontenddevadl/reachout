import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class HelpTopicScreen extends React.Component {
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
      <Screen />
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
