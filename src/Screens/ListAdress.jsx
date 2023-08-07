import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import AddressItem from '../Components/AddressItem'
import { useGetUserLocationQuery } from "../Services/shopServices";

const ListAddress = ({ navigation }) => {
    const { location, localId } = useSelector((state) => state.userReducer.value);
    const { data: userLocationQuery, isError, isLoading } = useGetUserLocationQuery(localId)

    return location?.latitude || userLocationQuery ? (
        <AddressItem
            location={location.latitude ? location : userLocationQuery}
            navigation={navigation}
        />
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>Sin ubicación asignada</Text>
            <AddButton
                title="Asignar ubicación"
                onPress={() => navigation.navigate("Location Selector")}
            />
        </View>
    );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 18
    }
});