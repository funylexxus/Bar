import { Grid } from '@mui/material'
import { DrinksProvider } from 'src/@core/context/drinksContext'
import AddDrinkForm from 'src/views/drinks/add-drink-form/AddDrinkForm'
import DrinksTable from 'src/views/drinks/drinksTable'

const Drinks = () => {
  return (
    <Grid container>
      <DrinksProvider>
        <DrinksTable />
        <AddDrinkForm />
      </DrinksProvider>
    </Grid>
  )
}

export default Drinks
