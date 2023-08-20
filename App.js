import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/Navigation/Navigator';
import { init } from './src/SQLite';
import store from './src/Store/store';
import { fonts } from './src/Assets/Fonts';

export default function App() {
    useEffect(() => {
        init()
            .then((result) => {
            })
            .catch(err => {
            })
    }, [])

    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}