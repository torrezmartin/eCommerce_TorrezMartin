import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store'

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./src/Assets/Fonts/Montserrat-Regular.ttf'),
        'VarelaRound-Regular': require('./src/Assets/Fonts/VarelaRound-Regular.ttf'),
        'YsabeauOffice-Regular': require('./src/Assets/Fonts/YsabeauOffice-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}