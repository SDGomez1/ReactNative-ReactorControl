import { StyleSheet, Text, View } from "react-native";

export const PesoTemp = () => {
	return (
		<View style={styles.PesoContainer}>
			<View
				style={[
					styles.infoDisplay,
					{ borderRightColor: "#000", borderRightWidth: 1 },
				]}
			>
				<Text style={{ fontWeight: "bold" }}>Peso Actual</Text>
				<Text>50.4 g</Text>
			</View>
			<View style={styles.infoDisplay}>
				<Text style={{ fontWeight: "bold" }}> Temperatura Actual</Text>
				<Text>25.4 C</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	PesoContainer: {
		width: 320,
		height: 124,
		backgroundColor: "#fff",
		flexDirection: "row",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	infoDisplay: {
		width: "50%",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
