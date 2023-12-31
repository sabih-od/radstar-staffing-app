import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from "react-native";

import { useForm } from 'react-hook-form';
import { colors, fonts, isIPad, width } from "../theme";

import Icon from "react-native-vector-icons/Feather";
import globalstyle from "../theme/style";
import { bindActionCreators } from "redux";
import { ResetPasswordApiCall } from "../redux/reducers/AuthReducer";
import { connect } from "react-redux";
import { SetIsLogin, SetUserInfo } from "../redux/reducers/AppStateReducer";
import { showToast } from "../helpers/toastConfig";
import Loader from "../components/Loader";


const ChangePassword = (props) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [loading, isLoading] = useState(false);
    const { handleSubmit, formState: { errors }, register, setValue } = useForm();

    const prevResetPasswordResRef = useRef(props.resetPasswordResponse);

    useEffect(() => {
        // console.log('props.resetPasswordResponse => ', props.resetPasswordResponse);
        if (props.resetPasswordResponse !== prevResetPasswordResRef.current && props.resetPasswordResponse?.success && props.resetPasswordResponse?.data) {
            prevResetPasswordResRef.current = props.resetPasswordResponse;
            // props.SetUserInfo(props.resetPasswordResponse?.data);
            console.log('props.resetPasswordResponse => ', props.resetPasswordResponse);
            props.SetIsLogin(true);
            // props.navigation.navigate('Screens', { screen: 'Home' });
            showToast('success', props.resetPasswordResponse?.message)
        } else {
            if (props.resetPasswordResponse !== prevResetPasswordResRef.current && !props.resetPasswordResponse?.success) {
                showToast('error', props.resetPasswordResponse?.message)
            }
        }
        isLoading(false);
    }, [props.resetPasswordResponse])

    const onSubmit = (data) => {
        console.log('data => ', data)
        props.ResetPasswordApiCall(data)
        isLoading(true);
    }

    const input01 = useRef();
    const input02 = useRef();

    const password = register('password', {
        value: 'tabish@123',
        required: 'Password is required',
        minLength: { value: 8, message: 'Min lenght 8' }
    })

    const confirmpass = register('confirmpass', {
        value: 'tabish@123',
        required: 'Confirm Password is required',
        minLength: { value: 8, message: 'Min lenght 8' },
        // validate: value => value === password.current || "Password does not match"
    })

    return <SafeAreaView style={globalstyle.fullview}>
        <Loader isLoading={loading} />
        {/* <ScrollView style={globalstyle.authContainer}> */}
        <View style={[globalstyle.authContainer, { justifyContent: 'center', paddingHorizontal: 15 }]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={isIPad && globalstyle.authscreencontainer}>
                        {/* <ScrollView> */}
                        <View style={[globalstyle.authLogoContainer, {}]}>
                            <Image
                                source={require('./../../assets/images/logo-with-text.png')}
                                style={globalstyle.authLogo}
                            />
                            {/* <Text style={globalstyle.authheading}>Reset Password</Text> */}
                            <Text style={globalstyle.authdescription}>Change your account password</Text>
                        </View>

                        <View>

                            <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Password</Text>
                            <View style={[globalstyle.inputbox, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon color={colors.primary} name={'lock'} size={18} />
                                    <TextInput
                                        style={[globalstyle.inputfield, { flex: 0.8 }]}
                                        placeholder="Enter Current Password"
                                        name={password.name}
                                        inputRef={password.ref}
                                        placeholderTextColor={colors.placeholdercolor}
                                        onChangeText={(value) => setValue('password', value)}
                                        secureTextEntry={!showPassword ? true : false}
                                        autoCapitalize='none'
                                        ref={input01}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input02.current.focus()}
                                    />
                                </View>
                            </View>
                            {errors.password && <Text style={globalstyle.errorField}>{errors.password.message}</Text>}

                            <View style={{ width: width - 30, height: 1, backgroundColor: '#ddd', marginTop: 20, marginBottom: 10 }} />

                            <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>New Password</Text>
                            <View style={[globalstyle.inputbox, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon color={colors.primary} name={'lock'} size={18} />
                                    <TextInput
                                        style={[globalstyle.inputfield, { flex: 0.8 }]}
                                        placeholder="Enter New Password"
                                        name={password.name}
                                        inputRef={password.ref}
                                        placeholderTextColor={colors.placeholdercolor}
                                        onChangeText={(value) => setValue('password', value)}
                                        secureTextEntry={!showPassword ? true : false}
                                        autoCapitalize='none'
                                        ref={input01}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input02.current.focus()}
                                    />
                                </View>
                            </View>
                            {errors.password && <Text style={globalstyle.errorField}>{errors.password.message}</Text>}

                            <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Confirm Password</Text>
                            <View style={[globalstyle.inputbox, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon color={colors.primary} name={'lock'} size={18} />
                                    <TextInput
                                        style={[globalstyle.inputfield, { flex: 0.8 }]}
                                        placeholder="Enter Re-Type Password"
                                        name={confirmpass.name}
                                        inputRef={confirmpass.ref}
                                        placeholderTextColor={colors.placeholdercolor}
                                        onChangeText={(value) => setValue('password', value)}
                                        secureTextEntry={!showConfPassword ? true : false}
                                        autoCapitalize='none'
                                        ref={input02}
                                    />
                                </View>
                                {/* <TouchableOpacity activeOpacity={0.8} style={globalstyle.showhideicontouch} onPress={() => { setShowConfPassword(!showConfPassword) }}>
                                    <Icon name={!showConfPassword ? 'eye' : 'eye-off'} size={18} style={globalstyle.showhideicon} />
                                </TouchableOpacity> */}
                            </View>
                            {errors.password && <Text style={globalstyle.errorField}>{errors.password.message}</Text>}
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleSubmit(onSubmit)}
                                style={globalstyle.authSubmitButton}
                            >
                                <Text style={globalstyle.authSubmitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingBottom: 30 }} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    </SafeAreaView>
}

const setStateToProps = (state) => ({
    resetPasswordResponse: state.authstate.resetPasswordResponse,
})
const mapDispatchToProps = (dispatch) => {
    return {
        ResetPasswordApiCall: bindActionCreators(ResetPasswordApiCall, dispatch),
        SetIsLogin: bindActionCreators(SetIsLogin, dispatch),
    }
}

export default connect(setStateToProps, mapDispatchToProps)(ChangePassword);

const styles = StyleSheet.create({
    forgetpasslink: { marginLeft: 'auto', marginTop: 10, marginBottom: 0, marginRight: 15 },
    forgetpasstext: { color: colors.black, fontFamily: fonts.latoRegular, fontSize: 13 },
})