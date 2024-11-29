import { Image, TouchableOpacity, View, Text, Props } from "react-native";
import { styles} from"./costureira.style.js";
import person from "../../assets/person.png";
import female from "../../assets/female.png";


function Costureira (Props){
    return <TouchableOpacity style={styles.costureira}
     onPress={() => Props.onPress(Props.id_costureira, Props.name,
     Props.specialty, Props.icon)}>
        <Image source={Props.icon == "M" ? person : female} style={styles.icon}/>

        <View>
           <Text style={styles.name}>{Props.name}</Text>
           <Text style={styles.specialty}>{Props.specialty}</Text>
        </View>
       </TouchableOpacity>
   
}
export default Costureira;

