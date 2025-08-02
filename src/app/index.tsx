import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import DayListItem from '../../src/core/components/DayListItem';

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

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <FlatList
                data={daysArray}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                renderItem={ ({ item }) => <DayListItem day={item} /> }
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },
});
