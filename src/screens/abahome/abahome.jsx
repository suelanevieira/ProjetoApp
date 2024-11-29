import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import Costureira from "../../components/costureira/costureira.jsx";
import person from "../../assets/person.png";
import female from "../../assets/female.png";
import { Navigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";


function AbaHome(Props){

    const [costureiras, setCostureiras] = useState([]);
 
function ClickCostureira(id_costureira, name, specialty, icon) {
    Props.navigation.navigate("Services", {
        id_costureira,
        name, 
        specialty, 
        icon
    });


}



async function LoadCostureiras(){
    try{
        const response = await api.get("/costureiras/");

        if (response.data) {
            setCostureiras(response.data);
        }

    } catch (error) {
       if (error.response?.data.error)
        Alert.alert(error.response.data.error);
       else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    } 
  }
    



        
 useEffect(() => {
    LoadCostureiras();
 }, []);


    return <View style={styles.container}>
         <Text style={styles.text}>Agende as suas encomendas</Text>

        <FlatList data={costureiras}
            keyExtractor={(doc) => doc.id_costureira}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>{
                return <Costureira
                id_costureira={item.id_costureira}
                name={item.name}
                icon={item.icon}  // M ou F
                specialty={item.specialty}
                onPress={ClickCostureira}
                /> 
     
            }}
        />

     
    </View>


}

export default AbaHome; 