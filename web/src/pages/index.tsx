import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography, TextField } from '@mui/material'
import Link from 'next/link'
import next from 'next/types'
//import { makeStyles } from '@mui/system/sty';
import { useRouter } from 'next/router'
import { styled } from '@mui/system'
import axios from 'axios'
import { error } from 'console'
//import Image from 'web/src/res/bghome.jpg';

function Index() {
    // return (
    //     <AppShell>
    //         <Container maxWidth="lg" style={{ marginTop: '40px' }}>

    //         </Container>
    //     </AppShell>
    // )
    const router = useRouter()
    const [userId, setUserId] = useState('')

    // const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
    //     root: {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       height: '100vh',
    //     },
    //     form: {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       gap: theme.spacing(2),
    //     },
    //     button: {
    //       marginTop: theme.spacing(2),
    //     },
    //   }));

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
        padding: 8,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    })

    // const BackgroundImage = styled('div')({
    //     background: `url(${'./res/bghome.jpg'})`,
    //     borderRadius: 50,
    // })

    const styles = {
        bgImage: {
            background: `url(${'./res/bghome.jpg'})`,
            borderRadius: 50,
        },
    }

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Add your logic for handling the form submission and authentication here
        try {
            const getUser = await axios.get("/api/user/"+userId)

            if(getUser) router.push(`/signin?param=${userId}`)
        } catch(e:any) {
            console.log('User ID:', userId)
            if(e.response && e.response.status==404) {
                router.push('/register')
            }
        }
    }

    return (
        <MyComponent>
            <div style={styles.bgImage}>
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
            </div>
        </MyComponent>
    )
}

export default observer(Index)
