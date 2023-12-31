// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useEffect, useState } from 'react'
import customAxios from 'src/utils/customAxios'
import _ from 'lodash'
import moment from 'moment'
import { Try } from '@mui/icons-material'

const getSalesData = ({ sales, customers, products, revenue }) => [
  {
    stats: sales,
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: customers,
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: products,
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: revenue,
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  const [salesData, setSalesData] = useState([
    {
      stats: 0,
      title: 'Sales',
      color: 'primary',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: 0,
      title: 'Customers',
      color: 'success',
      icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: 0,
      color: 'warning',
      title: 'Products',
      icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '$0k',
      color: 'info',
      title: 'Revenue',
      icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
    }
  ])

  const calculateOrderStatistics = (orders, usersNumber, drinksNumber) => {
    const sales = orders.length
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
    return {
      sales,
      customers: usersNumber,
      products: drinksNumber,
      revenue: _.round(revenue, 2)
    }
  }

  useEffect(async () => {
    try {
      const { data: orders } = await customAxios.get(
        `${process.env.API_URL}/orders`
      )
      const { data: usersNumber } = await customAxios.get(
        `${process.env.API_URL}/auth/customers-number`
      )
      const { data: drinksNumber } = await customAxios.get(
        `${process.env.API_URL}/drinks/count`
      )
      const orderStatistics = calculateOrderStatistics(
        orders,
        usersNumber,
        drinksNumber
      )

      setSalesData(getSalesData(orderStatistics))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  const [diff, setDiff] = useState(0)

  const getCurrentMonthRevenue = orders => {
    const startOfYear = moment().startOf('month').format('YYYY-MM-DD hh:mm')
    const endOfYear = moment().endOf('month').format('YYYY-MM-DD hh:mm')
    const currentMonthOrders = _.filter(orders, order =>
      moment(order.createdAt).isBetween(startOfYear, endOfYear)
    )
    const revenue = _.reduce(
      currentMonthOrders,
      (sum, order) => sum + order.totalCount,
      0
    )

    return revenue
  }

  const getPreviousMonthRevenue = orders => {
    const startOfYear = moment()
      .startOf('month')
      .subtract(1, 'month')
      .format('YYYY-MM-DD hh:mm')
    const endOfYear = moment()
      .endOf('month')
      .subtract(1, 'month')
      .format('YYYY-MM-DD hh:mm')
    const currentMonthOrders = _.filter(orders, order =>
      moment(order.createdAt).isBetween(startOfYear, endOfYear)
    )
    const revenue = _.reduce(
      currentMonthOrders,
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
      const currentMonthRevenue = getCurrentMonthRevenue(orders)
      const previousMonthRevenue = getPreviousMonthRevenue(orders)
      const diffV = _.round(
        (1 - previousMonthRevenue / currentMonthRevenue) * 100
      )

      setDiff(diffV)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <Card>
      <CardHeader
        title='Statistics Card'
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
        subheader={
          <Typography variant='body2'>
            <Box
              component='span'
              sx={{ fontWeight: 600, color: 'text.primary' }}
            >
              Total {diff}% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
