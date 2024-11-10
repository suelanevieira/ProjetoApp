import { Image, TouchableOpacity, View, Text, Props } from "react-native";
import { styles} from"./costureira.style.js";


function Costureira (Props){
    return <TouchableOpacity style={styles.costureira}>
        <Image source={Props.icon} style={styles.icon}/>

        <View>
           <Text style={styles.name}>{Props.name}</Text>
           <Text style={styles.specialty}>{Props.specialty}</Text>
        </View>
       </TouchableOpacity>
   
}
export default Costureira;

