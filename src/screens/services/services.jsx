import {  Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style.js";
import person from "../../assets/person.png";
import female from "../../assets/female.png";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";

function Services (props){

   const id_costureira = props.route.params.id_costureira;
   const name = props.route.params.name;
   const specialty = props.route.params.specialty;
   const iconCostureira = props.route.params.icon;

   const [costureirasServices, setCostureiraServices] = useState([]);

    function ClickService(id_service){
        props.navigation.navigate("Shedule", {
            id_costureira,
            id_service
        });
     
     }

     async function LoadServices(){
        try{
            const response = await api.get("/costureiras/" + id_costureira + "/services");
  
            if (response.data) {
                setCostureiraServices(response.data);
            }
  
        } catch (error) {
           if (error.response?.data.error)
            Alert.alert(error.response.data.error);
           else
            Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        } 
      }
  
     useEffect(() => {
        LoadServices();
     }, []);

    return <View style={styles.container}>
              
        <View style={styles.banner}>
            <Image source={iconCostureira == "M" ? person : female}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
        </View>

        <FlatList data={costureirasServices}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>{
                return <Service id_service={item.id_service}
                description={item.description}
                         price={item.price}
                         onPress={ClickService} />
                         
     
            }}
        />

     
    </View>


}

export default Services; 