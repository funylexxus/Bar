// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { useState, useEffect } from 'react'
import customAxios from 'src/utils/customAxios'
import _ from 'lodash'
import moment from 'moment'

const WeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()
  const [revenuesByMonthState, setRevenuesByMonthState] = useState([
    37, 57, 45, 75, 57, 40, 65
  ])
  const [lastMonthRevenueCompare, setLastMonthRevenueCompare] = useState(0)
  useEffect(async () => {
    const { data: orders } = await customAxios.get(
      `${process.env.API_URL}/orders`
    )
    const today = moment()
    const from_date = today.subtract(1, 'weeks').startOf('week')
    const to_date = today.endOf('week')
    console.log(from_date)
    console.log(to_date)
    const revenuesByMonth = []

    for (let i = 12; i > 0; i--) {
      const startDate = moment(`2023-${i}-01`, 'YYYY-MM-DD')
      const endDate = moment(`2023-${i}-30`, 'YYYY-MM-DD')
      const ordersInThisMonth = _.filter(orders, order =>
        moment(order.createdAt).isBetween(startDate, endDate)
      )
      const revenue = _.reduce(
        ordersInThisMonth,
        (sum, order) => sum + order.totalCount,
        0
      )
      revenuesByMonth.push(revenue)
    }

    console.log('last', revenuesByMonth[1])
    console.log('c', revenuesByMonth[0])

    // const lastMonthRevCompare = _.round(
    //   (1 - revenuesByMonth[1] / revenuesByMonth[0]) * 100,
    //   2
    // )
    const lastMonthRevCompare = _.round(
      revenuesByMonth[0] - revenuesByMonth[1],
      2
    )
    setLastMonthRevenueCompare(lastMonthRevCompare)
    setRevenuesByMonthState(revenuesByMonth)
    console.log('revenuesByMonth', revenuesByMonth)
  }, [])

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value =>
          `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Weekly Overview'
        titleTypographyProps={{
          sx: {
            lineHeight: '2rem !important',
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
      <CardContent
        sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}
      >
        <ReactApexcharts
          type='bar'
          height={205}
          options={options}
          series={[{ data: revenuesByMonthState }]}
        />
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            ${lastMonthRevenueCompare}k
          </Typography>
          <Typography variant='body2'>
            Your sales performance is ${lastMonthRevenueCompare}k 😎 better
            compared to last month
          </Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
