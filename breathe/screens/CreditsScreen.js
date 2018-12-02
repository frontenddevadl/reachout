import React from 'react';
import { Image } from 'react-native';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class CreditsScreen extends React.Component {
    static navigationOptions = {
        title: 'Credits',
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.reachoutLogo}
                    source={require('../assets/images/reachout_logo.png')}
                />
                <Text style={styles.text}>
                    Breather is produced by ReachOut.com with expert advice
                    from the Centre for Clinical Interventions. 
                    {"\n"}{"\n"}
                    ReachOut provides practical tools and support to help
                    young people get through everything from everyday issues
                    to really tough times.
                    {"\n"}{"\n"}
                    For more information and support on mental health and
                    well being, visit ReachOut.com
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reachoutLogo: {
        width: 225,
        height: 134,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 0,
        padding: 10,
        color: '#0073cfff',
    }
});
