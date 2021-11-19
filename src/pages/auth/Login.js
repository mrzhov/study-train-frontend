import {useNavigate} from "react-router-dom";
import {Box, Card, Stack, Typography} from "@mui/material";
import LoginForm from "../../components/pages/login/LoginForm";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#eeeeee',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Card sx={{ p: 4, maxWidth: '450px', width: '100%' }}>
                <Typography variant='h5' align='center' sx={{ mb: 2 }}>Войти</Typography>
                <LoginForm />
            </Card>
        </Stack>
    )
}

export default LoginPage;
