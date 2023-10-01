import { StyleSheet, Text, View } from 'react-native';
import Houses from './screens/Houses';
import BottomTap from './components/BottomTap';
import AddReview from './screens/secondary/AddReview';
import NewConstruc from './screens/secondary/NewConstruc';
import Filters from './screens/secondary/Filters';
import MissionBay from './screens/secondary/MissionBay';
import Apartment from './screens/secondary/Apartment';

export default function App() {
    return (
        // <View style={styles.container}>
        //     <Filters />
        // </View>
        <AddReview/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 44,
    },
});
