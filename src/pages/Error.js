import {useNavigate} from "react-router-dom";

import {Box, Button, Card, Stack, Typography} from "@mui/material";
import {DEVELOPED_BY_TEXT} from "../lib/variables";
import React from "react";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
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
                }}
            >
                <Card sx={{ p: 4, maxWidth: '400px', width: '100%' }}>
                    <Typography variant='h5' align='center' sx={{ mb: 2.5 }}>Страница не существует</Typography>
                    <Button fullWidth size='large' type='submit' variant='contained' onClick={() => navigate(-1)}>
                        Вернуться
                    </Button>
                </Card>
            </Stack>
            <Stack sx={{ alignItems: 'center', px: 3, pb: 2 }}>
                <Stack>
                    <Typography variant='body2' align='center' color='#ffffff'>{DEVELOPED_BY_TEXT}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ErrorPage;
