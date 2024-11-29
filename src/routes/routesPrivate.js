import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS} from "../constants/themes.js";

import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Shedule from "../screens/shedule/shedule.jsx";


const Stack = createNativeStackNavigator();

function RoutesPrivate(){
   return <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
      options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Services" component={Services}
      options={{
        headerTitle: "Serviços",
        headerTitleAlign:"center",
        headerShadowVisible:false,
        headerTintColor: COLORS.white,
        headerStyle:{
            backgroundColor:COLORS.leonade
        }
      }}/>
      <Stack.Screen name="Shedule" component={Shedule}
      options={{
        headerTitle: "Fazer uma encomenda",
        headerTitleAlign:"center",
        headerShadowVisible:false,
        headerTintColor: COLORS.white,
        headerStyle:{
            backgroundColor:COLORS.leonade
        }
      }}/>
     </Stack.Navigator>;

}

export default RoutesPrivate;