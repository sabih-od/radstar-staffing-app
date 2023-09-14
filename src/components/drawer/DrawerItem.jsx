import { StyleSheet, Text } from "react-native";
import { colors, fonts, width } from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalstyle from "../../theme/style";
import Icon from "react-native-vector-icons/Feather";

const DrawerItem = ({ item, navigation, activescreen }) => {
    // console.log('activescreen => ', activescreen)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                if (item.param) navigation.navigate('Screens', { screen: item.nav, params: item.param });
                else navigation.navigate('Screens', { screen: item.nav });

            }}
            style={[globalstyle.draweritemrow, { borderLeftColor: activescreen == item.nav ? colors.primary : 'transparent' }]}>
            <Icon name={item.icon} style={{ color: colors.white, marginRight: 15 }} size={16} />
            <Text style={globalstyle.draweritemtext}>{item.title}</Text>
            {/* <View style={{ width: 20, height: 20, backgroundColor: colors.white, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: 10 }}>12</Text>
        </View> */}
        </TouchableOpacity>
    )
}

export default DrawerItem;

const styles = StyleSheet.create({

})