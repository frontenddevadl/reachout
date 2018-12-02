import React from 'react';
import { Icon } from 'expo';
import {
  Platform,
  View
} from 'react-native';

import Colors from '../constants/Colors';

export default class BreatheButton extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <View style={this.props.style}>
                <View style={styles.outerLayer1}>
                    <View style={styles.outerLayer2}>
                        <View style={styles.outerLayer3}>
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
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {

    outerLayer1: {
        width: 310,
        height: 310,
        borderRadius: 155,
        backgroundColor: '#FFFFFF33',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerLayer2: {
        width: 260,
        height: 260,
        borderRadius: 155,
        backgroundColor: '#FFFFFF33',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerLayer3: {
        width: 230,
        height: 230,
        borderRadius: 130,
        backgroundColor: '#FFFFFF33',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: Colors.breatheButtonColor
    }
}