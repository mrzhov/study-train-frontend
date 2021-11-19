import {useNavigate} from "react-router-dom";

import {Box} from "@mui/material";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <p>Страница не существует</p>
            <button onClick={() => navigate(-1)}>Вернуться</button>
        </Box>
    )
}

export default ErrorPage;
