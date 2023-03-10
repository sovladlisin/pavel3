import { combineReducers } from "redux";
import alertReducer from "./alerts/alerts";
import imagesReducer from "./images/images";
import paulReducer from "./paulactions/paulactions";



const RootReducer = combineReducers({
    alerts: alertReducer,
    paul: paulReducer,
    images: imagesReducer
});

export default RootReducer