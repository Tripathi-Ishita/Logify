import { View, Text, Image, Animated, StyleSheet } from 'react-native';

import { useEffect, useRef } from 'react';
import { RootStackParamList } from '../types/navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
type Props = {
    navigation: SplashNavigationProp;
}
const SplashScreen = ({ navigation }: Props) => {
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
    const Logo = require('../assets/images/logo.png');
    //start animation when screen appears
    useEffect(() => {
        Animated.parallel([
            Animated.timing(
                opacityAnim,
                {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                scaleAnim,
                {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true
                }
            )
        ]).start();
        const timer = setTimeout(() => {
            navigation.replace('BottomTabs')
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    //the ui
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer,
            {
                opacity: opacityAnim,
                transform: [{ scale: scaleAnim }]
            }
            ]}>
                <Image source={Logo}
                    style={styles.logo} />
                <Text style={styles.appName}>Logify</Text>
            </Animated.View>
        </View>
    );
};
export default SplashScreen;
// Now the styyles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1020',
        justifyContent: 'center',
        alignItems: 'center'

    },
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        height: 120,
        width: 120,
        marginBottom: 20
    },
    appName: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '700',
        letterSpacing: 2,
        marginTop: 12
    }
});