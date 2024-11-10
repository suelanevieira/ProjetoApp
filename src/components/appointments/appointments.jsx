import { Image, Text, View } from "react-native";
import { styles } from "./appointments.style.js";
import calendar from "../../assets/calendar.png";
import schedule from "../../assets/schedule.png";
import  Button  from "../../components/button/button.jsx";

function Appointment(Props){
    return <View style={styles.appointment}>
        <Text style={styles.name}>{Props.service} - {Props.costureira}</Text>
        <Text style={styles.specialty}>{Props.specialty}</Text>
      
    <View style={styles.container}>
        
        <View style={styles.containerBooking}>

            <View style={styles.booking}>
                <Image style={styles.icon}
                 source={calendar}/>
                <Text style={styles.bookingDate}>
                    15/10/2024
                    </Text>
            </View>

            <View style={styles.booking}>
            <Image style={styles.icon} 
            source={schedule}/>
            <Text style={styles.bookingHour}
            >08:30h</Text>
            </View>

        </View>
     
        <View styles={styles.containerButton}>
            <Button text="Cancelar Encomendas" theme="danger"/>
        </View>

    </View>



    </View>

}

export default Appointment;
