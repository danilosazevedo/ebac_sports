import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type Favoritos = {
  itens: Produto[]
}

const initialState: Favoritos = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((favoritos) => favoritos.id === favoritos.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
