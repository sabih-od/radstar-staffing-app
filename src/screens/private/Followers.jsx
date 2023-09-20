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

const LIMIT = 50;
const Followers = (props) => {

    useEffect(() => {
        console.log('props => ', props)
        props.route.params?.headerTitle && props.navigation.setOptions({ headerTitle: props.route.params.headerTitle });
    }, [props.route.params])

    function _onSearch(value) {
        // setLoading(true)
        // props.GetSearchPost({ page, limit, title: value })
    }

    const [loading, isLoading] = useState(false);
    const [pageno, setPageno] = useState(1);
    const [limit, setLimit] = useState(LIMIT);
    const [refreshing, setRefreshing] = useState(false);
    const [loadmore, setLoadmore] = useState(false);
    const [candidatesList, setCandidateList] = useState(candidateslist)
    const _handleRefresh = () => {
        setRefreshing(true)
        setPageno(1);
        // setLimit(itemslimit);
        // props.GetEventsList({ pageno, limit });
        console.log('_handleRefresh ');
        setTimeout(() => {
            setRefreshing(false)
            setCandidateList(candidateslist);
        }, 2000)
    }

    return (
        <SafeAreaView style={globalstyle.fullview}>
            <View style={{ marginLeft: 15 }}>
                <SearchInput onSearch={_onSearch} placeholder={props.route?.params?.headerTitle ? `Search ${props.route?.params?.headerTitle}...` : 'Search Follower...'} value={props?.route?.params?.title} />
            </View>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: 15 }}
                keyExtractor={item => item.id.toString()}
                data={candidatesList}
                refreshing={refreshing}
                ListEmptyComponent={() => !loading && <View style={{ height: height - 230, alignItems: 'center', padding: 10, justifyContent: 'center' }}>
                    <Icon name="alert-triangle" style={{ fontSize: isIPad ? 40 : 40, color: colors.primary, marginBottom: 10, opacity: 0.2 }} />
                    <Text style={{ fontFamily: fonts.latoRegular, textAlign: 'center', color: colors.grey, fontSize: isIPad ? 16 : 14 }}>No record found</Text>
                </View>}
                onRefresh={_handleRefresh}
                renderItem={({ item, index }) => {
                    const last = 6 == index + 1 ? true : false;
                    return (<FollowerItem item={item} index={index} candidates={true} last={last} showSalary={props.route.params?.headerTitle == 'Candidate List'} />)
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