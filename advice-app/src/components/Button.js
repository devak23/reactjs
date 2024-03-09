import "./button.css";
import {BUTTON_TYPES} from "../data/buttonConstants";

const Button = ({type, label, onBtnClick, icon, iconPosition}) => {
    const getButtonClass = () => {
        switch (type) {
            case BUTTON_TYPES.PRIMARY: return "primaryBtn button";
            case BUTTON_TYPES.SECONDARY: return "secondaryBtn button";
            case BUTTON_TYPES.TERTIARY: return "tertiaryBtn button";
        }
    }
    return (
        <div
            className={`${getButtonClass()}`}
            onClick={onBtnClick ? onBtnClick : () => "No action!"}>
            {icon && iconPosition === "LEFT" && icon}
            {label}
            {icon && iconPosition === "RIGHT" && icon}
        </div>
    );
}

export default Button;