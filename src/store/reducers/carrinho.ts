import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const itensNoCarrinho = action.payload

      if (state.itens.find((produto) => produto.id === itensNoCarrinho.id)) {
        alert('Item já a dicionado ao seu carrinho')
      } else {
        state.itens.push(itensNoCarrinho)
      }
      console.log(itensNoCarrinho)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
