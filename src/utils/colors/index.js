const mainColors = {
    green1:'#0BCAD4',
    dark1:'#112340',
    grey1:'#7D8797',
    grey2:'#EDEEF0',
    grey3:'#B1B7C2',
    black2: 'rgba(0,0,0,0.5)',
    red1: '#E06379',
};

export const colors = { 
    primary:mainColors.green1,
    secondary:mainColors.dark1,
    button:{
        primary:{
            background:mainColors.green1,
            text:'white'
        },
        secondary:{
            background:'white',
            text:mainColors.green1
        },
        disable:{
            background:mainColors.grey2,
            text:mainColors.grey3
        }
    },
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
    },
    border:mainColors.grey1,
    loadingBackground:mainColors.black2,
    error:mainColors.red1,

};

