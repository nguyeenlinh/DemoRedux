
const initState = [];
const rootReduce = (state = initState, action) => {
    // console.log(action);
    // console.log(action.payload);
    const a = action.payload;
    switch(action.type){
        case 'capnhat' :
            return [
                ...state,
                a
            ]
               
                
            
        default:
            return state;
    }
}

export default rootReduce;