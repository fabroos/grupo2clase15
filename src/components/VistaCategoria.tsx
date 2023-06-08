import { useCategoryContext } from "../context/ContextoCategorias";
import ListadoItems from "./ListadoItems";

// Documentar
const VistaCategoria = () => {
    const { categoriasState } = useCategoryContext();
    if (!categoriasState.categoriaSeleccionada) return null;
    const categoria = categoriasState.categoriaSeleccionada;

    return (
        <div id="vistaCategoria">
            <h3 className="titulo">Categoria: {categoria.name}</h3>
            <ListadoItems categoria={categoria}  />
        </div>
    )
};

export default VistaCategoria;
