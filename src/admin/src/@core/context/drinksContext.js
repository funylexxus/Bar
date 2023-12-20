// ** React Imports
import _ from 'lodash'
import { createContext, useState } from 'react'
import customAxios from 'src/utils/customAxios'

const fetchDrinks = async ({
  page = 1,
  itemsPerPage = 5,
  sortField = 'name',
  sortOrder = 'asc',
  keyword,
  signal
}) => {
  try {
    const {
      data: { drinks, pagination }
    } = await customAxios.get(`${process.env.API_URL}/drinks`, {
      signal,
      params: {
        page: _.parseInt(page),
        itemsPerPage,
        sortField,
        sortOrder,
        keyword
      }
    })
    return { drinks, pagination }
  } catch (error) {
    console.log(error)
    return error
  }
}
// ** Create Context

export const DrinksContext = createContext()

export const DrinksProvider = ({ children }) => {
  // ** State
  const [drinksResponse, setDrinks] = useState({
    drinks: [],
    pagination: { totalCount: 0 }
  })

  const getDrinks = async params => {
    const { currentPage, itemsPerPage, sortField, sortOrder } =
      drinksResponse.pagination
    const defaultParams = {
      page: currentPage,
      itemsPerPage,
      sortField,
      sortOrder
    }
    console.log('params', params)
    const res = await fetchDrinks({ ...defaultParams, ...params })
    console.log('res', res)
    if (res.code === 'ERR_CANCELED') {
      return
    }
    setDrinks(res)
  }

  return (
    <DrinksContext.Provider value={[drinksResponse, getDrinks]}>
      {children}
    </DrinksContext.Provider>
  )
}
