import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/Colors";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementPerValue, reset } from "../Features/Counter/counterSlice";

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0)

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                    onChangeText={setInputToAdd}
                    value={inputToAdd}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(incrementPerValue(Number(inputToAdd)))}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => dispatch(reset())}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.abc3,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.abc4,
    },
    span: {
        backgroundColor: colors.abc1,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
    },
    spanInput: {
        backgroundColor: colors.abc2,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "fontToUse",
    },
});