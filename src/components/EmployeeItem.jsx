const { TouchableOpacity, View, Image, Text } = require('react-native')
const { fonts, colors, fontSize } = require('../theme')

const EmployeeItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { }}
            style={[{ marginBottom: 10, },
            !props.last && { borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10 },
            props.index % 2 && { backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 10, marginHorizontal: -15, marginTop: -11, borderBottomColor: 'transparent' },
                // props.candidates && { backgroundColor: colors.white, padding: 10, borderBottomWidth: 0, borderRadius: 15 }
            ]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./../../assets/images/no-image.png')} style={{ width: 80, height: 80, borderRadius: 15, resizeMode: 'cover', marginRight: 10 }} />
                <View>
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 1), marginBottom: 3 }}>{props?.item?.title}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 2) }}>{props?.item?.company}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>Full Time / Permanent</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>{props?.item?.shift}</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>California</Text>
                        {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6, marginRight: 6 }}>Full Time / Permanent</Text>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.secondary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6 }}>First Shift</Text> */}
                    </View>
                </View>
            </View>
            {!props.candidates && <Text numberOfLines={2} style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.grey, marginTop: 10 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>}
        </TouchableOpacity>
    )
}

export default EmployeeItem;