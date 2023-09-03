import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import InputForm from '../Components/InputForm'
import ButtonCustom from '../Components/ButtonCustom'
import { colors } from '../Global/Colors'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { useState } from 'react'
import { useLoginMutation } from '../Services/authServices'
import { setUser } from '../Features/User/userSlice'
import { useDispatch } from 'react-redux'
import { setUserCart } from '../Features/Cart/cartSlice'
import { insertSession } from '../SQLite'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const [triggerSignIn, result] = useLoginMutation()
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
                <ButtonCustom
                    onPress={onSubmit}
                    title="Ingresar"
                />
                <Text style={styles.title}>¿No tiene una cuenta?</Text>
                <ButtonCustom
                    onPress={() => navigation.navigate('Signup')}
                    title="Registrarse"
                />
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
        alignItems: 'center',
        backgroundColor: colors.abc5,
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.abc4,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'fontToUse'
    },
})