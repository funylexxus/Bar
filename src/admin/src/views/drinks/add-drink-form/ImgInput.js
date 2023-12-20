import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

export function ImgInput(props) {
  return (
    <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ImgStyled src={props.imgSrc} alt='Drink Pic' />
        <Box>
          <ButtonStyled
            component='label'
            variant='contained'
            htmlFor='account-settings-upload-image'
          >
            Upload New Photo
            <input
              hidden
              type='file'
              onChange={props.onChange}
              accept='image/png, image/jpeg'
              id='account-settings-upload-image'
            />
          </ButtonStyled>
          <ResetButtonStyled
            color='error'
            variant='outlined'
            onClick={() => props.setImgSrc('')}
          >
            Reset
          </ResetButtonStyled>
          <Typography variant='body2' sx={{ marginTop: 5 }}>
            Allowed PNG or JPEG. Max size of 800K.
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
