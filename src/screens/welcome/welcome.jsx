import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./welcome.style.js";
import  Button  from "../../components/button/button.jsx";
import * as Animatable from "react-native-animatable"
 

function Welcome() {
    return ( <View style={styles.container}>
     
       <View style={styles.containerLogo}>
       <Animatable.Image source={logo} style={styles.logo}
       animation="flipInY"
       />
       </View>


       <Animatable.View  delay={600} animation="fadeInUp" style={styles.containerForm}>
       <Text style={styles.welcome}>Vista-se com elegância em todos os lugares onde você for.</Text>
       <Text style={styles.text}>Faça o login para começar</Text>
         <Button style={styles.button} text="Acessar"/>
       </Animatable.View>

        </View>

    );
}

export default Welcome;