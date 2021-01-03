export const initialState = {
    basket:[],
    person:null
}


const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'EMPYT_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'REMOVE_FROM_BASKET':
            // console.log(state.basket.findIndex((basketItem) =>
            // basketItem.id === action.id))
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.item.id)
            console.log(index)
            let newBAsket = [...state.basket]
            console.log(newBAsket)
            if (index >= 0) {
                newBAsket.splice(index,1)
                // console.log(newBAsket.splice(index,1))
            } else {
                console.warn(`cant remove product ${action.item.id}`)
            }
            return {
                ...state,
                basket:newBAsket
            }
        case 'SET_USER':
            return {
                ...state,
                person:action.person
            }
        default:
            return state
    }
}

export default reducer;
