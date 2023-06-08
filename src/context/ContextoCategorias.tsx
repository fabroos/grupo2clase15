import React, { FC, createContext, useContext, useReducer } from "react";
import { Category } from "../schema/item-category";

enum CategoryActionTypes {
    SELECT_CATEGORY = 'SELECT_CATEGORY',
}

interface CategoryAction {
    type: CategoryActionTypes;
    payload: {
        categoria: Category | null;
    }
}

interface CategoryState {
    categoriaSeleccionada: Category | null;
}

// Debemos tipar nuestro estado inicial.
const initialState = {
    categoriaSeleccionada: null,
};

const reducer = (state: CategoryState, action: CategoryAction) => {
    // Implementar el reducer
    switch (action.type) {
        case CategoryActionTypes.SELECT_CATEGORY:
            return {
                ...state,
                categoriaSeleccionada: action.payload.categoria,
            }
    }
};

export interface ContextState {
    categoriasState: CategoryState;
    seleccionarCategoria: (categoria: Category) => void;
}

export const ContextoCategorias = createContext<ContextState | null>(null);

interface ProviderCategoriasProps {
    children: React.ReactNode;
}

const ProviderCategorias: FC<ProviderCategoriasProps> = ({ children }) => {
    const [categoriasState, dispatch] = useReducer(reducer, initialState);


    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (categoria: Category) => {
        dispatch({
            type: CategoryActionTypes.SELECT_CATEGORY,
            payload: { categoria },
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriasState,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export const useCategoryContext = ()=> useContext(ContextoCategorias) as ContextState;

export default ProviderCategorias;