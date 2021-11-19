import {Button, Card, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {get} from "local-storage";
import {useNavigate} from "react-router-dom";
import {DEVELOPED_BY_TEXT, USER_DATA} from "../lib/variables";
import SearchTicketsForm from "../components/pages/main/SearchTicketsForm";
import {buyTicket} from "../api/tickets";

const MainPage = () => {
    const navigate = useNavigate();

    const [tickets, setTickets] = useState(null);

    const handleBuyTicket = async (ticket) => {
        const user = get(USER_DATA);
        if (user) {
            await buyTicket({ id: user.id, data: ticket });
            setTickets(null);
        } else alert('Не удалось купить билет, перезайдите в систему')
    }

    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                // backgroundColor: '#eeeeee',
            }}
        >
            <Stack sx={{ alignItems: 'flex-end', px: 3, py: 2 }}>
                <Stack>
                    <Button fullWidth size='large' type='submit' variant='contained' onClick={() => navigate('/profile')}>
                        Личный кабинет
                    </Button>
                </Stack>
            </Stack>
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
                    <Typography variant='h5' align='center' sx={{ mb: 2.5 }}>Поиск билетов</Typography>
                    <SearchTicketsForm setTickets={setTickets} />
                </Card>
                {tickets && (
                    <Card sx={{ p: 4, maxWidth: '60vw', width: '100%' }}>
                        {!tickets.length ? (
                            <Typography variant='h6' align='center'>Билеты не найдены, попробуйте еще раз.</Typography>
                        ) : (
                            <>
                                <Typography variant='h5' align='center' sx={{ mb: 2.5 }}>Найденные билеты</Typography>
                                <Stack spacing={2}>
                                    {tickets.map((ticket, ind) => (
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
                                                <Button fullWidth size='large' type='submit' variant='contained' onClick={() => handleBuyTicket(ticket)}>
                                                    Купить
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>
                            </>
                        )}
                    </Card>
                )}
            </Stack>
            <Stack sx={{ alignItems: 'center', px: 3, pb: 2 }}>
                <Stack>
                    <Typography variant='body2' align='center' color='#ffffff'>{DEVELOPED_BY_TEXT}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MainPage;
