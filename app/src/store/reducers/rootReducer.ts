import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    reducer:
    Auth: authReducer,
    Demographics: demoReducer,
    Profile: profileReducer,
    Connections: connectionsReducer,
    Deals: dealsReducer
}
});


export default rootReducer;