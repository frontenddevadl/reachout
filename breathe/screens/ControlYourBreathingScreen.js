import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';

import { Icon } from 'expo';
import Colors from '../constants/Colors';
import BreatheButton from '../components/BreatheButton';
import BreathingAnimation from '../components/BreathingAnimation';


export default class ControlYourBreathingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isBreathing: false,
      headerText: 'Get Started!',
      descText: 'Place your thumb on the yellow button to get started.'
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    console.log('back')
    this.props.navigation.goBack();
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.headerText}
        </Text>
        <Text style={styles.desc}>
          {this.state.descText}
        </Text>
        { 
          this.state.isBreathing &&
          <BreathingAnimation style={styles.button} updateHeaderText={(text) => this.setState({headerText: text})}/>
        }
        { 
          !this.state.isBreathing &&
          <BreatheButton onPress={() => this.setState({isBreathing: true, descText: ''})} style={styles.button}/>
        }
      </View>
      )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30
  },
  header: {
    fontSize: 32,
    color: '#fff'
  },
  desc: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    alignItems: 'center',
    
  }
}