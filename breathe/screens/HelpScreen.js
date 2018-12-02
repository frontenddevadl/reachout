import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class HowBreathing extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"How to breath"</Text>
      </View>
    );
  }
}

class HowHeartrate extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"How to Heartrate"</Text>
      </View>
    );
  }
}

class AboutBreathing extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"About Breathing"</Text>
      </View>
    );
  }
}

class WhenReachout extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"When Reachout"</Text>
      </View>
    );
  }
}

class BenefitsBreathing extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"Benefits of Breathing"</Text>
      </View>
    );
  }
}

class Emergency extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>"Emergency"</Text>
      </View>
    );
  }
}

const list = [
  {
    name: 'how-breathing',
    text: 'How to use the breathing tool',
    screen: HowBreathing,
  },
  {
    name: 'how-heartrate',
    text: 'How to use the heart rate tool',
    screen: HowHeartrate,
  },
  {
    name: 'about-breathing',
    text: 'About controlled breathing',
    screen: AboutBreathing,
  },
  {
    name: 'when-reachout',
    text: 'When to use ReachOut Breathe',
    screen: WhenReachout,
  },
  {
    name: 'benefits-breathing',
    text: 'Benefits of controlled breathing',
    screen: BenefitsBreathing,
  },
  {
    name: 'emergency',
    text: 'Emergency help',
    screen: Emergency,
  },
];


export default class HelpScreen extends React.Component {
  static navigationOptions = {
    title: 'Help',
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
              this.props.navigation.navigate('HelpTopic',{
                title: l.text,
                screen: l.screen,
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
