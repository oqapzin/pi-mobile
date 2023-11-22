import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonDeputado from "../components/Button/Button";

const InitialPage = ({ navigation }) => {
    function DeputadosText() {
        return (
            <View style={styles.textContainer}>
                <Image style={styles.textImage} source={{ uri: "https://cdn.discordapp.com/attachments/1118283305628995694/1174014567471403019/image.png?ex=65660d45&is=65539845&hm=9e6c0744076f99b21a38509218297ce4739fff95dc937e3f6ab3e001ec32c3be&" }} />
                <Text style={styles.textStyle}>Deputados</Text>
            </View>
        )
    }

    function Partidostext() {
        return (
            <View style={styles.textContainer}>
                <Image style={styles.textImage} source={{ uri: "https://cdn.discordapp.com/attachments/1118283305628995694/1174014567471403019/image.png?ex=65660d45&is=65539845&hm=9e6c0744076f99b21a38509218297ce4739fff95dc937e3f6ab3e001ec32c3be&" }} />
                <Text style={styles.textStyle}>Partidos</Text>
            </View>
        )
    }

    function Eventos() {
        return (
            <View style={styles.textContainer}>
                <Image style={styles.textImage} source={{ uri: "https://cdn.discordapp.com/attachments/1118283305628995694/1174015279584522350/image.png?ex=65660dee&is=655398ee&hm=bcc7490944a7eca554cd46f79b4c375b7413412e78974a26b843b3e325915fe0&" }} />
                <Text style={styles.textStyle}>Eventos</Text>
            </View>
        )
    }

    function Proposicoes() {
        return (
            <View style={styles.textContainer}>
                <Image style={styles.textImage} source={{ uri: "https://cdn.discordapp.com/attachments/1118283305628995694/1174015279584522350/image.png?ex=65660dee&is=655398ee&hm=bcc7490944a7eca554cd46f79b4c375b7413412e78974a26b843b3e325915fe0&" }} />
                <Text style={styles.textStyle}>Proposições</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.flexDirectionRow}>

                <ButtonDeputado labelText={DeputadosText()} initialPageButton={true} usePush={false} routeName="Deputados" routeObject={{ screen: "deputados" }} navigation={navigation} />
                <ButtonDeputado labelText={Partidostext()} initialPageButton={true} usePush={false} routeName="Partidos" routeObject={{ screen: "Partidos" }} navigation={navigation} />
                <ButtonDeputado labelText={Eventos()} initialPageButton={true} usePush={false} routeName="Eventos" routeObject={{ screen: "deputados" }} navigation={navigation} />
                <ButtonDeputado labelText={Proposicoes()} initialPageButton={true} usePush={false} routeName="Proposicoes" routeObject={{ screen: "proposicoes" }} navigation={navigation} />

                <StatusBar style="auto" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65
    },

    flexDirectionRow: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },

    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000"
    },

    textImage: {
        width: 50,
        height: 30,
    }
});

export default InitialPage