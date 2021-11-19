import {Card, Stack, Typography} from "@mui/material";
import RegisterForm from "../../components/pages/register/RegisterForm";
import React from "react";
import {DEVELOPED_BY_TEXT} from "../../lib/variables";

const RegisterPage = () => (
    <Stack
        sx={{
            width: '100%',
            height: '100%',
            // backgroundColor: '#eeeeee',
        }}
    >
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Card sx={{ p: 4, maxWidth: '450px', width: '100%' }}>
                <Typography variant='h5' align='center' sx={{ mb: 2 }}>Регистрация</Typography>
                <RegisterForm />
            </Card>
        </Stack>
        <Stack sx={{ alignItems: 'center', px: 3, pb: 2 }}>
            <Stack>
                <Typography variant='body2' align='center' color='#ffffff'>{DEVELOPED_BY_TEXT}</Typography>
            </Stack>
        </Stack>
    </Stack>
)

export default RegisterPage;
