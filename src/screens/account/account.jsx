import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./account.style.js";
import  Button  from "../../components/button/button.jsx";
import { useState } from "react";
import api from "../../constants/api.js";

function Account(props) {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  async function ExecuteAccount(){
     try{
         const response = await api.post("/users/register", {
           name,
           email,
           password
         });

         if (response.data) {
           console.log(response.data);
         }

     } catch (error) {
        if (error.response?.data.error)
         Alert.alert(error.response.data.error);
        else
         Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
     } 
   }

    return <View style={styles.container}>
       
       <View style={styles.containerLogo}>
       <Image source={logo} style={styles.logo}/>
       </View>
       
       <View>
       <View style={styles.containerInput}>
          <TextInput placeholder="Nome" style={styles.input} 
          onChangeText={(texto) => setName(texto)} />
        </View>
        <View style={styles.containerInput}>
          <TextInput placeholder="E-mail" style={styles.input} 
          onChangeText={(texto) => setEmail(texto)} />
        </View>
        <View style={styles.containerInput}>
          <TextInput placeholder="Senha" style={styles.input} 
           secureTextEntry={true}
           onChangeText={(texto) => setPassword(texto)} />
        </View>
          <Button text="Criar conta" onPress={ExecuteAccount} />
       </View>

      <View style={styles.footer}>
         <Text>Já tenho conta.</Text>
         <TouchableOpacity  onPress={() => props.navigation.goBack()}>
            <Text style={styles.footerLink}>Fazer login.</Text>
         </TouchableOpacity>
      </View>

    </View>


}

export default Account;
