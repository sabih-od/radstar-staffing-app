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
import FilterModal from "../../components/modal/FilterModal";

const Jobs = (props) => {

    const [loading, isLoading] = useState(false);
    const [filterShow, toggleFilter] = useState(false);

    useEffect(() => {
        console.log('props => ', props)
        props.route.params && props.navigation.setOptions({ headerTitle: props.route.params.headerTitle });
    }, [props.route.params])

    function _onSearch(value) {
        // setLoading(true)
        // props.GetSearchPost({ page, limit, title: value })
    }


    return (
        <SafeAreaView>
            <FilterModal visible={filterShow} setVisible={toggleFilter} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <SearchInput onSearch={_onSearch} value={props?.route?.params?.title} width={width - 40 - 30 - 10} />
                <TouchableOpacity onPress={() => toggleFilter(true)} activeOpacity={0.9} style={{ width: 40, height: 40, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Icon name="sliders" style={{ fontSize: fontSize, color: colors.grey }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 20, marginTop: -15 }}>
                    {/* <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 20 }}>Job Openings</Text> */}
                    {jobslist.map((item, index) => {
                        // console.log('index => ', index)
                        const last = 20 == index + 1 ? true : false;
                        return (<JobItem key={index} item={item} index={index} candidates={true} last={last} />)
                    })}
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

export default connect(setStateToProps, mapDispatchToProps)(Jobs);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})