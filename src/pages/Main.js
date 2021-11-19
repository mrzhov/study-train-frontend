import {Button, Stack} from "@mui/material";
import React from "react";
import {remove} from "local-storage";
import {USER_DATA} from "../lib/variables";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        remove(USER_DATA);
        navigate('/auth/login');
    }

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#eeeeee',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Button fullWidth size='large' variant='contained' onClick={() => handleLogout()}>
                Выйти
            </Button>
        </Stack>
    )
}

export default MainPage;
