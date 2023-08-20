import { Button, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Features/User/userSlice';
import { deleteSession } from '../SQLite';

const Header = ({ route, navigation }) => {
    let title
    switch (route.name) {
        case 'Home':
            title = 'Inicio'
            break;
        case 'CartScreen':
            title = 'Inicio Cart'
            break;
        case 'OrderScreen':
            title = 'Inicio Order'
            break;
        case 'ItemListCategory':
            title = useSelector(state => state.shopReducer.value.categorySelected)
            break;
        case 'ItemDetail':
            title = useSelector(state => state.shopReducer.value.nameProductSelected)
            break;
        default:
            title = route.name
            break;
    }

    const dispatch = useDispatch()
    const { localId } = useSelector((state) => state.userReducer.value);

    const onSignOut = async () => {
        try {
            const response = await deleteSession(localId)
            dispatch(logOut())
        } catch (error) {
        }
    }

    return (
        <View style={styles.containerHeader}>
            <StatusBar show='false' />
            {title !== 'Inicio' && title !== 'Inicio Cart' && title !== 'Inicio Order' &&
                title !== 'Signup' && title !== 'Login' && title !== 'My Profile' ?
                <Pressable onPress={() => { navigation.goBack() }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                : null}
            <Text style={styles.text}>{title}</Text>
            {title !== 'Signup' && title !== 'Login' ?
                <Button
                    title='Cerrar sesión'
                    onPress={onSignOut}
                />
                : null}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.peach,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontSize: 25,
        fontFamily: 'Montserrat-Regular'
    }
})