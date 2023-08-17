import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Colors";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUserCart } from "../Features/Cart/cartSlice";

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
                    console.log('inserting Session');
                    const response = await insertSession({
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                        email: result.data.email,
                    })
                    console.log('Session inserted: ');
                    console.log(response);

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
                console.log(error.message);
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
            console.log("Catch error");
            console.log(err.message);
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
                <SubmitButton onPress={onSubmit} title="Registrarse" />
                <Text style={styles.sub}>¿Ya tiene una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Ingresar</Text>
                </Pressable>
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
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightPink,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Montserrat-Regular",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: "blue",
    },
});