import { StyleSheet, Text, View } from "react-native";

export const TaskItem = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "#fff", fontWeight: "bold" }}>{props.Task}</Text>
			<Text style={{ color: "#fff", fontWeight: "bold", marginBottom: 2 }}>
				→
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 40,
		flexDirection: "row",
		backgroundColor: "#3869E7",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 12,
		paddingRight: 12,
	},
});
