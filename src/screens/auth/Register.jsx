import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

import { useForm } from 'react-hook-form';
import { colors, fontSize, fonts, isIPad } from "../../theme";

import Icon from "react-native-vector-icons/Feather";
import globalstyle from "../../theme/style";
import { bindActionCreators } from "redux";
import { RegisterApiCall } from "../../redux/reducers/AuthReducer";
import { connect } from "react-redux";
import { SetIsLogin, SetUserInfo } from "../../redux/reducers/AppStateReducer";
import Loader from "../../components/Loader";
import TermsAndConditionsModal from "../../components/modal/TermsAndConditionsModal";
import { showToast } from "../../helpers/toastConfig";

const Register = (props) => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, isLoading] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const { handleSubmit, formState: { errors }, register, setValue, unregister, getValues } = useForm();

    const prevResgisterResponseRef = useRef(props.registerResponse);

    useEffect(() => {
        if (props.registerResponse !== prevResgisterResponseRef.current && props.registerResponse?.success && props.registerResponse?.data) {
            prevResgisterResponseRef.current = props.registerResponse;
            props.SetUserInfo(props.registerResponse?.data);
            console.log('props.registerResponse => ', props.registerResponse);
            props.SetIsLogin(true);
            // props.navigation.reset({ index: 0, routes: [{ name: 'Screens' }] })
        }
        isLoading(false);
    }, [props.registerResponse])

    const onSubmit = (data) => {
        if (isChecked) {
            console.log('data => ', data)
            // props.RegisterApiCall(data)
            // isLoading(true);
        } else {
            showToast('success', 'Please read and agree with terms and conditions')
        }
    }

    const firstname = useRef();
    const middlename = useRef();
    const lastname = useRef();
    const input01 = useRef();
    const input02 = useRef();
    const input03 = useRef();
    const input04 = useRef();
    const input05 = useRef();

    const [showTermsModal, setShowTermsModal] = useState(false);
    const [isCandidate, setRoleType] = useState(true);


    useEffect(() => {
        // @ts-ignore

        if (isCandidate) {
            console.log("unregister");
            // const values = getValues();
            // console.log('getValues() => ', values)
            // reset({ ...getValues(), first_name: undefined, last_name: undefined });
            unregister(["name"]);
            register("first_name", { required: 'First name is required', pattern: { value: /^[A-Za-z\s]+$/i, message: "Please provide a valid first name" }, });
            register("middle_name", { required: 'Middle name is required', pattern: { value: /^[A-Za-z\s]+$/i, message: "Please provide a valid middle name" }, });
            register("last_name", { required: 'Last name is required', pattern: { value: /^[A-Za-z\s]+$/i, message: "Please provide a valid last name" }, });
        } else {
            console.log("register");
            // console.log('getValues() => ', getValues())
            unregister(["first_name", "middle_name", "last_name"]);
            register("name", { required: 'Company name is required', pattern: { value: /^[A-Za-z\s]+$/i, message: "Please provide a valid name" }, });
        }
    }, [isCandidate]);

    // console.log('error => ', errors)
    // console.log('getValues() => ', getValues())

    return <SafeAreaView style={globalstyle.fullview}>
        <Loader isLoading={loading} />
        <TermsAndConditionsModal visible={showTermsModal} setVisible={setShowTermsModal} />
        <View style={[{ flex: 1, justifyContent: 'center', paddingHorizontal: 15 }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false} style={[isIPad && globalstyle.authscreencontainer]}>
                        {/*  <View> */}
                        <View style={[globalstyle.authLogoContainer, { marginTop: 60 }]}>
                            <Image
                                source={require('./../../../assets/images/logo-with-text.png')}
                                style={globalstyle.authLogo}
                            />
                            <Text style={globalstyle.authheading}>Register</Text>
                            <Text style={globalstyle.authdescription}>Add Your Details to Sign Up</Text>
                        </View>
                        <View>
                            {isCandidate && <>
                                <View style={globalstyle.inputbox}>
                                    <Icon color={colors.primary} name={'user'} size={18} />
                                    <TextInput
                                        style={globalstyle.inputfield}
                                        placeholder="First Name"
                                        // defaultValue={'John'}
                                        placeholderTextColor={colors.placeholdercolor}
                                        name={"first_name"}
                                        // {...register('first_name', {
                                        //     // value: 'John',
                                        //     required: 'First name is required',
                                        //     pattern: {
                                        //         value: /^[A-Za-z\s]+$/i,
                                        //         message: "Please provide a valid name"
                                        //     },
                                        // })}
                                        onChangeText={(value) => setValue('first_name', value)}
                                        ref={input01}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input02.current.focus()}
                                    />
                                </View>
                                {errors.first_name && <Text style={globalstyle.errorField}>{errors.first_name.message}</Text>}
                                <View style={globalstyle.inputbox}>
                                    <Icon color={colors.primary} name={'user'} size={18} />
                                    <TextInput
                                        style={globalstyle.inputfield}
                                        placeholder="Middle Name"
                                        // defaultValue={'John'}
                                        placeholderTextColor={colors.placeholdercolor}
                                        name={"middle_name"}
                                        // {...register('middle_name', {
                                        //     // value: 'John',
                                        //     required: 'Middle name is required',
                                        //     pattern: {
                                        //         value: /^[A-Za-z\s]+$/i,
                                        //         message: "Please provide a valid name"
                                        //     },
                                        // })}
                                        onChangeText={(value) => setValue('middle_name', value)}
                                        ref={input01}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input02.current.focus()}
                                    />
                                </View>
                                {errors.middle_name && <Text style={globalstyle.errorField}>{errors.middle_name.message}</Text>}
                                <View style={globalstyle.inputbox}>
                                    <Icon color={colors.primary} name={'user'} size={18} />
                                    <TextInput
                                        style={globalstyle.inputfield}
                                        placeholder="Last Name"
                                        // defaultValue={'Canady'}
                                        placeholderTextColor={colors.placeholdercolor}
                                        name={"last_name"}
                                        // {...register('last_name', {
                                        //     // value: 'Canady',
                                        //     required: 'Last name is required',
                                        //     pattern: {
                                        //         value: /^[A-Za-z\s]+$/i,
                                        //         message: "Please provide a valid name"
                                        //     },
                                        // })}
                                        onChangeText={(value) => setValue('last_name', value)}
                                        ref={input02}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input03.current.focus()}
                                    />
                                </View>
                                {errors.last_name && <Text style={globalstyle.errorField}>{errors.last_name.message}</Text>}
                            </>}
                            {!isCandidate && <>
                                <View style={globalstyle.inputbox}>
                                    <Icon color={colors.primary} name={'user'} size={18} />
                                    <TextInput
                                        style={globalstyle.inputfield}
                                        placeholder="Company Name"
                                        // defaultValue={'John'}
                                        placeholderTextColor={colors.placeholdercolor}
                                        name={"name"}
                                        // {...register('name', {
                                        //     // value: 'John',
                                        //     required: 'Company name is required',
                                        //     pattern: {
                                        //         value: /^[A-Za-z\s]+$/i,
                                        //         message: "Please provide a valid name"
                                        //     },
                                        // })}
                                        onChangeText={(value) => setValue('name', value)}
                                        ref={input01}
                                        returnKeyType="next"
                                        onSubmitEditing={() => input02.current.focus()}
                                    />
                                </View>
                                {errors.name && <Text style={globalstyle.errorField}>{errors.name.message}</Text>}
                            </>}
                            <View style={globalstyle.inputbox}>
                                <Icon color={colors.primary} name={'mail'} size={18} />
                                <TextInput
                                    style={globalstyle.inputfield}
                                    placeholder="Email Address"
                                    // defaultValue={'johncanady@mailinator.com'}
                                    placeholderTextColor={colors.placeholdercolor}
                                    {...register('email', {
                                        // value: 'johncanady@mailinator.com',
                                        required: 'Email Address is required',
                                        pattern: {
                                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                            message: "Please provide valid email"
                                        },
                                    })}
                                    onChangeText={(value) => setValue('email', value)}
                                    autoCapitalize='none'
                                    ref={input03}
                                    returnKeyType="next"
                                    onSubmitEditing={() => input04.current.focus()}
                                />
                            </View>
                            {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}

                            {/* <View style={globalstyle.inputbox}>
                                <Icon color={colors.primary} name={'phone'} size={18} />
                                <TextInput
                                    style={globalstyle.inputfield}
                                    placeholder="Phone Number (Optional)"
                                    // defaultValue={'+81112345637'}
                                    placeholderTextColor={colors.placeholdercolor}
                                    // keyboardType='phone-pad'
                                    keyboardType='phone-pad'
                                    {...register('phone', {
                                        // value: '+81112345637',
                                        // required: 'Phone number is required',
                                        pattern: {
                                            value: /[0-9+]$/i,
                                            message: "Please provide valid phone number"
                                        },
                                    })}
                                    onChangeText={(value) => setValue('phone', value)}
                                    ref={input04}
                                    returnKeyType="next"
                                    onSubmitEditing={() => input05.current.focus()}
                                />
                            </View>
                            {errors.phone && <Text style={globalstyle.errorField}>{errors.phone.message}</Text>} */}

                            <View style={[globalstyle.inputbox, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon color={colors.primary} name={'lock'} size={18} />
                                    <TextInput
                                        style={[globalstyle.inputfield, { flex: 0.8 }]}
                                        placeholder="Password"
                                        // defaultValue={'password123'}
                                        placeholderTextColor={colors.placeholdercolor}
                                        {...register('password', {
                                            // value: 'password123',
                                            required: 'Password is required',
                                            minLength: { value: 8, message: 'Password length must be greater then 8' }
                                        })}
                                        // inputRef={password.ref}
                                        onChangeText={(value) => setValue('password', value)}
                                        secureTextEntry={!showPassword ? true : false}
                                        autoCapitalize='none'
                                        ref={input05}
                                    // returnKeyType="next"
                                    // onSubmitEditing={() => input05.current.focus()}
                                    />
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={globalstyle.showhideicontouch} onPress={() => { setShowPassword(!showPassword) }}>
                                    <Icon name={!showPassword ? 'eye' : 'eye-off'} size={18} style={globalstyle.showhideicon} />
                                </TouchableOpacity>
                            </View>
                            {errors.password && <Text style={globalstyle.errorField}>{errors.password.message}</Text>}

                            <View style={{ marginTop: 15, marginBottom: 15 }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => setChecked(!isChecked)}
                                    style={{
                                        flexDirection: 'row', alignItems: 'center',
                                        // justifyContent: 'center' 
                                    }}>
                                    <Icon
                                        name={isChecked ? "check-circle" : "circle"}
                                        color={colors.primary}
                                        style={{ fontSize: isIPad ? 20 : 17, marginRight: 10 }}
                                    />
                                    <Text style={styles.termstext}>Yes, I agree to the </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => setShowTermsModal(true)}>
                                        <Text style={styles.termstextbold}>Term & Condition</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>

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
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleSubmit(onSubmit)}
                                style={globalstyle.authSubmitButton}
                            >
                                <Text style={globalstyle.authSubmitButtonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={globalstyle.alreadysignin}>
                            <Text style={globalstyle.alreadyaccount}>Already have an account? </Text>
                            <TouchableOpacity activeOpacity={0.8}
                                onPress={() => { props.navigation.navigate('Login') }}>
                                <Text style={globalstyle.actionauthtext}> Login</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ paddingBottom: 30 }} /> */}
                        {/* </View>*/}
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    </SafeAreaView>
}

const setStateToProps = (state) => ({
    registerResponse: state.authstate.registerResponse,
})
const mapDispatchToProps = (dispatch) => {
    return {
        RegisterApiCall: bindActionCreators(RegisterApiCall, dispatch),
        SetIsLogin: bindActionCreators(SetIsLogin, dispatch),
        SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    }
}

export default connect(setStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
    termstext: { fontFamily: fonts.latoRegular, fontSize: isIPad ? 18 : 14 },
    termstextbold: { fontFamily: fonts.latoBold, fontSize: isIPad ? 18 : 14 }
})