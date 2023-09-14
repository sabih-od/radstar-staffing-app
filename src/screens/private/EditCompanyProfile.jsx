import React, { Fragment, useEffect, useState, useCallback, useRef } from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, BackHandler, Alert, RefreshControl, TextInput } from "react-native";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import { colors, fontSize, fonts, height, width } from "../../theme";
import globalstyle from "../../theme/style";
import { useForm } from "react-hook-form";
import countries from "../../data/countries";
import { ownershiplist, industrylist } from "../../data/selectoptions";

import SelectModal from "../../components/modal/SelectModal";
import CameraModal from "../../components/modal/CameraModal";
import SectionTitle from "../../components/SectionTitle";
import Loader from "../../components/Loader";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const EditCompanyProfile = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [filePath, setFilePath] = useState(null);

    const handleCamera = value => {
        setShowModal(false);
        console.log('value => ', value);
        chooseFile(value);
    };

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const chooseFile = async isCamera => {
        var options = {
            title: 'Select Profile Picture',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: { skipBackup: true, path: 'images' },
        };

        let response = {};
        if (isCamera) {
            console.log('launchCamera');
            await delay(200);
            response = await launchCamera(options);
            // response = setTimeout(() => { launchCamera(options) }, 200);
        } else {
            console.log('launchImageLibrary');
            await delay(200);
            response = await launchImageLibrary(options);
            // response = setTimeout(() => { launchImageLibrary(options) }, 200);
        }

        console.log('response here => ', response);
        if (Object.keys(response).length > 0) {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log('response: ', response);
                setFilePath(response.assets[0]);
            }
        }
    };

    const [user, setUser] = useState(props.userInfo);
    const [loading, isLoading] = useState(false);
    const { handleSubmit, formState: { errors }, register, setValue } = useForm();

    const input01 = useRef();
    const input02 = useRef();
    const input03 = useRef();
    const input04 = useRef();
    const input05 = useRef();
    const input06 = useRef();

    function onSubmit(data) {
        console.log('data => ', data)
    }


    const [industry, setIndustry] = useState(user?.industry ? user?.industry : null)
    const [ownership, setOwenership] = useState(user?.ownership ? user?.ownership : null)
    const [country, setCountry] = useState(user?.country ? user?.country : null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null);
    const _handleCountry = (item) => {
        console.log('_handleCountry => ', item)
        setCountry(item)
    }
    const _handleState = (item) => {
        console.log('_handleState => ', item)
        setState(item)
    }
    const _handleCity = (item) => {
        console.log('_handleCity => ', item)
        setCity(item)
    }
    const _handleOwnership = (item) => {
        console.log('_handleOwnership => ', item)
        setOwenership(item)
    }
    const _handleIndustry = (item) => {
        console.log('_handleIndustry => ', item)
        setIndustry(item)
    }


    return (
        <SafeAreaView>
            <CameraModal
                handleCamera={handleCamera}
                visible={showModal}
                setVisible={setShowModal}
            />
            <Loader isLoading={loading} />
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View>
                    <SectionTitle title={"Account Information"} />
                    <View style={{height: 3}} />
                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Email</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                editable={false}
                                placeholder="Company Email"
                                value={user?.email}
                                {...register('email', {
                                    value: user?.email,
                                    required: 'Email Address is required',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: "Please provide valid email"
                                    },
                                })}
                                defaultValue={user?.email}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('email', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Password</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'lock'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Enter Password"
                                {...register('password', {
                                    value: '',
                                    // required: 'Password is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('password', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}
                    </View>

                    <SectionTitle title={"Company Information"} />
                    <View style={{height: 3}} />
                    <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { setShowModal(true) }}>
                            <Image source={require('./../../../assets/images/no-image.png')} style={{ width: 100, height: 100, borderRadius: 15, resizeMode: 'cover', marginRight: 10 }} />
                        </TouchableOpacity>
                        <View style={{ width: width - 160 }}>
                            <Text style={{ fontSize: fontSize + 3, fontFamily: fonts.latoBold, marginBottom: 3 }}>Company Logo</Text>
                            <Text style={{ fontSize: fontSize - 1, color: colors.grey, fontFamily: fonts.latoRegular, marginBottom: 3, lineHeight: fontSize + 6 }}>Update company profile of max size 100 x 100 pixels</Text>
                            {/* <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { }}
                                style={{ backgroundColor: colors.primary, paddingHorizontal: 10, paddingVertical: 7 }}>
                                <Text style={{ color: colors.white }}>Select Logo</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Company Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Multimedia Design"
                                {...register('email', {
                                    value: user?.full_name,
                                })}
                                defaultValue={user?.full_name}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('email', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>CEO Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="CEO Name"
                                {...register('ceo_name', {
                                    value: user?.CEO,
                                })}
                                defaultValue={user?.CEO}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('ceo_name', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.email && <Text style={globalstyle.errorField}>{errors.email.message}</Text>}
                    </View>

                    <SelectModal placeholder="Select Industry" selected={industry} label="Industry" list={industrylist} onSelect={_handleIndustry} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('industry', { value: '', required: 'Industry is required', })} />
                    {errors.industry && <Text style={globalstyle.errorField}>{errors.industry.message}</Text>}


                    <SelectModal placeholder="Select Ownership" selected={ownership} label="Ownership" list={ownershiplist} onSelect={_handleOwnership} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('ownership', { value: '', required: 'Ownership is required', })} />
                    {errors.ownership && <Text style={globalstyle.errorField}>{errors.ownership.message}</Text>}

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Desctiption</Text>
                        <View style={[globalstyle.inputbox, { alignItems: 'flex-start', paddingTop: 12, }]}>
                            {/* <Icon color={colors.primary} name={'mail'} style={{ marginTop: 5 }} size={18} /> */}
                            <TextInput
                                style={[globalstyle.inputfield, { paddingHorizontal: 0, lineHeight: 22 }, { height: 170 }]}
                                placeholder="Enter Company About"
                                multiline={true}
                                {...register('desctiption', {
                                    value: user?.about,
                                    required: 'Desctiption is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={user?.about}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('desctiption', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.desctiption && <Text style={globalstyle.errorField}>{errors.desctiption.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Address</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Your Location Address"
                                {...register('address', {
                                    value: user?.address,
                                })}
                                defaultValue={user?.address}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>No Of Office</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="No Of Office"
                                {...register('noofemployees', {
                                    value: user?.noofoffices && user?.noofoffices,
                                })}
                                defaultValue={user?.noofoffices && String(user?.noofoffices)}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('ceo_name', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.noofemployees && <Text style={globalstyle.errorField}>{errors.noofemployees.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>No Of Employees</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'users'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="No Of Employees"
                                {...register('ceo_name', {
                                    value: user?.noofemployees,
                                })}
                                defaultValue={String(user?.noofemployees)}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('ceo_name', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.no_of_employees && <Text style={globalstyle.errorField}>{errors.no_of_employees.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Established In</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Established In"
                                {...register('established_in', {
                                    value: user?.establishedin,
                                })}
                                defaultValue={String(user?.establishedin)}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('established_in', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.established_in && <Text style={globalstyle.errorField}>{errors.established_in.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Website URL</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'globe'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="http://www.companydomain.com"
                                {...register('website', {
                                    value: user?.website,
                                })}
                                defaultValue={user?.website}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('website', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.website && <Text style={globalstyle.errorField}>{errors.website.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Fax</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="+123 456 7898"
                                {...register('fax', {
                                    value: user?.fax,
                                })}
                                defaultValue={user?.fax && String(user?.fax)}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('fax', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.fax && <Text style={globalstyle.errorField}>{errors.fax.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Phone</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'phone'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="+123 456 7898"
                                value={user?.phone}
                                {...register('phone', {
                                    value: user?.phone,
                                })}
                                defaultValue={user?.phone && String(user?.phone)}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('phone', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.phone && <Text style={globalstyle.errorField}>{errors.phone.message}</Text>}
                    </View>

                    <SectionTitle title={"Social Media Information"} />
                    <View style={{height: 3}} />
                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Facebook</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="https://www.facebook.com"
                                {...register('facebook', {
                                    value: user?.facebook,
                                })}
                                defaultValue={user?.facebook}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('facebook', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.facebook && <Text style={globalstyle.errorField}>{errors.facebook.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Twitter</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'twitter'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="https://www.twitter.com"
                                {...register('twitter', {
                                    value: user?.twitter,
                                })}
                                defaultValue={user?.twitter}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('twitter', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.twitter && <Text style={globalstyle.errorField}>{errors.twitter.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Linked In</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'linkedin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="https://www.linkedin.com"
                                {...register('linkedin', {
                                    value: user?.linkedin,
                                })}
                                defaultValue={user?.linkedin}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('linkedin', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.linkedin && <Text style={globalstyle.errorField}>{errors.linkedin.message}</Text>}
                    </View>

                    <SelectModal placeholder="Select Country" selected={country} label="Country" list={countries} onSelect={_handleCountry} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('country', { value: '', required: 'Country is required', })} />
                    {errors.country && <Text style={globalstyle.errorField}>{errors.country.message}</Text>}

                    <SelectModal placeholder="Select State" selected={state} label="State" list={[]} onSelect={_handleState} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('state', { value: '', required: 'State is required', })} />
                    {errors.state && <Text style={globalstyle.errorField}>{errors.state.message}</Text>}

                    <SelectModal placeholder="Select City" selected={state} label="City" list={[]} onSelect={_handleCity} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('city', { value: '', required: 'City is required', })} />
                    {errors.city && <Text style={globalstyle.errorField}>{errors.city.message}</Text>}

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleSubmit(onSubmit)}
                        // onPress={() => {props.navigation.navigate('Screens', { screen: 'Home' })}}
                        style={[globalstyle.authSubmitButton, { marginTop: 4 }]}>
                        <Text style={globalstyle.authSubmitButtonText}>Update Profile</Text>
                    </TouchableOpacity>
                    <View style={{ height: 30 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const setStateToProps = (state) => ({
    userInfo: state.appstate.userInfo,
    // getUpcomingEventsListResponse: state.listingstate.getUpcomingEventsListResponse,
    // getEventsListResponse: state.listingstate.getEventsListResponse,
    // getOurSpeakersListResponse: state.listingstate.getOurSpeakersListResponse,
    // getOurStaffListResponse: state.listingstate.getOurStaffListResponse,
    // getPostsListResponse: state.listingstate.getPostsListResponse,
    // getSermonsListResponse: state.listingstate.getSermonsListResponse,
    // getHomeBannerResponse: state.listingstate.getHomeBannerResponse,
    // getUserProfileResponse: state.authstate.getUserProfileResponse,
})

const mapDispatchToProps = (dispatch) => {
    return {
        // GetUpcomingEventsList: bindActionCreators(GetUpcomingEventsList, dispatch),
        // GetEventsList: bindActionCreators(GetEventsList, dispatch),
        // GetOurSpeakerList: bindActionCreators(GetOurSpeakerList, dispatch),
        // GetOurStaffList: bindActionCreators(GetOurStaffList, dispatch),
        // GetPostsList: bindActionCreators(GetPostsList, dispatch),
        // GetSermonsList: bindActionCreators(GetSermonsList, dispatch),
        // GetHomeBanner: bindActionCreators(GetHomeBanner, dispatch),
        // GetProfileApiCall: bindActionCreators(GetProfileApiCall, dispatch),
        // SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    }
}

export default connect(setStateToProps, mapDispatchToProps)(EditCompanyProfile);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})