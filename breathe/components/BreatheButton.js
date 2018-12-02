import React from 'react';
import { Icon } from 'expo';
import {
  Platform,
  View,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import Colors from '../constants/Colors';

export default class BreatheButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breathingStarted: false,
            outerLayer1Anim: new Animated.Value(styles.outerLayer1.width),
            outerLayer2Anim: new Animated.Value(styles.outerLayer2.width),
            outerLayer3Anim: new Animated.Value(styles.outerLayer3.width),             
        };
    }
    componentDidMount() {
        Animated.parallel([
            this.createOuterLayerAnimation(this.state.outerLayer1Anim, styles.outerLayer1.width),
            this.createOuterLayerAnimation(this.state.outerLayer2Anim, styles.outerLayer2.width),
            this.createOuterLayerAnimation(this.state.outerLayer3Anim, styles.outerLayer3.width),
        ]).start(); 
    }

    createOuterLayerAnimation = (outerLayerAnim, initialWidth) => {
        return Animated.loop(
            Animated.sequence([
                Animated.timing(
                    outerLayerAnim,
                    {
                        toValue: initialWidth + 20,
                        duration: 2500,
                    }
                ),
                Animated.timing(
                    outerLayerAnim,
                    {
                        toValue: initialWidth,
                        duration: 2500,
                    }
                )
            ]));
    }
    
    startBreathing = () => {
        this.setState({breathingStarted: true});
        Animated.timing(this.state.outerLayer1Anim).stop();
    }

    render() {
        return(
            <View style={this.props.style} >
                <TouchableWithoutFeedback onPress={() => this.props.onPress()}>
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
                            </Animated.View>
                        </Animated.View>
                    </Animated.View>
                </TouchableWithoutFeedback>
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