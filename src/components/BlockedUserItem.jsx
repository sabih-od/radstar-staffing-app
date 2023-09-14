import Icon from 'react-native-vector-icons/Feather';
import { colors, fonts, isIPad } from '../theme';

import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
const IMAGE_WIDTH = isIPad ? 42 : 35;
const REMOVE_ICON_WIDTH = isIPad ? 30 : 25;
const BlockedUserItem = ({ item, index, handleUnblock }) => {
    return (
        <View style={[styles.itemstyle, { backgroundColor: (index % 2 == 0) ? '#f7f7f7' : '#f1f1f1' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image
                    source={{ uri: item?.profile_picture }}
                    style={styles.userimage}
                    defaultSource={require('./../../assets/images/no-image.png')}
                />
                <Text style={styles.username}>{`${item?.first_name} ${item?.last_name}`}</Text>
            </View>
            <TouchableOpacity
                onPress={() => handleUnblock(item?.id)}
                // style={styles.unblockbtn}
                style={{ backgroundColor: colors.primary, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            >
                {/* <Icon name="x" style={{ color: colors.white, fontSize: isIPad ? 16 : 14 }} /> */}
                <Text style={{ fontFamily: fonts.latoRegular, fontSize: isIPad ? 13 : 11, color: colors.white, textTransform: 'uppercase' }}>Unblock</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BlockedUserItem;

const styles = StyleSheet.create({
    unblockbtn: { backgroundColor: colors.primary, width: REMOVE_ICON_WIDTH, height: REMOVE_ICON_WIDTH, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    username: { fontFamily: fonts.latoRegular, fontSize: isIPad ? 18 : 15 },
    userimage: { width: IMAGE_WIDTH, height: IMAGE_WIDTH, borderRadius: IMAGE_WIDTH, marginRight: 12, resizeMode: 'cover' },
    itemstyle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderRadius: 10, marginVertical: 1 }
})