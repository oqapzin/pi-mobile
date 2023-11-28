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
                <Image style={{ width: 50,height: 20}} source={{ uri: "https://cdn.discordapp.com/attachments/709700314793639940/1179147241257181264/7C7B4FFD-9450-46B4-99B4-17BE07B4744C.png?ex=6578b971&is=65664471&hm=8ed28e9ee474c3ef1b4c605fe5402a370197a7f974e38a2542e1d31c1b19e9ac&" }} />
                <Text style={styles.textStyle}>Partidos</Text>
            </View>
        )
    }

    function Eventos() {
        return (
            <View style={styles.textContainer}>
                <Image style={styles.textImage} source={{ uri: "https://cdn.discordapp.com/attachments/709700314793639940/1179147240607068170/9BE3515C-D1DA-41D3-8051-FC2EF55C08D8.png?ex=6578b971&is=65664471&hm=7b46b765158c94cd26eecaadc3b3f3ac8d3c13eda4769948d85b8032c0add47a&" }} />
                <Text style={styles.textStyle}>Eventos</Text>
            </View>
        )
    }

    function Proposicoes() {
        return (
            <View style={styles.textContainer}>
                <Image style={{ width: 30,height: 30}} source={{ uri: "https://media.discordapp.net/attachments/709700314793639940/1179147240883896320/3E3DF6D9-6571-41E1-B3B4-2C516FF9463C.png?ex=6578b971&is=65664471&hm=7ba1020549932d7f71c655d1e109f614e65081a5c52ab3c2ce7528f59ba25b18&=&format=webp&quality=lossless" }} />
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