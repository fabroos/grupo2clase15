import { FC } from "react";
import {  Category } from "../schema/item-category";
import { ContextState } from "../context/ContextoCategorias";

// Documentar
export const extractCategoriaId = (url: string) => {
    return url.split("item-category")[1].replace("/","");
}


// Documentar y Agregar Tipos para las props
interface ListadoCategoriasItemProps {
    categoria: Category
    seleccionarCategoria: ContextState['seleccionarCategoria']
}
const ListadoCategoriasItem: FC<ListadoCategoriasItemProps> = ({ categoria, seleccionarCategoria }) =>
    <div className="categoria-item" onClick={() => seleccionarCategoria(categoria)}>
        <strong>{categoria.name}</strong>
        <small> {categoria.url}</small>
    </div>


// Agregar prop-types para validar

export default ListadoCategoriasItem;
