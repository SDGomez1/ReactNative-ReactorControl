import { StyleSheet, View } from "react-native";
import { TaskItem } from "./TaskItem";
export const TaskOptions = () => {
	return (
		<View style={styles.container}>
			<TaskItem Task='Tarar Balanza' />
			<TaskItem Task='Calibrar Balanza' />
			<TaskItem Task='Dosificar Liquido' />
			<TaskItem Task='Inicia Mezcla' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 300,
		width: 320,
		alignItems: "center",
		backgroundColor: "#ffff",
		borderRadius: 10,
		marginTop: 6,
		padding: 20,
		gap: 20,
	},
});
