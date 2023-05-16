import { StyleSheet, Text, View } from "react-native";
export const Topbar = () => {
	return (
		<View style={styles.topBar}>
			<View style={styles.topBarItem}>
				<Text>Estado</Text>
				<View style={styles.statusCircle} />
			</View>
			<View style={styles.topBarItem}>
				<Text>Desconectar</Text>
				<View></View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	topBar: {
		height: 48,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#FFFFF",
		elevation: 20,
		shadowColor: "#000",
	},
	topBarItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	statusCircle: {
		height: 7,
		width: 7,
		backgroundColor: "#3BDA03",
		borderRadius: 100,
		marginTop: 3,
	},
});
