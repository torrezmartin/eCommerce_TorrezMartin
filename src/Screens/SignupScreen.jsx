import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import ButtonCustom from "../Components/ButtonCustom";
import { colors } from "../Global/Colors";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUserCart } from "../Features/Cart/cartSlice";
import { insertSession } from "../SQLite";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                if (result.isSuccess) {
                    const response = await insertSession({
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                        email: result.data.email,
                    })

                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                            profileImage: "",
                            location: {
                                latitude: "",
                                longitude: "",
                                address: ""
                            },
                        })
                    )
                    dispatch(setUserCart(result.data.email))
                }
            } catch (error) {
            }
        })()
    }, [result])

    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword

            if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }

            if (!isValidVariableEmail) setErrorMail('Correo inválido')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword('La clave debe tener como mínimo 6 caracteres')
            else setErrorPassword('')
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword('Las claves no coinciden')
            else setErrorConfirmPassword('')

        } catch (err) {
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Regístrese para comenzar</Text>
                <InputForm label={"Correo electrónico"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"Contraseña"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"Confirme contraseña"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <ButtonCustom onPress={onSubmit} title="Registrarse" />
                <Text style={styles.title}>¿Ya tiene una cuenta?</Text>
                <ButtonCustom onPress={() => navigation.navigate("Login")} title="Ingresar con una cuenta" />
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.abc5,
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.abc4,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "NuevaFuenteAPedidoDelTutor",
    },
});