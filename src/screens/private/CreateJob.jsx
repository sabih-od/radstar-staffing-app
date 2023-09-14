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
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import DateTimeModal from './../../components/DateTimeModal';

const CreateJob = (props) => {

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

    const [showDate, setShowDate] = useState(false);
    const [expriyDate, setExpriyDate] = useState('');


    const _handleChangeDate = (event, date) => {
        const { type, nativeEvent: { timestamp }, } = event;
        // console.log('type => ', type);
        if (type != 'dismissed') {
            // console.log('date => ', date);
            const momentdate = moment(date).format('DD-MM-YYYY')
            // console.log('momentdate => ', momentdate);
            setShowDate(false);
            setValue('expiry_date', momentdate)
            setExpriyDate(momentdate);
        } else {
            setShowDate(false);
        }
    };

    function _handleSetVisible(data) {
        setShowDate(false);
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View>
                    {/* <Text style={{ fontSize: 18, fontFamily: fonts.latoBold, marginBottom: 20 }}>Account Information</Text> */}

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Title</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                editable={false}
                                placeholder="Job Title"
                                // value=''
                                {...register('job_title', {
                                    value: '',
                                    required: 'Job Title is required',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: "Please provide valid job_title"
                                    },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('job_title', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.job_title && <Text style={globalstyle.errorField}>{errors.job_title.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Description</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0, paddingTop: 15, height: 140, alignItems: 'flex-start' }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                multiline={true}
                                placeholder="Job Description"
                                // value=''
                                {...register('description', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid description"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('description', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.description && <Text style={globalstyle.errorField}>{errors.description.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Benefits</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0, paddingTop: 15, height: 140, alignItems: 'flex-start' }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                multiline={true}
                                placeholder="Benefits"
                                // value=''
                                {...register('benefits', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid benefits"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('benefits', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.benefits && <Text style={globalstyle.errorField}>{errors.benefits.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Skills</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Required Skills"
                                // value=''
                                {...register('skills', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('skills', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.skills && <Text style={globalstyle.errorField}>{errors.skills.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Address</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Country"
                                // value=''
                                {...register('industry', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('industry', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select State"
                                // value=''
                                {...register('state', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('state', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select City"
                                // value=''
                                {...register('city', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('city', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.city && <Text style={globalstyle.errorField}>{errors.city.message}</Text>}
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Salary</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '48.5%' }]}>
                                {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                                <TextInput
                                    style={globalstyle.inputfield}
                                    placeholder="Salary From"
                                    // value=''
                                    {...register('salary_from', {
                                        value: '',
                                        // required: 'Email Address is required',
                                        // pattern: {
                                        //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        //     message: "Please provide valid email"
                                        // },
                                    })}
                                    defaultValue={''}
                                    placeholderTextColor={colors.placeholdercolor}
                                    autoCapitalize='none'
                                    onChangeText={(value) => setValue('salary_from', value)}
                                    ref={input01}
                                    returnKeyType="next"
                                    onSubmitEditing={() => input02.current.focus()}
                                />
                            </View>
                            <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '48.5%' }]}>
                                {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                                <TextInput
                                    style={globalstyle.inputfield}
                                    placeholder="Salary To"
                                    // value=''
                                    {...register('salary_to', {
                                        value: '',
                                        // required: 'Email Address is required',
                                        // pattern: {
                                        //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        //     message: "Please provide valid email"
                                        // },
                                    })}
                                    defaultValue={''}
                                    placeholderTextColor={colors.placeholdercolor}
                                    autoCapitalize='none'
                                    onChangeText={(value) => setValue('salary_to', value)}
                                    ref={input01}
                                    returnKeyType="next"
                                    onSubmitEditing={() => input02.current.focus()}
                                />
                            </View>
                        </View>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Salary Currency"
                                // value=''
                                {...register('salary_currency', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('salary_currency', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'mail'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Salary Period"
                                // value=''
                                {...register('salary_period', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('salary_period', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.salary_period && <Text style={globalstyle.errorField}>{errors.salary_period.message}</Text>}
                    </View>


                    <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ fontFamily: fonts.latoRegular, marginRight: 40 }}>Hide Salary?</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 25 }} >
                            <Icon name={'circle'} style={{ fontSize: 14, marginRight: 7, }} />
                            <Text style={{ fontFamily: fonts.latoRegular, marginTop: -2 }}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 25 }} >
                            <Icon name={'check-circle'} style={{ fontSize: 14, marginRight: 7, }} />
                            <Text style={{ fontFamily: fonts.latoRegular, marginTop: -2 }}>No</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputwithlabel}>
                        <Text style={globalstyle.inputlabel}>Freelance</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Career Level"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Functional Area"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Job Type"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Job Shift"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Number Of Positions"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="No Preference"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        {Platform.OS === 'ios' && <DateTimeModal
                            showDate={showDate}
                            // maxDate={expriyDate} 
                            setVisible={_handleSetVisible}
                            _handleChangeDate={_handleChangeDate}
                            _handleChangeTime={() => { }} />}

                        {(expriyDate) && Platform.OS !== 'ios' && (
                            <RNDateTimePicker
                                value={new Date()}
                                dataFormat="day month year"
                                mode="date"
                                display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
                                // display={'spinner'}
                                // minimumDate={new Date()}
                                minimumDate={!expriyDate ? new Date(moment(expriyDate, "DD-MM-YYYY").format("YYYY"), (moment(expriyDate, "DD-MM-YYYY").format("MM") - 1), moment(expriyDate, "DD-MM-YYYY").format("DD")) : new Date()}
                                onChange={_handleChangeDate}
                            />
                        )}

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setShowDate(true)}
                            style={[globalstyle.inputbox, { width: '100%', paddingVertical: 0, paddingHorizontal: 0 }]}>
                            <Text style={[globalstyle.inputfield, { color: expriyDate != '' ? colors.black : colors.placeholdercolor }]}>{expriyDate != '' ? expriyDate : 'Job Expiry Date'}</Text>
                        </TouchableOpacity>

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0, display: 'none' }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Job Expiry Date"
                                // value=''
                                {...register('expiry_date', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Required Degree Level"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
                                placeholderTextColor={colors.placeholdercolor}
                                autoCapitalize='none'
                                onChangeText={(value) => setValue('address', value)}
                                ref={input01}
                                returnKeyType="next"
                                onSubmitEditing={() => input02.current.focus()}
                            />
                        </View>
                        {errors.address && <Text style={globalstyle.errorField}>{errors.address.message}</Text>}

                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                            {/* <Icon color={colors.primary} name={'map-pin'} size={18} /> */}
                            <TextInput
                                style={globalstyle.inputfield}
                                placeholder="Select Required Job Experience"
                                // value=''
                                {...register('address', {
                                    value: '',
                                    // required: 'Email Address is required',
                                    // pattern: {
                                    //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                    //     message: "Please provide valid email"
                                    // },
                                })}
                                defaultValue={''}
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

                    <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ fontFamily: fonts.latoRegular, marginRight: 40 }}>Is Freelance?</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 25 }} >
                            <Icon name={'circle'} style={{ fontSize: 14, marginRight: 7, }} />
                            <Text style={{ fontFamily: fonts.latoRegular, marginTop: -2 }}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 25 }} >
                            <Icon name={'check-circle'} style={{ fontSize: 14, marginRight: 7, }} />
                            <Text style={{ fontFamily: fonts.latoRegular, marginTop: -2 }}>No</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleSubmit(onSubmit)}
                        // onPress={() => {props.navigation.navigate('Screens', { screen: 'Home' })}}
                        style={[globalstyle.authSubmitButton, { marginTop: 4 }]}>
                        <Text style={globalstyle.authSubmitButtonText}>Post Job</Text>
                    </TouchableOpacity>
                    <View style={{ height: 30 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const setStateToProps = (state) => ({
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

export default connect(setStateToProps, mapDispatchToProps)(CreateJob);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})