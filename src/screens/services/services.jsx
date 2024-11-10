import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style.js";
import { costureiras_services } from "../../constants/data.js";
import person from "../../assets/person.png";
import female from "../../assets/female.png";
import Service from "../../components/service/service.jsx";


function Services (){
    return <View style={styles.container}>
              
        <View style={styles.banner}>
            <Image source={female}/>
            <Text style={styles.text}>Suelane</Text>
            <Text style={styles.specialty}>Vestidos</Text>
        </View>

        <FlatList data={costureiras_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>{
                return <Service description={item.description}
                         price={item.price}/>
                
     
            }}
        />

     
    </View>


}

export default Services; 