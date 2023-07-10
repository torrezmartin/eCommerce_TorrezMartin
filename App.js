import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import ItemListCategory from './src/screens/ItemListCategory';
import Home from './src/screens/Home';
import { useFonts } from 'expo-font';

export default function App() {
    const [categorySelected, setCategorySelected] = useState('');
    const [fontsLoaded] = useFonts({
        'Montserrat-Light': require('./src/assets/Fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('./src/assets/Fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('./src/assets/Fonts/Montserrat-Regular.ttf'),
        'VarelaRound-Regular': require('./src/assets/Fonts/VarelaRound-Regular.ttf'),
        'YsabeauOffice-Light': require('./src/assets/Fonts/YsabeauOffice-Light.ttf'),
        'YsabeauOffice-Medium': require('./src/assets/Fonts/YsabeauOffice-Medium.ttf'),
        'YsabeauOffice-Regular': require('./src/assets/Fonts/YsabeauOffice-Regular.ttf'),
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
