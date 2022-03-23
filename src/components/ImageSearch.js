import React from "react";
import { useState } from "react";
import axios from 'axios';

import { Button, Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageSearch = () => {
    
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () =>{
        axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${photo}&client_id=IK4C1RHo7DIvID5H4ellC285eOo-035scz_uD8Y06IU`)
            .then((res)=> {
                console.log(res.data);
                setResult(res.data.results);
            })
    }
    return(
        <>
            <Box m={5}>
                <Grid container direction="column" alignItems="center" justify="center">
                    <TextField id="outlined-basic" label="Search for Image" fullWidth={true} variant="outlined"
                    onChange={(e) => {
                        setPhoto(e.target.value)
                    }} />

                    <Button variant="contained" color="primary" sx={{ m: 'auto' }} align="center" size="large" 
                    style={{fontSize: 15, marginTop: 20, textTransform: "none"}} onClick={changePhoto}>
                        Get Photo
                    </Button>

                </Grid>

            </Box>
            <ImageList sx={{ width: 'auto' }} cols={3} >
                {result && result.map((value) => (
                    <ImageListItem key={value.id}>
                    <img
                        src={`${value.urls.small}?w=164&h=164&fit=crop&auto=format`}
                        alt={value.title}
                        loading="lazy"
                    />
                    <h2>Likes: {value.likes}</h2>
                        <a href={value.links.download} download target='_blank' style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="secondary" sx={{ m: 'auto' }} align="center" size="large" 
                        style={{fontSize: 15, marginTop: 20, textTransform: "none"}} onClick={changePhoto}>
                            View
                        </Button>
                    </a>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default ImageSearch;