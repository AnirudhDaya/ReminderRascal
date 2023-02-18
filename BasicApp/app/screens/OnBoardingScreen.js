import Onboarding from 'react-native-onboarding-swiper';
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import LoginScreen from './LoginScreen';


const OnboardingScreen = ({navigation}) => {
    return ( <Onboarding
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    pages={[
        {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/Onboarding1.jpg')} resizeMode="contain"
        style={{ width: '100%', height: '100%' }} />,
        title: 'Onboarding 1',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
        backgroundColor: 'dodgerblue',
        image: <Image source={require('../assets/Onboarding2.jpg')} resizeMode="contain"
        style={{ width: '100%', height: '100%' }}/>,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
        },
        
    ]}
    />
    );
}

export default OnboardingScreen;