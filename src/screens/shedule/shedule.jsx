import { View, Text } from "react-native";
import { styles, Styles} from "./shedule.style.js"
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import  Button  from "../../components/button/button.jsx";


LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Shedule (){


    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");


    return <View style={styles.container}>
           <View>
           <Calendar theme={styles.theme}
              onDayPress={(day) =>{
                setSelectedDate(day.dateString)
              }}
           
               markedDates={{
                [selectedDate] : { selected:true }
               }}

               minDate={new Date().toDateString()}

           />

           <View>
            <Text style={styles.textHour}>Horário</Text>
           </View>
           
            <Picker selectedValue={selectedHour}
            onValueChange={(itemValue, itemIndex) =>{
                setSelectedHour(itemValue)
            }}
            >
                <Picker.Item label="09:00" value="09:00"/>
                <Picker.Item label="09:30" value="09:30"/>
                <Picker.Item label="10:00" value="10:00"/>
            </Picker>

            </View>
            <View>
                <Button text="Confirmar Encomenda"/>
            </View>
    </View>

}

export default Shedule; 