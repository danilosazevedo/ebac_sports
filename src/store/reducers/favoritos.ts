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
      const itensFavoritos = action.payload

      if (state.itens.find((favoritos) => favoritos.id === itensFavoritos.id)) {
        state.itens = state.itens.filter(
          (favoritos) => favoritos.id !== action.payload.id
        )
        // setTimeout(encontrarFavorito, 3000)
      } else {
        state.itens.push(itensFavoritos)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
