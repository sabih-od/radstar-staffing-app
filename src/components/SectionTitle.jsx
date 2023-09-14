import { Text } from "react-native";
import { fontSize, fonts } from "../theme";

const SectionTitle = ({ title }) => {
    return (
        <Text style={{ fontSize: (fontSize + 5), fontFamily: fonts.latoBold, marginBottom: 10 }}>{title}</Text>
    )
}

export default SectionTitle;