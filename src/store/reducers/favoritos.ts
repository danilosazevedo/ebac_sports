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
        alert('Corrigir a remoção do favorito')
      } else {
        state.itens.push(itensFavoritos)
      }
      console.log(itensFavoritos)
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
