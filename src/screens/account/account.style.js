import {COLORS, FONT_SIZE} from "../../constants/themes.js";
 
 export const styles ={
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 80,
        justifyContent: "space-between"
    },
    containerLogo:{
         alignItems: "center",
    },

    logo: {
        with: 100,
        height: 200
    },
    containerInput: {
        marginBottom:15
    },
    input:{
        backgroundColor: COLORS.gray4,
        padding:10,
        borderRadius:6,

    },
       footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    
    },
    footerLink: {
        color: COLORS.rosa
    }

 }