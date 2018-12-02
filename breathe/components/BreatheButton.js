import React from 'react';
import { Icon } from 'expo';
import {
  Platform,
  View
} from 'react-native';

import Colors from '../constants/Colors';

export default class BreatheButton extends React.Component {
    render() {
        return(
            <View style={styles.button}>
                <Icon.Ionicons
                    name={
                        Platform.OS === 'ios'
                            ? `ios-finger-print`
                            : 'md-finger-print'
                    }
                    size={50}
                    color="#FFF"
                />
            </View>
        )
    }
}

const styles = {

  button: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#f4b241'
  }
}