import {COLORS, FONT_SIZE} from "../../constants/themes.js";
 
 export const styles ={
    costureira:{
        backgroundcolor: COLORS.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 3,
        marginBotton: 3,
        borderRadius: 6

    },
    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 20
    
    },
    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
       
    },
    icon:{
        with: 50,
        heigth: 50,
        marginRigth: 8
    }


 }
