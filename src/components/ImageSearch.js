import React from "react";
import { useState } from "react";
import axios from 'axios';

import { Button, Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';


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
                    <TextField id="outlined-basic" label="Search for Image" sx={{ width: '50%' }} variant="outlined"
                    onChange={(e) => {
                        setPhoto(e.target.value)
                    }} />

                    <Button variant="contained" color="primary" sx={{ m: 'auto' }} align="center" size="large" 
                    style={{fontSize: 15, marginTop: 20, textTransform: "none"}} onClick={changePhoto}>
                        Get Photo
                    </Button>

                </Grid>

            </Box>
            <ImageList sx={{ width: '80%', ml: '10%' }} cols={3} >
                {result && result.map((value) => (
                    <ImageListItem key={value.id} sx={ {border: 1, borderColor: 'grey.500', borderRadius: '10px',  overflow: 'hidden', m: 1} }>
                    <img
                        src={`${value.urls.small}?w=164&h=164&fit=crop&auto=format`}
                        alt={value.title}
                        loading="lazy"
                    />
                        <Grid container alignItems="center" sx={{ justifyContent: 'space-between', mt: 2, mb: 2 }}>
                            
                            <Typography variant="h6" m="0" ml="4%" gutterBottom> Likes: {value.likes} </Typography>
                            <a href={value.links.download} download target='_blank' style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="secondary" align="center" size="large" 
                                style={{fontSize: 15, marginRight: 20, textTransform: "none"}} onClick={changePhoto}>
                                    View
                                </Button>
                            </a>
                        </Grid>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default ImageSearch;