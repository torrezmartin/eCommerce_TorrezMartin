import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Light': require('./src/Assets/Fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('./src/Assets/Fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('./src/Assets/Fonts/Montserrat-Regular.ttf'),
        'VarelaRound-Regular': require('./src/Assets/Fonts/VarelaRound-Regular.ttf'),
        'YsabeauOffice-Light': require('./src/Assets/Fonts/YsabeauOffice-Light.ttf'),
        'YsabeauOffice-Medium': require('./src/Assets/Fonts/YsabeauOffice-Medium.ttf'),
        'YsabeauOffice-Regular': require('./src/Assets/Fonts/YsabeauOffice-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Navigator />
    );
}