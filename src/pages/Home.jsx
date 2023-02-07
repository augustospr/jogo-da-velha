import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
import Paginacao from "../components/paginacao/Paginacao";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <Container sx={{ paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Grid item>
            <div></div>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}   
