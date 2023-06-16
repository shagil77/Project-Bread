import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import AppShell from '../modules/common/AppShell'
import { Button, Container, Typography, TextField } from '@mui/material'
import { StoreContext } from '../modules/common/StoreProvider'
import { TextConstants } from '../modules/common/TextConstants'
import Link from 'next/link'
import next from 'next/types'

function Index() {
    // return (
    //     <AppShell>
    //         <Container maxWidth="lg" style={{ marginTop: '40px' }}>

    //         </Container>
    //     </AppShell>
    // )
    const [userId, setUserId] = useState('')

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Add your logic for handling the form submission and authentication here

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
                <Link href="/signin">Sign In</Link>
                {/* <Button variant="contained" type="submit" color="primary">
                    Sign In
                </Button> */}
            </form>
        </div>
    )
}

export default observer(Index)
