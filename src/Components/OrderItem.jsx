import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const OrderItem = ({ order }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.updatedAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${order.total}</Text>
            </View>
            <Feather name="search" size={30} color="black" />
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.red,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "YsabeauOffice-Regular",
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: "YsabeauOffice-Regular",
        fontSize: 19,
        fontWeight: 'bold',
        color: "black",
    },
});