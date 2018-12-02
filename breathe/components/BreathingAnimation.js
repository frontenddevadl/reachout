import React from 'react';
import { Icon } from 'expo';
import {
  Platform,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import Colors from '../constants/Colors';

export default class BreathingAnimation extends React.Component {
    breathInTime = 10000;
    breathOutTime = 10000;
    constructor(props) {
        super(props);
        this.state = {
            breathingStarted: false,
            outerLayer1Anim: new Animated.Value(210),
            outerLayer2Anim: new Animated.Value(210),
            outerLayer3Anim: new Animated.Value(0),
            outerLayer4Anim: new Animated.Value(0),    
        };
    }

    componentDidMount() {
        this.breathIn();
    }

    breathIn = () => {
        this.props.updateHeaderText('Breath in');
        this.breathInAnimation().start(() => this.breathOut());
    }

    breathOut = () => {
        this.props.updateHeaderText('Breath out');
        this.breathOutAnimation().start(() => this.breathIn());
    }

    breathInAnimation = () => {
        return Animated.parallel([
            Animated.timing(
                this.state.outerLayer1Anim,
                {
                    toValue: 310,
                    duration: 2500,
                }
            ),
            Animated.timing(
                this.state.outerLayer2Anim,
                {
                    toValue: 310,
                    duration: 2500,
                }
            ),
            Animated.timing(
                this.state.outerLayer3Anim,
                {
                    toValue: 290,
                    duration: 2500,
                }
            ),
            Animated.timing(
                this.state.outerLayer4Anim,
                {
                    toValue: 290,
                    duration: this.breathInTime,
                }
            ),
        ]);
    }

    breathOutAnimation = () => {
        return Animated.parallel([
            Animated.timing(
                this.state.outerLayer1Anim,
                {
                    toValue: 210,
                    duration: this.breathOutTime,
                }
            ),
            Animated.timing(
                this.state.outerLayer2Anim,
                {
                    toValue: 210,
                    duration: 2500,
                }
            ),
            Animated.timing(
                this.state.outerLayer3Anim,
                {
                    toValue: 0,
                    duration: 2500,
                }
            ),
            Animated.timing(
                this.state.outerLayer4Anim,
                {
                    toValue: 0,
                    duration: 2500,
                }
            ),
        ]);
    }

    render() {
        return (
            <View style={this.props.style}>
                <Animated.View style={{
                        ...styles.outerLayer1,
                        width: this.state.outerLayer1Anim,
                        height: this.state.outerLayer1Anim, 
                    }}>
                    <Animated.View style={{
                            ...styles.outerLayer2,
                            width: this.state.outerLayer2Anim,
                            height: this.state.outerLayer2Anim, 
                            
                        }}>
                        <Animated.View style={{
                            ...styles.outerLayer3,
                            width: this.state.outerLayer3Anim,
                            height: this.state.outerLayer3Anim, 
                        }}>
                            <Animated.View style={{
                                ...styles.outerLayer4,
                                width: this.state.outerLayer4Anim,
                                height: this.state.outerLayer4Anim, 
                            }}>
                            </Animated.View>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </View>
        )
    }
}


const styles = {
    outerLayer1: {
        width: 310,
        height: 310,
        borderRadius: 155,
        backgroundColor: '#FFFFFF3d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerLayer2: {
        width: 260,
        height: 260,
        borderRadius: 155,
        backgroundColor: Colors.breatheButtonColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outerLayer3: {
        width: 230,
        height: 230,
        borderRadius: 130,
        backgroundColor:  Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

    outerLayer4: {
        width: 230,
        height: 230,
        borderRadius: 130,
        backgroundColor: '#FFFFFF3d',
        justifyContent: 'center',
        alignItems: 'center'
    },

}