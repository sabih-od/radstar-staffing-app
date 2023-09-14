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
import EmployeeItem from "../../components/EmployeeItem";


import SearchInput from '../../components/SearchInput'
import candidateslist from "../../data/candidateslist";
import FollowerItem from "../../components/FollowerItem";

const Followers = (props) => {

    useEffect(() => {
        console.log('props => ', props)
        props.route.params && props.navigation.setOptions({ headerTitle: props.route.params.headerTitle });
    }, [props.route.params])

    function _onSearch(value) {
        // setLoading(true)
        // props.GetSearchPost({ page, limit, title: value })
    }

    return (
        <SafeAreaView style={globalstyle.fullview}>
            <View style={{ marginLeft: 15 }}>
                <SearchInput onSearch={_onSearch} placeholder="Search Follower..." value={props?.route?.params?.title} />
            </View>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: 15 }}
                keyExtractor={item => item.id.toString()}
                data={candidateslist}
                renderItem={({ item, index }) => {
                    const last = 6 == index + 1 ? true : false;
                    return (<FollowerItem item={item} index={index} candidates={true} last={last} />)
                }}
            />
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

export default connect(setStateToProps, mapDispatchToProps)(Followers);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})