import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import DayListItem from './src/core/components/DayListItem';
import { AmaticSC_400Regular, AmaticSC_700Bold, useFonts } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const date = new Date();
const year = date.getFullYear();

// inicia no mês atual. 0=janeiro, 1=fevereiro
const month = date.getMonth();

// Ano, mes, dia. mes+1 leva pro mes seguinte, dia 0 é o dia anterior ao primeiro dia do mes seguinte.
const daysInMonth = new Date(year, month + 1, 0).getDate();

// O primeiro argumento (_) é o valor atual, que não usamos (por isso usamos _, uma convenção).
// O segundo argumento (i) é o índice, que vai de 0 até daysInMonth - 1.
// i + 1 faz com que os dias comecem em 1 ao invés de 0.
const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

export default function App() {
	const [loaded, error] = useFonts({
		Amatic: AmaticSC_400Regular,
		AmaticBold: AmaticSC_700Bold,
	});

	useEffect(() => {
		if(loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if(!loaded && !error) {
		return null;
	}

	return (
		<View style={styles.container}>

			<FlatList
				data={daysArray}
				contentContainerStyle={styles.content}
				columnWrapperStyle={styles.column}
				numColumns={3}
				renderItem={ ({ item }) => <DayListItem day={item} /> }
				//horizontal
				style={styles.flatlist}
			/>

			{/*daysArray.map(day => (
				<View style={styles.box} key={day}>
					<Text style={styles.text}>{day}</Text>
				</View>
			))*/}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',

		gap: 10,
	},

	content: {
		gap: 10,
	},
	column: {
		gap: 10,
	},

	flatlist: {
		marginTop: 70,
	}
});
