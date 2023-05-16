import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "./components/Topbar";
import { PesoTemp } from "./components/PesoTemp";
import { TaskOptions } from "./components/TaskOptions";

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style='auto' />
				<Topbar />
				<View style={styles.bodyContainer}>
					<PesoTemp />
					<View style={styles.TitleSeparator}>
						<Text style={{ fontWeight: "bold", fontSize: 20 }}>
							Controla el Reactor
						</Text>
					</View>
					<TaskOptions />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	bodyContainer: {
		flex: 1,
		backgroundColor: "#F0F5FF",
		alignItems: "center",
		padding: 16,
	},
	TitleSeparator: {
		height: 60,
		width: 320,
		justifyContent: "flex-end",
	},
});
registerRootComponent(App);
