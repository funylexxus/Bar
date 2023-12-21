// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import customAxios from 'src/utils/customAxios'
import _ from 'lodash'
import moment from 'moment'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc =
    theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  const [revenue, setRevenue] = useState(0)

  useEffect(async () => {
    try {
      const { data: orders } = await customAxios.get(
        `${process.env.API_URL}/orders`
      )
      const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm')
      const endOfMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm')
      const currentMonthOrders = _.filter(orders, order =>
        moment(order.createdAt).isBetween(startOfMonth, endOfMonth)
      )
      const revenue = _.reduce(
        currentMonthOrders,
        (sum, order) => sum + order.totalCount,
        0
      )
      setRevenue(_.round(revenue, 2))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Congratulations! 🥳</Typography>
        {/* <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Best seller of the month
        </Typography> */}
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          ${revenue}
        </Typography>
        {/* <Button size='small' variant='contained'>
          View Sales
        </Button> */}
        <TriangleImg
          alt='triangle background'
          src={`/images/misc/${imageSrc}`}
        />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
