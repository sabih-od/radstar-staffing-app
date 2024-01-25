import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";

import { useForm } from 'react-hook-form';
import { IOS, colors, fontSize, fonts, isIPad, width } from "../../theme";

import Icon from "react-native-vector-icons/Feather";
import globalstyle from "../../theme/style";

import { connect } from "react-redux";
import { SetIsLogin, SetRoleType, SetUserInfo } from "../../redux/reducers/AppStateReducer";
import { bindActionCreators } from "redux";
import { LoginApiCall } from "../../redux/reducers/AuthReducer";
import { CommonActions, DrawerActions, StackActions } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Loader from "../../components/Loader";
import { showToast } from "../../helpers/toastConfig";
import axios from "axios";
import { candidate, employer } from "../../data/loginuser";

import Logo from "./../../../assets/images/logo.svg";


const Login = (props) => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, isLoading] = useState(false);
    const { handleSubmit, formState: { errors }, register, setValue } = useForm();
    const prevLoginResponseRef = useRef(props.loginResponse);
    const prevLoginErrorRef = useRef(props.loginError);

    useEffect(() => {

        // fetch('https://texaschristianashram.org:3023/auth/login', {
        //     method: 'POST',
        //     mode: "cors",
        //     cache: "no-cache",
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: 'kalenparker@mailinator.com',
        //         password: '12345678',
        //     }),
        // }).then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.log(error));

        // if (!IOS) {
        //     axios.defaults.headers.common['Authorization'] = `Bearer 1656|35uwDzTjVDwexmX0Om94BtA9VPUKPHo2etdpGSUV`
        //     axios.request({ url: 'https://hunterssocial.com/api/user', method: 'GET' })
        //         .then(function (response) { console.log('response hunter => ', response); })
        //         .catch(function (error) { console.log(error); });
        // }

        // axios.request({
        //     url: 'https://texaschristianashram.org:3023/auth/login', method: 'POST', data: {
        //         email: 'kalenparker@mailinator.com',
        //         password: '12345678',
        //     }
        // })
        // .then(function (response) { console.log('response texas => ', response); })
        // .catch(function (error) { console.log(error); });

        // axios.post('https://reqres.in/api/users/2').then(function (response) { console.log(response); }).catch(function (error) { console.log(error); });


        // axios.post('https://reqres.in/api/users', {
        //     "name": "morpheus",
        //     "job": "leader"
        // }).then(function (response) { console.log(response); }).catch(function (error) { console.log(error); });

    }, [])

    useEffect(() => {
        // console.log('props.loginResponse => ', props.loginResponse);
        if (props.loginResponse !== prevLoginResponseRef.current && props.loginResponse?.success && props.loginResponse?.data) {
            prevLoginResponseRef.current = props.loginResponse;
            const userinfo = { ...props.loginResponse?.data, access_token: props.loginResponse?.access_token }
            props.SetUserInfo(userinfo);
            console.log('props.loginResponse => ', props.loginResponse);
            // showToast();
            props.SetIsLogin(true);
            // props.navigation.navigate('Screens', { screen: 'Home' })
            // props.navigation.reset({ index: 0, routes: [{ name: 'Screens' }] })
        }

        if (props.loginResponse !== prevLoginResponseRef.current && !props.loginResponse?.success) {
            showToast('error', props.loginResponse?.message.replaceAll(' ', '-').toLowerCase() == 'user-not-found' ? 'Email or Password incorrect' : props.loginResponse?.message)
        }
        isLoading(false);
    }, [props.loginResponse])

    useEffect(() => {
        console.log('props.loginError => ', props.loginError);
        if (props.loginError && props.loginError !== prevLoginErrorRef.current && props.loginError?.message) {
            console.log('props.loginError => ', props.loginError);
            showToast('error', props.loginError?.message)
        }
        isLoading(false);
    }, [props.loginError])

    // const showToast = () => {
    //     Toast.show({
    //         type: 'success', // Can be 'success', 'error', 'info', or 'none'
    //         // text1: 'Success',
    //         text2: 'User logedin successfully..',
    //         position: 'top', // Can be 'top', 'bottom', or 'center'
    //         visibilityTime: 3000, // Duration to show the toast message (in milliseconds)
    //         autoHide: true, // Automatically hide the toast after the duration
    //         topOffset: 30, // Additional offset from the top/bottom (in pixels)
    //         // bottomOffset: 40,
    //     });
    // }


    const onSubmit = (data) => {
        console.log('onSubmit data => ', data)
        // props.LoginApiCall(data);
        // isLoading(true);
        if (isCandidate) {
            props.SetUserInfo(candidate);
        } else {
            props.SetUserInfo(employer);
        }
        props.SetRoleType(isCandidate);
        props.SetIsLogin(true);
    }

    const input01 = useRef();
    const input02 = useRef();

    const [isCandidate, setRoleType] = useState(true);

    return <SafeAreaView style={globalstyle.fullview}>
        <Loader isLoading={loading} />
        {/* <ScrollView style={globalstyle.authContainer}> */}
        <View style={[globalstyle.authContainer, { justifyContent: 'center', paddingHorizontal: 20 }]}>
            <KeyboardAvoidingView behavior={IOS ? 'padding' : 'padding'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={isIPad && globalstyle.authscreencontainer}>
                        <View style={globalstyle.authLogoContainer}>
                            {/* <Image source={require('./../../../assets/images/logo-with-text.png')} style={globalstyle.authLogo} /> */}
                            <Logo width={160} height={140} style={{ marginBottom: 25 }} />
                            <Text style={globalstyle.authheading}>Login</Text>
                            <Text style={globalstyle.authdescription}>Add Your Details to Login</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0, marginBottom: 5 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setRoleType(true);
                                    setValue('iscandidate', 1);
                                }}
                                style={{
                                    alignItems: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 10, borderRadius: 10, backgroundColor: isCandidate == true ? colors.primary : '#ddd', borderTopRightRadius: 0, borderBottomRightRadius: 0
                                }}
                            >
                                {/* <Icon name={isCandidate == true ? 'check-circle' : 'circle'} style={{ marginRight: 10, fontSize: 17, color: colors.primary }} /> */}
                                <Text style={{ color: isCandidate == true ? colors.white : colors.black, fontFamily: fonts.latoBold, textTransform: 'uppercase', fontSize: fontSize + 1 }}>Candidate</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setRoleType(false);
                                    setValue('iscandidate', 0);
                                }}
                                style={{ alignItems: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 10, borderRadius: 10, backgroundColor: !isCandidate == true ? colors.primary : '#ddd', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                            >
                                {/* <Icon name={!isCandidate == true ? 'check-circle' : 'circle'} style={{ marginRight: 10, fontSize: 17, color: colors.primary }} /> */}
                                <Text style={{ color: !isCandidate == true ? colors.white : colors.black, fontFamily: fonts.latoBold, textTransform: 'uppercase', fontSize: fontSize + 1 }}>Employer</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={{ display: 'none' }}
                            {...register('iscandidate', {
                                value: isCandidate ? '1' : '0',
                            })}
                            defaultValue={isCandidate ? '1' : '0'}
                        />

                        {/* <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20,
                            // 
                            borderTopLeftRadius: 15, borderBottomRightRadius: 15, overflow: 'hidden'
                        }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { setRoleType(true) }}
                                style={{ width: '50%', alignItems: 'center', backgroundColor: isCandidate == true ? colors.primary : colors.grey, paddingHorizontal: 15, paddingVertical: 13 }}
                            >
                                <Text style={{ color: colors.white, fontFamily: fonts.latoRegular }}>Candidate</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { setRoleType(false) }}
                                style={{ width: '50%', alignItems: 'center', backgroundColor: !isCandidate == true ? colors.primary : colors.grey, paddingHorizontal: 15, paddingVertical: 13 }}
                            >
                                <Text style={{ color: colors.white, fontFamily: fonts.latoRegular }}>Employer</Text>
                            </TouchableOpacity>
                        </View> */}
                        <Text style={[globalstyle.inputlabel, { marginTop: 20 }]}>Email Address</Text>
                        <View style={globalstyle.inputbox}>
                            <Icon color={colors.primary} name={'mail'} size={18} />
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Email Address"
                                // value=''
                                {...register('email', {
                                    value: isCandidate ? 'kalenparker@mailinator.com' : 'healthspheresolutions@mailinator.com',
                                    required: 'Email Address is required',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: "Please provide valid email"
                                    },
                                })}
                                defaultValue={isCandidate ? 'kalenparker@mailinator.com' : 'healthspheresolutions@mailinator.com'}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('email', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => props.navigation.navigate('ForgetPassword')}
                            style={styles.forgetpasslink}>
                            <Text style={styles.forgetpasstext}>Forget Password?</Text>
                        </TouchableOpacity>

                        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AnimatedFloatingPlaceholder />
                        </View> */}

                        <Text style={[globalstyle.inputlabel,]}>Password</Text>
                        <View style={[globalstyle.inputbox, { justifyContent: 'space-between' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon color={colors.primary} name={'lock'} size={18} />
                                <TextInput
                                    style={[globalstyle.inputfield, { width: width - 115 }]}
                                    placeholder="Password"
                                    placeholderTextColor={colors.placeholdercolor}
                                    // value=''
                                    {...register('password', {
                                        value: '12345678',
                                        required: 'Password is required',
                                        // minLength: { value: 8, message: 'Password length must be greater then 8' }
                                    })}
                                    defaultValue={'12345678'}
                                    // inputRef={password.ref}
                                    onChangeText={(value) => setValue('password', value)}
                                    secureTextEntry={!showPassword ? true : false}
                                    autoCapitalize='none'
                                    ref={input02}
                                // returnKeyType="next"
                                // onSubmitEditing={() => input05.current.focus()}
                                />
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={globalstyle.showhideicontouch} onPress={() => { setShowPassword(!showPassword) }}>
                                <Icon name={!showPassword ? 'eye' : 'eye-off'} size={18} style={globalstyle.showhideicon} />
                            </TouchableOpacity>
                        </View>
                        {errors.password && <Text style={globalstyle.errorField}>{errors.password.message}</Text>}
                        {/* 
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 15 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { setRoleType(true) }}
                                style={{ alignItems: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 30 }}
                            >
                                <Icon name={isCandidate == true ? 'check-circle' : 'circle'} style={{ marginRight: 10, fontSize: 17, color: colors.primary }} />
                                <Text style={{ color: colors.black, fontFamily: fonts.latoBold, fontSize: fontSize + 1 }}>Candidate</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { setRoleType(false) }}
                                style={{ alignItems: 'center', flexDirection: 'row', alignItems: 'center', }}
                            >
                                <Icon name={!isCandidate == true ? 'check-circle' : 'circle'} style={{ marginRight: 10, fontSize: 17, color: colors.primary }} />
                                <Text style={{ color: colors.black, fontFamily: fonts.latoBold, fontSize: fontSize + 1 }}>Employer</Text>
                            </TouchableOpacity>
                        </View> */}

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={handleSubmit(onSubmit)}
                            // onPress={() => {props.navigation.navigate('Screens', { screen: 'Home' })}}
                            style={globalstyle.authSubmitButton}>
                            <Text style={globalstyle.authSubmitButtonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={globalstyle.alreadysignin}>
                            <Text style={globalstyle.alreadyaccount}>Don't have an account? </Text>
                            <TouchableOpacity activeOpacity={0.8}
                                onPress={() => { props.navigation.navigate('Register') }}>
                                <Text style={globalstyle.actionauthtext}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView >
        </View >
        {/* </ScrollView> */}
    </SafeAreaView >
}



const setStateToProps = (state) => ({
    loginResponse: state.authstate.loginResponse,
    loginError: state.authstate.loginError,
});

const mapDispatchToProps = (dispatch) => {
    return {
        SetIsLogin: bindActionCreators(SetIsLogin, dispatch),
        SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
        LoginApiCall: bindActionCreators(LoginApiCall, dispatch),
        SetRoleType: bindActionCreators(SetRoleType, dispatch),
    }
};

export default connect(setStateToProps, mapDispatchToProps)(Login);
// export default Login;

const styles = StyleSheet.create({
    forgetpasslink: { marginLeft: 'auto', marginTop: 10, marginBottom: 10, marginRight: 15 },
    forgetpasstext: { color: colors.primary, fontFamily: fonts.latoRegular, fontSize: isIPad ? 16 : 13 },
})


// "react-native-reanimated": "^3.2.0",