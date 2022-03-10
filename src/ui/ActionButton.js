import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const ActionButton = (props) => {
    const theme = useContext(ThemeProvider);
    return (
        <Button style={{
            color: theme.textColor,
            backgroundColor: props.secondary ? theme.secondaryActionColor : theme.primaryActionColor,
            borderRadius: theme.borderRadius,
            marginTop: props.last ? theme.margins * 2 : 0
        }}>{props.text}</Button>
    );
};
