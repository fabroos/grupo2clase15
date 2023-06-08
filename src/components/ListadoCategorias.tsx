import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getItemCategories} from "../queries/items.queries";
import ListadoCategoriasItem from "./ListadoCategoriasItem";
import { useCategoryContext } from "../context/ContextoCategorias";

const ListadoCategorias = () => {
    const {
        data: categorias,
        isLoading,
        isError,
    } = useQuery(["itemCategories"], getItemCategories);
    const { seleccionarCategoria } = useCategoryContext()

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>


    return (
        <div id="listadoCategorias">
            {categorias.map((categoria) => <ListadoCategoriasItem seleccionarCategoria={seleccionarCategoria} categoria={categoria} key={categoria.name}/>)}
        </div>
    );
}

export default ListadoCategorias;
