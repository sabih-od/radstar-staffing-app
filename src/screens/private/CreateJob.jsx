import React, { Fragment, useEffect, useState, useCallback, useRef } from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, BackHandler, Alert, RefreshControl, TextInput, Platform } from "react-native";
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
import InputField from "../../components/InputField";
import SelectModal from "../../components/modal/SelectModal";
import { careerlevellist, degreelevellist, exprience_level, functionalarealist, industrylist, jobshiftlist, jobtypelist, salarycurrencylist, salaryperiodlist } from "../../data/selectoptions";
import countries from "../../data/countries";

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

    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [careerlevel, setCareerLevel] = useState(null);
    const [functionalarea, setFunctionalArea] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [jobtype, setJobType] = useState(null);
    const [jobshift, setJobShift] = useState(null);
    const [noofpositions, setNoOfPositions] = useState(null);
    const [degreelevel, setDegreeLevel] = useState(null);
    const [jobexperience, setJobExperience] = useState(null);
    const [salarycurrency, setSalaryCurrency] = useState(null);
    const [salaryperiod, setSalaryPeriod] = useState(null);

    const _handleCountry = (item) => setCountry(item);
    const _handleState = (item) => setState(item);
    const _handleCity = (item) => setCity(item);
    const _handleIndustry = (item) => setIndustry(item);
    const _handleFunctionalArea = (item) => setFunctionalArea(item);
    const _handleExperience = (item) => setExperience(item);
    const _handleCareerLevel = (item) => setCareerLevel(item);
    const _handleSalaryPeriod = (item) => setSalaryPeriod(item);


    const _handleNoOfPositions = (item) => setNoOfPositions(item);
    const _handleSalaryCurrency = (item) => setSalaryCurrency(item);
    const _handleJobExperience = (item) => setJobExperience(item);
    const _handleDegreeLevel = (item) => setDegreeLevel(item);
    const _handleJobShift = (item) => setJobShift(item);
    const _handleJobType = (item) => setJobType(item);


    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View>
                    {/* <Text style={{ fontSize: 18, fontFamily: fonts.latoBold, marginBottom: 20 }}>Account Information</Text> */}

                    <InputField
                        register={register}
                        label={'Title'}
                        placeholder={'Enter Job Title...'}
                        name={'job_title'}
                        onChangeText={(value) => setValue('job_title', value)}
                        required={true}
                        pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                        errors={errors}
                    />

                    <InputField
                        register={register}
                        label={'Description'}
                        placeholder={'Enter Job Description...'}
                        name={'job_description'}
                        onChangeText={(value) => setValue('job_description', value)}
                        required={true}
                        pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                        errors={errors}
                        multiline={true}
                    />
                    <InputField
                        register={register}
                        label={'Benefits'}
                        placeholder={'Enter Job Benefits...'}
                        name={'job_benefits'}
                        onChangeText={(value) => setValue('job_benefits', value)}
                        required={true}
                        pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                        errors={errors}
                        multiline={true}
                    />
                    <InputField
                        register={register}
                        label={'Skills'}
                        placeholder={'Enter Job Skills...'}
                        name={'job_skills'}
                        onChangeText={(value) => setValue('job_skills', value)}
                        required={true}
                        pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                        errors={errors}
                    />

                    <View style={styles.inputwithlabel}>
                        {/* <Text style={globalstyle.inputlabel}>Address</Text> */}
                        <SelectModal placeholder="Select Country" selected={country} label="Country" list={countries} onSelect={_handleCountry} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('country', { value: '', required: 'Country is required', })} />
                        {errors.country && <Text style={globalstyle.errorField}>{errors.country.message}</Text>}

                        <SelectModal placeholder="Select State" selected={state} label="State" list={[]} onSelect={_handleState} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('state', { value: '', required: 'State is required', })} />
                        {errors.state && <Text style={globalstyle.errorField}>{errors.state.message}</Text>}

                        <SelectModal placeholder="Select City" selected={city} label="City" list={[]} onSelect={_handleCity} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('city', { value: '', required: 'City is required', })} />
                        {errors.city && <Text style={globalstyle.errorField}>{errors.city.message}</Text>}
                    </View>

                    <Text style={globalstyle.inputlabel}>Salary</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <InputField
                            register={register}
                            label={'Salary From'}
                            placeholder={'Salary From...'}
                            name={'salary_from'}
                            onChangeText={(value) => setValue('salary_from', value)}
                            required={true}
                            pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                            errors={errors}
                            halffield={true}
                        />
                        <InputField
                            register={register}
                            label={'Salary To'}
                            placeholder={'Salary To...'}
                            name={'salary_to'}
                            onChangeText={(value) => setValue('salary_to', value)}
                            required={true}
                            pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                            errors={errors}
                            halffield={true}
                        />
                    </View>

                    <SelectModal placeholder="Select Salary Currency" selected={salarycurrency} list={salarycurrencylist} onSelect={_handleSalaryCurrency} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('salary_currency', { value: '', required: 'Salary currency is required', })} />
                    {errors.salary_currency && <Text style={globalstyle.errorField}>{errors.salary_currency.message}</Text>}

                    <SelectModal placeholder="Select Salary Period" selected={salaryperiod} list={salaryperiodlist} onSelect={_handleSalaryPeriod} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('salary_period', { value: '', required: 'Salary period is required', })} />
                    {errors.salary_period && <Text style={globalstyle.errorField}>{errors.salary_period.message}</Text>}



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

                        <SelectModal placeholder="Select Career Level" selected={careerlevel} label="Career Level" list={careerlevellist} onSelect={_handleCareerLevel} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('career_level', { value: '', required: 'Career Level is required', })} />
                        {errors.career_level && <Text style={globalstyle.errorField}>{errors.career_level.message}</Text>}

                        <SelectModal placeholder="Select Industry" selected={industry} label="Industry" list={industrylist} onSelect={_handleIndustry} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('industry', { value: '', required: 'Industry is required', })} />
                        {errors.industry && <Text style={globalstyle.errorField}>{errors.industry.message}</Text>}

                        <SelectModal placeholder="Select Functional Area" selected={functionalarea} label="Functional Area" list={functionalarealist} onSelect={_handleFunctionalArea} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('functional_area', { value: '', required: 'Functional Area is required', })} />
                        {errors.functional_area && <Text style={globalstyle.errorField}>{errors.functional_area.message}</Text>}

                        <SelectModal placeholder="Select Job Type" selected={jobtype} label="Job Type" list={jobtypelist} onSelect={_handleFunctionalArea} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('jobtype', { value: '', required: 'Functional Area is required', })} />
                        {errors.jobtype && <Text style={globalstyle.errorField}>{errors.jobtype.message}</Text>}

                        <SelectModal placeholder="Select Job Shift" selected={jobtype} label="Job Shift" list={jobshiftlist} onSelect={_handleFunctionalArea} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('jobtype', { value: '', required: 'Job shift is required', })} />
                        {errors.jobtype && <Text style={globalstyle.errorField}>{errors.jobtype.message}</Text>}

                        <InputField
                            register={register}
                            label={'Number of Positions'}
                            placeholder={'Enter Number of Positions...'}
                            name={'noofpositions'}
                            onChangeText={(value) => setValue('noofpositions', value)}
                            required={true}
                            pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                            errors={errors}
                        />
                        <InputField
                            register={register}
                            label={'No Preference'}
                            placeholder={'Enter No Preference...'}
                            name={'nopreference'}
                            onChangeText={(value) => setValue('nopreference', value)}
                            required={true}
                            pattern='/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i'
                            errors={errors}
                        />

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

                        <Text style={globalstyle.inputlabel}>{'Expiry Date'}</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setShowDate(true)}
                            style={[globalstyle.inputbox, { width: '100%', paddingVertical: 0, paddingHorizontal: 0 }]}>
                            <Text style={[globalstyle.inputfield, { color: expriyDate != '' ? colors.black : colors.placeholdercolor }]}>{expriyDate != '' ? expriyDate : 'Job Expiry Date'}</Text>
                        </TouchableOpacity>
                        <TextInput style={{ display: 'none' }} placeholder="Job Expiry Date" {...register('expiry_date', { required: 'Expiry date is required', })} />
                        {errors.expiry_date && <Text style={globalstyle.errorField}>{errors.expiry_date.message}</Text>}

                        <SelectModal placeholder="Select Required Degree Level" selected={degreelevel} label="Degree Level" list={degreelevellist} onSelect={_handleFunctionalArea} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('degreelevel', { value: '', required: 'Degree level is required', })} />
                        {errors.degreelevel && <Text style={globalstyle.errorField}>{errors.degreelevel.message}</Text>}

                        <SelectModal placeholder="Select Required Job Experience" selected={jobexperience} label="Experience" list={exprience_level} onSelect={_handleFunctionalArea} showLabel={true} />
                        <TextInput style={{ display: 'none' }} {...register('jobexperience', { value: '', required: 'Experience is required', })} />
                        {errors.jobexperience && <Text style={globalstyle.errorField}>{errors.jobexperience.message}</Text>}

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