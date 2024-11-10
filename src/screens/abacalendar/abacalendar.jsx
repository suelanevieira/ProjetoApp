import { FlatList, Text, View } from "react-native";
import { styles } from "./abacalendar.style.js";
import { appointments } from "../../constants/data.js";
import person from "../../assets/person.png";
import female from "../../assets/female.png";
import Appointment from "../../components/appointments/appointments.jsx";



function AbaCalendar(){
    return <View style={styles.container}>
        

        <FlatList data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>{
                return < Appointment service={item.service}
                    costureira={item.costureira}
                    specialty={item.specialty}/>
     
            }}
        />

     
    </View>


}

export default AbaCalendar; 