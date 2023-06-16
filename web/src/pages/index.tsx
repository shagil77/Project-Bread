import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography, TextField, Box } from '@mui/material'
import Link from 'next/link'
import next from 'next/types'
//import { makeStyles } from '@mui/system/sty';
import { useRouter } from 'next/router'
import { styled } from '@mui/system'
import { FitScreen } from '@mui/icons-material'
//import Image from 'web/src/res/bghome.jpg';
;('use-client')

function Index() {
    // return (
    //     <AppShell>
    //         <Container maxWidth="lg" style={{ marginTop: '40px' }}>

    //         </Container>
    //     </AppShell>
    // )
    const router = useRouter()
    const [userId, setUserId] = useState('')

    //   const classes = useStyles();
    const Form = styled('form')({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    })

    const Button = styled('button')({
        maxWidth: 100,
        color: 'rgb(253, 249, 243)',
        fontWeight: 600,
        textTransform: 'uppercase',
        background: '#f03d4e',
        border: 'none',
        borderRadius: 3,
        outline: 0,
        cursor: 'pointer',
        marginTop: 0.6,
        transition: 'all 0.3s ease-out',
        type: 'submit',
    })

    const MyComponent = styled('div')({
        color: 'darkslategray',
        backgroundColor: 'aliceblue',
        background: `url('https://t3.ftcdn.net/jpg/05/72/52/56/240_F_572525689_pBHSZBd7LGeW5r5Yr5Yf8u5SueIqvUyh.jpg')`,
        backgroundSize: 'cover',
        padding: 8,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    })

    const BackgroundImage = styled('div')({
        background: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg")`,
        borderRadius: 50,
        padding: 150,
    })

    // const styles = {
    //     bgImage: {
    //         backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg")`,
    //         borderRadius: 50,
    //     },
    // }

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Add your logic for handling the form submission and authentication here
        if (true) router.push('/signin')
        else router.push('/register')
        console.log('User ID:', userId)
    }

    return (
        <MyComponent>
            <BackgroundImage>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="User ID"
                        value={userId}
                        onChange={handleUserIdChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Button type="submit">Continue</Button>
                </Form>
            </BackgroundImage>
        </MyComponent>
    )
}

export default observer(Index)
