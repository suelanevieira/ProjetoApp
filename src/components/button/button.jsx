import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

function TesteClick(){
    Alert.alert("clicou no nosso botão");
}

        return <TouchableOpacity onPress={TesteClick} style={styles.bnt}>
      <Text style={styles.text}>
        
        {props.text}</Text>
    </TouchableOpacity>

}

export default Button; 