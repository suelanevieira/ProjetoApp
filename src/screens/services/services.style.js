import {COLORS, FONT_SIZE} from "../../constants/themes.js";
 
 export const styles ={
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        //justifyContent: "space-between"
    },
    banner: {
         backgroundColor: COLORS.leonade,
         justifyContent: "center",
         alignItems: "center",
         paddingTop: 30,
         paddingBottom: 25

    },
    text:{
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bolt",
        marginTop: 5

    },
    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3

    }



 }