import React, { Fragment, useEffect, useState, useCallback, useRef } from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, BackHandler, Alert, RefreshControl, TextInput, Share } from "react-native";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Toast from 'react-native-toast-message';
import { colors, fontSize, fonts, height } from "../../theme";
import globalstyle from "../../theme/style";
import { useForm } from "react-hook-form";
import JobItem from "../../components/JobItem";
import jobslist from "../../data/jobslist";

const CompanyProfile = (props) => {

    const [loading, isLoading] = useState(false);
    const [user, setUser] = useState(props.userInfo);

    useEffect(() => {

    }, [])


    const onShare = async () => {

        let shareOptions = {
            title: `Share ${user?.full_name} Profile`,
            url: user?.website,
            message: `${user?.full_name} is a leading company. Established in ${user?.establishedin}, we have been serving [mention your target audience or market] with excellence and innovation`,
            //subject: 'Subject'
        };

        try {
            const result = await Share.share(shareOptions);
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: colors.white, padding: 20, borderRadius: 20, marginBottom: 20 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Image source={require('./../../../assets/images/no-image.png')} style={{ width: 90, height: 90, resizeMode: 'cover', borderRadius: 15, marginRight: 13 }} />
                            <View>
                                <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 3, color: colors.black }}>{user?.full_name}</Text>
                                <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, marginBottom: 8, color: colors.grey }}>Pharmacy</Text>
                                {/* <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ backgroundColor: colors.primary, marginRight: 5 }}>
                                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.white, paddingHorizontal: 14, paddingVertical: 5, fontSize: 12 }}>Follow</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: colors.primary, marginRight: 5 }}>
                                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.white, paddingHorizontal: 14, paddingVertical: 5, fontSize: 12 }}>Follow</Text>
                                    </TouchableOpacity>
                                </View> */}
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: colors.primary, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        {/* <Icon name="facebook" style={{ color: colors.white, fontSize: fontSize }} /> */}
                                        <EvilIcons name="sc-facebook" style={{ color: colors.white, fontSize: fontSize + 7 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: colors.primary, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <EvilIcons name="sc-twitter" style={{ color: colors.white, fontSize: fontSize + 7 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: colors.primary, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <EvilIcons name="sc-linkedin" style={{ color: colors.white, fontSize: fontSize + 7 }} />
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity activeOpacity={0.8} style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: colors.primary, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <EvilIcons name="sc-pinterest" style={{ color: colors.white, fontSize: fontSize + 7 }} />
                                    </TouchableOpacity> */}
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: colors.primary, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => onShare()}
                                    >
                                        <Icon name="share-2" style={{ color: colors.white, fontSize: fontSize - 1 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Icon name="clock" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>Member Since {user?.establishedin}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Icon name="map-pin" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{user?.address}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Icon name="phone" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{user?.phone}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Icon name="mail" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{user?.email}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Icon name="globe" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{user?.website}</Text>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { }}
                                style={{ backgroundColor: colors.black, width: 120, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection: 'row' }}>
                                <Icon name="alert-circle" style={{ color: colors.white, marginRight: 5 }} />
                                <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize - 1, textTransform: 'uppercase' }}>Report</Text>
                            </TouchableOpacity>
                            <View style={{ width: 10 }} />
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { }}
                                style={{ backgroundColor: colors.primary, width: 120, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection: 'row' }}>
                                <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize - 1, textTransform: 'uppercase' }}>Follow</Text>
                                <Icon name="chevron-right" style={{ color: colors.white, marginLeft: 5 }} />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ marginTop: 0, marginBottom: 20 }}>
                        {/* <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 10 }}>Followers</Text> */}
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('Followers') }}
                            activeOpacity={0.9}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <View style={{ width: 55, height: 45, marginRight: 10 }}>
                                <Image source={require('./../../../assets/images/dummy-profile-image.png')} style={{ borderWidth: 1, borderColor: '#f2f2f2', width: 45, height: 45, borderRadius: 40, marginRight: 10 }} />
                                <Image source={require('./../../../assets/images/dummy-profile-image.png')} style={{ borderWidth: 1, borderColor: '#f2f2f2', width: 43, height: 43, borderRadius: 40, marginRight: 10, zIndex: -1, position: 'absolute', top: 1, left: 8 }} />
                                <Image source={require('./../../../assets/images/dummy-profile-image.png')} style={{ borderWidth: 1, borderColor: '#f2f2f2', width: 41, height: 41, borderRadius: 40, marginRight: 10, zIndex: -2, position: 'absolute', top: 2, left: 14 }} />
                            </View>
                            <Text style={{ fontFamily: fonts.latoRegular }}>See all 782,361 Followers</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 10 }}>About Company</Text>
                        <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22 }}>{user?.about}</Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 10 }}>Company Detail</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey, width: 180 }}>No of Employees</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.black }}>{user?.noofemployees}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey, width: 180 }}>Established In</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.black }}>{user?.establishedin}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey, width: 180 }}>Current Jobs</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.black }}>5</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: colors.white, marginHorizontal: -15, padding: 15 }}>
                        <Text style={{ fontSize: (fontSize + 4), fontFamily: fonts.latoBold, marginBottom: 20 }}>Job Openings</Text>
                        {jobslist.map((item, index) => {
                            const last = 6 == index + 1 ? true : false;
                            return (<JobItem key={index} item={item} index={index} last={last} />)
                        })}
                    </View>

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

export default connect(setStateToProps, mapDispatchToProps)(CompanyProfile);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 }
})