import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography, TextField } from '@mui/material'
import { StoreContext } from '../modules/common/StoreProvider'
import { TextConstants } from '../modules/common/TextConstants'
import Link from 'next/link'
import next from 'next/types'
import { useRouter } from 'next/router'

function Index() {
    // return (
    //     <AppShell>
    //         <Container maxWidth="lg" style={{ marginTop: '40px' }}>

    //         </Container>
    //     </AppShell>
    // )
    const router = useRouter()
    const [userId, setUserId] = useState('')

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Add your logic for handling the form submission and authentication here
        router.push('/signin')
        console.log('User ID:', userId)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="User ID"
                    value={userId}
                    onChange={handleUserIdChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                <Button variant="contained" type="submit" color="primary">
                    Continue
                </Button>
            </form>
        </div>
    )
}

export default observer(Index)
