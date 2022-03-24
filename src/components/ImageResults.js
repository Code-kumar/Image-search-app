import React from 'react';

import { Button, Grid, Box } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';


const ImageResutls = (props) =>{
    return(
        <>
            <ImageListItem key={props.id} sx={ {border: 1, borderColor: 'grey.500', borderRadius: '6px', overflow: 'hidden'}}>

                <img
                    src={`${props.image}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                />
                <Grid container alignItems="center" sx={{ justifyContent: 'space-between', p: 2 }} className="lower-row">
                    <Typography variant="h6" m="0" gutterBottom> Likes: {props.likes} </Typography>
                                  
                    <a href={props.link} download target='_blank' style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="secondary" align="center" size="large" 
                        style={{fontSize: 15, textTransform: "none"}} >
                            View
                        </Button>
                    </a>
                </Grid>

            </ImageListItem>
        </>
    )
}

export default ImageResutls;