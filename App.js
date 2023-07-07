import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import Home from './src/Screens/Home';
import { useFonts } from 'expo-font';

export default function App() {
    const [categorySelected, setCategorySelected] = useState('');
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
        <View style={styles.container}>
            <Header />
            {
                categorySelected ? <ItemListCategory category={categorySelected} setCategoryFromApp={setCategorySelected}/> :
                    <Home setCategorySelected={setCategorySelected}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
