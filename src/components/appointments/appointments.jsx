import { Image, Text, View } from "react-native";
import { styles } from "./appointments.style.js";
import calendar from "../../assets/calendar.png";
import schedule from "../../assets/schedule.png";
import  Button  from "../../components/button/button.jsx";

function Appointment(props){

      const dt = new Date(props.bookingDate + "T" + props.bookingHour);

    return <View style={styles.appointment}>
        <Text style={styles.name}>{props.service} - {props.costureira}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
      
    <View style={styles.container}>
        
        <View style={styles.containerBooking}>

            <View style={styles.booking}>
                <Image style={styles.icon}
                 source={calendar}/>
                <Text style={styles.bookingDate}>
                    {dt.toLocaleDateString()}
                    </Text>
            </View>

            <View style={styles.booking}>
            <Image style={styles.icon} 
            source={schedule}/>
            <Text style={styles.bookingHour}>
            {props.bookingHour}h
            </Text>
            </View>

        </View>
     
        <View styles={styles.containerButton}>
            <Button text="Cancelar Encomendas" theme="danger"
            onPress={() => props.onPress(props.id_appointment)}/>
        </View>

    </View>



    </View>

}

export default Appointment;
