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
import moment from "moment";
import SectionTitle from "../../components/SectionTitle";

const DetailItems = ({ title, value }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey, width: 140 }}>{title}</Text>
            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.black, width: width - 160 }}>{value}</Text>
        </View>
    )
}

const JobDetail = (props) => {
    const item = props?.route?.params?.item;
    console.log('item => ', item)

    useEffect(() => {
        // console.log('props => ', props)
        // props.navigation.setOptions({ headerTitle: props.route.params.item?.title });
    }, [])

    return (
        <SafeAreaView style={globalstyle.fullview}>
            <ScrollView style={{ paddingHorizontal: 15 }} showsVerticalScrollIndicator={false}>

                <View style={{ backgroundColor: colors.white, paddingVertical: 20, paddingHorizontal: 18, width: width, marginLeft: -15, marginBottom: 15, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('./../../../assets/images/no-image.png')} style={{ width: 65, height: 65, resizeMode: 'cover', borderRadius: 15, marginRight: 13 }} />
                        <View>
                            <Text style={{ fontSize: (fontSize + 5), fontFamily: fonts.latoBold, marginBottom: 3, color: colors.black }}>{item?.title}</Text>
                            <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey }}>{item?.company}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), marginBottom: 4 }}>Posted Date {moment(parseInt(item?.last_updated)).format("MMM DD, YYYY")}</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1) }}>Monthly <Text style={{ fontFamily: fonts.latoBold }}>{parseInt(59000).toLocaleString()} - {parseInt(100000).toLocaleString()} USD</Text></Text>
                        </View>
                    </View>


                </View>

                <View style={{ marginBottom: 10 }}>
                    <SectionTitle title={"Job Detail"} />
                    <DetailItems title="Location" value="Alabaster, Alabama, USA" />
                    <DetailItems title="Type" value="Full Time/Permanent" />
                    <DetailItems title="Shift" value={item?.shift} />
                    <DetailItems title="Career Level" value="Experienced Professional" />
                    <DetailItems title="No of Positions" value={item?.position} />
                    <DetailItems title="Experience" value="3 - 5 Years" />
                    <DetailItems title="Gender" value="Male" />
                    <DetailItems title="Degree" value="Masters" />
                    <DetailItems title="Apply Before" value={(new Date()).getTime() < item?.expired_date ? moment(parseInt(item?.expired_date)).format("MMM DD, YYYY") : `Expired - ${moment(parseInt(item?.expired_date)).format("MMM DD, YYYY")}`} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, marginBottom: 20 }}>
                    <TouchableOpacity
                        disabled={(new Date()).getTime() > item?.expired_date}
                        activeOpacity={0.8}
                        onPress={() => { }}
                        style={{ backgroundColor: colors.primary, width: 120, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection: 'row', marginRight: 7, opacity: (new Date()).getTime() > item?.expired_date ? 0.57 : 1 }}>
                        <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize - 2, textTransform: 'uppercase' }}>Apply now</Text>
                        <Icon name="check-circle" style={{ color: colors.white, marginLeft: 5, fontSize: 13 }} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { }}
                        style={{ backgroundColor: colors.grey, width: 80, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection: 'row', marginRight: 7 }}>
                        <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize - 2, textTransform: 'uppercase' }}>Save</Text>
                        <Icon name="bookmark" style={{ color: colors.white, marginLeft: 5, fontSize: 13 }} />
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { }}
                        style={{ backgroundColor: '#e01010', width: 130, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection: 'row' }}>
                        <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize - 2, textTransform: 'uppercase' }}>Report Abuse</Text>
                        <Icon name="alert-circle" style={{ color: colors.white, marginLeft: 5, fontSize: 13 }} />
                    </TouchableOpacity> */}
                </View>

                <View style={{ marginBottom: 0, backgroundColor: colors.white, padding: 15, marginHorizontal: -15 }}>
                    <SectionTitle title={"Job Description"} />
                    <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22 }}>{item.description}</Text>
                </View>

                <View style={{ marginBottom: 0, padding: 15, paddingBottom: 5, marginHorizontal: -15 }}>
                    <SectionTitle title={"Benefits"} />
                    <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22 }}>{item.description}</Text>
                </View>

                <View style={{ marginBottom: -15, padding: 15, marginHorizontal: -15 }}>
                    <SectionTitle title={"Skills Required"} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                            <Text style={styles.tagstext}>{'Cold Calling'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                            <Text style={styles.tagstext}>{'Communication'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                            <Text style={styles.tagstext}>{'Technician'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                            <Text style={styles.tagstext}>{'Communication'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                            <Text style={styles.tagstext}>{'Laboratory'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 1, width: '100%', backgroundColor: '#ddd', marginVertical: 15 }} />
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ backgroundColor: colors.primary, borderRadius: 15, padding: 20, width: '48%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: colors.white, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                                <Icon name="clock" style={{ color: colors.primary, fontSize: fontSize + 10 }} />
                            </View>
                            <Text style={{ fontFamily: fonts.latoBlack, fontSize: fontSize * 2, color: colors.white }}>426</Text>
                        </View>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize + 3, color: colors.white, marginTop: 15 }}>Open Jobs</Text>
                    </View>
                    <View style={{ backgroundColor: colors.primary, borderRadius: 15, padding: 20, width: '48%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: colors.white, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                                <Icon name="clock" style={{ color: colors.primary, fontSize: fontSize + 10 }} />
                            </View>
                            <Text style={{ fontFamily: fonts.latoBlack, fontSize: fontSize * 2, color: colors.white }}>312,431</Text>
                        </View>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize + 3, color: colors.white, marginTop: 15 }}>Open Jobs</Text>
                    </View>
                </View> */}
                <View style={{ marginBottom: 20, }}>
                    <SectionTitle title={"Related Jobs"} />
                    {jobslist.map((item, index) => {
                        // console.log('index => ', index)
                        const last = 6 == index + 1 ? true : false;
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

export default connect(setStateToProps, mapDispatchToProps)(JobDetail);

const styles = StyleSheet.create({
    flexrow: { flexDirection: 'row', justifyContent: 'space-between' },
    inputwithlabel: { marginBottom: 10 },

    tags: { backgroundColor: '#e1e1e1', paddingHorizontal: 12, paddingVertical: 3, marginRight: 8, borderRadius: 10, marginBottom: 8 },
    tagstext: { fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22, fontSize: (fontSize - 1) }
})