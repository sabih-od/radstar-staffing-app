import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from './../theme';
import Icon from 'react-native-vector-icons/Feather';
import countries from './../data/countries';
import { SafeAreaView } from 'react-native-safe-area-context';

const genderslist = [
    { id: 1, title: 'Male' },
    { id: 2, title: 'Female' }
]

const SelectBottomSheet = (props, ref) => {
    console.log('SelectBottomSheet props => ', props)
    console.log('SelectBottomSheet ref => ', ref)

    const [list, setList] = useState([]);
    const { _handleSelect, setChildRef } = props;
    useEffect(() => {
        console.log('SelectBottomSheet useEffect props => ', props)
        if (props.list == 'gender') setList(genderslist)
        if (props.list == 'country') setList(countries)
    }, [props.list])

    useEffect(() => {
        console.log('SelectBottomSheet useEffect props => ', props)
    }, [props.selecteditem])

    // hooks
    const bottomSheetRef = useRef(null);
    setChildRef(bottomSheetRef)


    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
            />
        ),
        []
    );

    // variables
    // const data = useMemo(
    //     () =>
    //         Array(50)
    //             .fill(0)
    //             .map((_, index) => `index-${index}`),
    //     []
    // );
    const snapPoints = useMemo(() => ["1%", "90%"], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    // render
    const renderItem = useCallback(
        (item) => (
            <View key={item} style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        []
    );


    // renders
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity
        //         onPress={() => handleSnapPress(1)}
        //         activeOpacity={0.8}
        //         style={{ backgroundColor: colors.white, paddingVertical: 15, borderRadius: 10, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        //     >
        //         <Text style={{ color: colors.black, fontFamily: fonts.latoRegular, }}>Select Country</Text>
        //         <Icon name="chevron-down" />
        //     </TouchableOpacity>
        <BottomSheetModal
            ref={bottomSheetRef}
            index={1}
            // enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            onChange={(index => props.handleSheetChanges(index))}
        >
            <View style={{ marginHorizontal: 15, marginBottom: 10, backgroundColor: '#f7f7f7', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15 }}>
                <TextInput
                    placeholder='Search Here...'
                    style={{ paddingHorizontal: 15, paddingVertical: 13, borderRadius: 15 }}
                />
                <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}><Icon name="search" style={{ color: '#888', fontSize: 16 }} /></View>
            </View>
            <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                {list && list.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            props.handleSelect(item);
                            bottomSheetRef.current?.close();
                        }}
                        activeOpacity={0.8}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingVertical: 13, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                        <Icon name={item.id == props?.selecteditem?.id ? "check-circle" : "circle"} style={{ color: item.id == props?.selecteditem?.id ? colors.primary : '#999', marginRight: 13, fontSize: 16 }} />
                        <Text style={{ fontFamily: fonts.latoRegular }}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </BottomSheetScrollView>
        </BottomSheetModal >
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
});

export default SelectBottomSheet;