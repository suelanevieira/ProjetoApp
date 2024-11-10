import { FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import { costureiras } from "../../constants/data.js";
import Costureira from "../../components/costureira/costureira.jsx";
import person from "../../assets/person.png";
import female from "../../assets/female.png";



function AbaHome(){
    return <View style={styles.container}>
         <Text style={styles.text}>Agende as suas encomendas</Text>

        <FlatList data={costureiras}
            keyExtractor={(doc) => doc.id_costureira}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>{
                return <Costureira name={item.name} style={{ width: 10, heigth: 10}}
                icon={item.icon == "M" ? person : female}
                specialty={item.specialty}
                /> 
     
            }}
        />

     
    </View>


}

export default AbaHome; 