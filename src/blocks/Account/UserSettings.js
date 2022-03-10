import React from "react";
import { StyledTextField, ActionButton } from "../../ui";
import { Box } from '../../layout'

export const UserSettings = (props) => {
    return (
        <Box maxWidth={400}>
            <StyledTextField type="text" inputLabel="First Name" />
            <StyledTextField type="text" inputLabel="Last Name" />
            <StyledTextField type="email" inputLabel="Email" />
            <StyledTextField type="password" inputLabel="Password" />
            <ActionButton last text="Update Account" />
        </Box>
    );
};
