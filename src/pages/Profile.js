import {Button, Card, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {get, remove} from "local-storage";
import {DEVELOPED_BY_TEXT, USER_DATA} from "../lib/variables";
import {useNavigate} from "react-router-dom";
import {deleteTicket, getUserTickets} from "../api/tickets";

const ProfilePage = () => {
    const navigate = useNavigate();

    const [tickets, setTickets] = useState(null);

    const handleLogout = () => {
        remove(USER_DATA);
        navigate('/auth/login');
    }

    const fetchUserTickets = async () => {
        const user = get(USER_DATA);
        const response = await getUserTickets({ id: user.id });
        setTickets(response);
    }

    const handleRemoveTicket = async (ticket) => {
        const user = get(USER_DATA);
        await deleteTicket({ id: user.id, ticketId: ticket.id });
        fetchUserTickets().then();
    }

    useEffect(() => {
        fetchUserTickets().then();
    }, [])

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
                spacing={3}
            >
                <Card sx={{ p: 4, maxWidth: '60vw', width: '100%' }}>
                    <Typography variant='h5' align='center' sx={{ mb: 2.5 }}>Купленные билеты</Typography>
                    <Stack spacing={2}>
                        {!tickets || !tickets.length ? (
                            <Typography variant='h6' align='center'>Нет купленных билетов.</Typography>
                        ) : tickets.map((ticket, ind) => (
                            <Stack
                                key={ind}
                                sx={{
                                    p: 2,
                                    border: '1px solid rgba(145, 158, 171, 0.32)',
                                    borderRadius: 1.5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Stack>
                                    <Typography variant='body1'>Из города: {ticket.cityFrom}</Typography>
                                    <Typography variant='body1'>В город: {ticket.cityTo}</Typography>
                                    <Typography variant='body1'>Цена: {ticket.price} руб</Typography>
                                </Stack>
                                <Stack>
                                    <Button fullWidth size='large' color='error' variant='contained' onClick={() => handleRemoveTicket(ticket)}>
                                        Вернуть билет
                                    </Button>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Card>

                <Card sx={{ p: 4, maxWidth: '700px', width: '100%' }}>
                    <Stack direction='row' spacing={2}>
                        <Button fullWidth size='large' variant='contained' onClick={() => navigate('/')}>
                            Вернуться к поиску билетов
                        </Button>
                        <Button fullWidth size='large' color='error' variant='contained' onClick={() => handleLogout()}>
                            Выйти из системы
                        </Button>
                    </Stack>
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

export default ProfilePage;
