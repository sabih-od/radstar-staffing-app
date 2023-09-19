import React, { Fragment, useEffect, useState, useCallback, useRef } from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, BackHandler, Alert, RefreshControl, TextInput } from "react-native";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Toast from 'react-native-toast-message';
import { colors, fontSize, fonts, height, width } from "../../theme";
import globalstyle from "../../theme/style";
import { useForm } from "react-hook-form";
import JobItem from "../../components/JobItem";

import SearchInput from '../../components/SearchInput'
import jobslist from "../../data/jobslist";
import { convertToK } from "../../helpers/services";
import SectionTitle from './../../components/SectionTitle';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DashboardBox = ({ item }) => {
    return (
        <View style={{ backgroundColor: colors.white, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 18, width: '48.5%', alignItems: 'center', marginBottom: 13 }}>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <Icon name={item?.icon} style={{ color: colors.black, marginBottom: 10, fontSize: fontSize * 3.2 }} />
                <View style={{}}>
                    <Text style={{ textAlign: 'center', fontFamily: fonts.latoBlack, fontSize: fontSize * 2.2, color: colors.black, marginBottom: -16 }}>{convertToK(item?.count)}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.black, marginTop: 15 }}>{item?.title}</Text>
                </View>
            </View>
        </View>
    )
}

const topBoxesCandidates = [
    { count: 2460, title: 'Profile Views', icon: 'eye' },
    { count: 4260000, title: 'Followers', icon: 'users' },
    { count: 26700, title: 'Followings', icon: 'users' },
    { count: 127, title: 'Application Sent', icon: 'file' },
];
const topBoxesEmployer = [
    { count: 2460, title: 'Profile Views', icon: 'eye' },
    { count: 246, title: 'Open Jobs', icon: 'archive' },
    { count: 426000, title: 'Followers', icon: 'users' },
    { count: 127, title: 'Applications Received', icon: 'file' },
];

const Home = (props) => {

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 20 }}>
                    {props.isCandidate && <DashboardBox item={topBoxesCandidates[0]} />}
                    {props.isCandidate && <DashboardBox item={topBoxesCandidates[1]} />}
                    {props.isCandidate && <DashboardBox item={topBoxesCandidates[2]} />}
                    {props.isCandidate && <DashboardBox item={topBoxesCandidates[3]} />}
                    {!props.isCandidate && <DashboardBox item={topBoxesEmployer[0]} />}
                    {!props.isCandidate && <DashboardBox item={topBoxesEmployer[1]} />}
                    {!props.isCandidate && <DashboardBox item={topBoxesEmployer[2]} />}
                    {!props.isCandidate && <DashboardBox item={topBoxesEmployer[3]} />}
                </View>
                {/* <GestureHandlerRootView> */}
                <View style={{ marginTop: -13, marginBottom: 20, }}>
                    <SectionTitle title={props.isCandidate ? "Recommended Jobs" : "Posted Jobs"} />
                    {/* <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 5 }}>{props.isCandidate ? "Recommended Jobs" : "Posted Jobs"}</Text> */}
                    {jobslist.map((item, index) => {
                        console.log('index => ', index)
                        const last = 6 == index + 1 ? true : false;
                        return (<JobItem key={index} item={item} index={index} candidates={true} last={last} />)
                    })}
                </View>
                {/* </GestureHandlerRootView> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const setStateToProps = (state) => ({
    userInfo: state.appstate.userInfo,
    isCandidate: state.appstate.isCandidate,
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

export default connect(setStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})