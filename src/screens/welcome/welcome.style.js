
import {COLORS, FONT_SIZE} from "../../constants/themes.js";
 
 export const styles ={
container:{
    backgroundColor: COLORS.leonade,
    flex: 1,
    
    
},
containerLogo:{
     flex: 2,
     backgroundColor: COLORS.leonade,
     justifyContent: "center",
     alignItems: "center"
},

logo: {
    width: 200,
    height: 200,
    borderRadius: 200,
    border: COLORS.gray1,
},
welcome: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
},
containerForm: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius:25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"  
},
text: {
    color: COLORS.gray3,
    marginBottom:60
},
button: {
    position: "absolute",
    paddingVertical: 8,
    width: "60%",
    alingSelf: "center",
    botton: "15%",
    paddingStart: "20%",
    paddingEnd: "20%"
}


}