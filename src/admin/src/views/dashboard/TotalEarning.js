// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { useState } from 'react'
import { useEffect } from 'react'
import customAxios from 'src/utils/customAxios'
import moment from 'moment'

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Zipcar',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/logo-bitbank.png'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Aviato',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/logo-aviato.png'
  }
]

const TotalEarning = () => {
  const [currentYearRevenue, setCurrentYearRevenue] = useState(0)
  const [previousYearRevenue, setPreviousYearRevenue] = useState(0)
  const [diff, setDiff] = useState(0)

  const getCurrentYearRevenue = orders => {
    const startOfYear = moment().startOf('year').format('YYYY-MM-DD hh:mm')
    const endOfYear = moment().endOf('year').format('YYYY-MM-DD hh:mm')
    const currentYearOrders = _.filter(orders, order =>
      moment(order.createdAt).isBetween(startOfYear, endOfYear)
    )
    const revenue = _.reduce(
      currentYearOrders,
      (sum, order) => sum + order.totalCount,
      0
    )

    return revenue
  }

  const getPreviousYearRevenue = orders => {
    const startOfYear = moment()
      .startOf('year')
      .subtract(1, 'year')
      .format('YYYY-MM-DD hh:mm')
    const endOfYear = moment()
      .endOf('year')
      .subtract(1, 'year')
      .format('YYYY-MM-DD hh:mm')
    const currentYearOrders = _.filter(orders, order =>
      moment(order.createdAt).isBetween(startOfYear, endOfYear)
    )
    const revenue = _.reduce(
      currentYearOrders,
      (sum, order) => sum + order.totalCount,
      0
    )

    return revenue
  }

  useEffect(async () => {
    try {
      const { data: orders } = await customAxios.get(
        `${process.env.API_URL}/orders`
      )

      const currentYearRevenue = getCurrentYearRevenue(orders)
      const previousYearRevenue = getPreviousYearRevenue(orders)
      const diff = _.round((1 - previousYearRevenue / currentYearRevenue) * 100)
      setCurrentYearRevenue(currentYearRevenue)
      setPreviousYearRevenue(previousYearRevenue)
      setDiff(diff)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Card>
      <CardHeader
        title='Total Earning'
        titleTypographyProps={{
          sx: {
            lineHeight: '1.6 !important',
            letterSpacing: '0.15px !important'
          }
        }}
        action={
          <IconButton
            size='small'
            aria-label='settings'
            className='card-more-options'
            sx={{ color: 'text.secondary' }}
          >
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='h4'
            sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}
          >
            {currentYearRevenue}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'success.main'
            }}
          >
            <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
            <Typography
              variant='body2'
              sx={{ fontWeight: 600, color: 'success.main' }}
            >
              {diff}%
            </Typography>
          </Box>
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 10 }}>
          Compared to ${previousYearRevenue} last year
        </Typography>

        {/* {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 8.5 } : {})
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })} */}
      </CardContent>
    </Card>
  )
}

export default TotalEarning
