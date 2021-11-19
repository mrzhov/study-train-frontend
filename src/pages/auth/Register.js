import {useNavigate} from "react-router-dom";
import {Card, Stack, Typography} from "@mui/material";
import RegisterForm from "../../components/pages/register/RegisterForm";

const RegisterPage = () => {
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
                <Typography variant='h5' align='center' sx={{ mb: 2 }}>Регистрация</Typography>
                <RegisterForm />
            </Card>
        </Stack>
    )
}

export default RegisterPage;
