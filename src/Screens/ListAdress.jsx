import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ButtonCustom from "../Components/ButtonCustom";
import AddressItem from '../Components/AddressItem'
import { useGetUserLocationQuery } from "../Services/shopServices";
import { colors } from "../Global/Colors";

const ListAddress = ({ navigation }) => {
    const { location, localId } = useSelector((state) => state.userReducer.value);
    const { data: userLocationQuery, isError, isLoading } = useGetUserLocationQuery(localId)

    return location?.latitude || userLocationQuery ? (
        <View style={styles.container}>
            <AddressItem
                location={location.latitude ? location : userLocationQuery}
                navigation={navigation}
            />
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>Sin ubicación asignada</Text>
            <ButtonCustom
                title="Asignar ubicación"
                onPress={() => navigation.navigate("Selector de ubicación")}
            />
        </View>
    );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.abc3,
        height: '100%',
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'NuevaFuenteAPedidoDelTutor',
        fontSize: 18,
        color: colors.abc5
    }
});