import React from "react";
import { useState } from "react";
import axios from 'axios';

import { Button, Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';

import ImageList from '@mui/material/ImageList';

import ImageResutls from "./ImageResults";

const ImageSearch = () => {
    
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = (e) =>{
        e.preventDefault();
        axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${photo}&client_id=IK4C1RHo7DIvID5H4ellC285eOo-035scz_uD8Y06IU`)
            .then((res)=> {
                console.log(res.data);
                setResult(res.data.results);
            })
    }
    
    return(
        <>
            <Box m={3} mt={5}>
                <Grid container alignItems="center" justify="center" sx={{ width: '100%' }} direction="column" >
                    <form style={{ width: '60vw' }} onSubmit={changePhoto} className="form-con">

                        <TextField id="outlined-basic" label="Search for Image" fullWidth variant="outlined"
                        onChange={(e) => {
                            setPhoto(e.target.value)
                        }} />

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button type="submit" variant="contained" color="primary" sx={{ m: 'auto' }} align="center" size="large" 
                            style={{fontSize: 15, marginTop: 20, textTransform: "none"}} onClick={changePhoto}>
                                Get Photo
                            </Button>
                        </Box>
                    </form>

                </Grid>
            </Box>

            {/* Images Container */}
            <Box sx={{ width: '80%', ml: '10%'}} className="images-con2" >
                <ImageList variant="masonry" cols={4} gap={8} className="images-con">
                    
                {result.map((value) => (
                    <ImageResutls id={value.id} par={result} res={value.likes} image={value.urls.small} link={value.links.download} likes={value.likes}/>
                ))}
                {/* {result && result.map((value) => (
                        
                        <ImageListItem key={value.urls.id} sx={ {border: 1, borderColor: 'grey.500', borderRadius: '6px', overflow: 'hidden'}}>


                            <img
                            src={`${value.urls.small}?w=248&fit=crop&auto=format`}
                            srcSet={`${value.urls.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={value.title}
                            loading="lazy"
                            />

                            <Grid container alignItems="center" sx={{ justifyContent: 'space-between', p: 2 }} className="lower-row">
                            <Typography variant="h6" m="0" gutterBottom> Likes: {value.likes} </Typography>
                                        
                                
                                 <a href={value.links.download} download target='_blank' style={{textDecoration: 'none'}}>
                                     <Button variant="contained" color="secondary" align="center" size="large" 
                                     style={{fontSize: 15, textTransform: "none"}} >
                                         View
                                     </Button>
                                 </a>
                             </Grid>
                         </ImageListItem>
                    
                    ))} */}
                </ImageList>
                </Box>
        </>
    )
}

export default ImageSearch;