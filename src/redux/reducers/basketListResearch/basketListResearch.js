

const initialState={
    listResearch:[]
}
export function ListBasket(state=initialState,action){
    switch(action.type){
        case "BASKET_LIST_RESEARCH":
            return{
                listResearch:[...action.payload]
            }
        default:
            return state;
    }
}