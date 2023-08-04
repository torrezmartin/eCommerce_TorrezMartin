import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { useState } from 'react'
import { useLoginMutation } from '../Services/authServices'
import { setUser } from '../Features/User/userSlice'
import { useDispatch } from 'react-redux'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [triggerSignIn, result] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)

            if (isValidVariableEmail && isCorrectPassword) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignIn(request)
            }

            if (!isValidVariableEmail) setErrorMail('Correo inválido')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword('La clave debe tener como mínimo 6 caracteres')
            else setErrorPassword('')
        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Inicie sesión para comenzar</Text>
                <InputForm
                    label={"Correo electrónico"}
                    onChange={setEmail}
                    error={errorMail}
                />
                <InputForm
                    label={"Contraseña"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title="Ingresar"
                />
                <Text style={styles.sub}>¿No tiene una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Registrarse</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightPink,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Montserrat-Regular'
    },
    sub: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Montserrat-Regular'
    },
    subLink: {
        fontSize: 14,
        color: 'blue',
        fontFamily: 'Montserrat-Regular'
    }
})