import ListadoCategorias from "./components/ListadoCategorias";
import VistaCategoria from "./components/VistaCategoria";

import "./App.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ProviderCategorias from "./context/ContextoCategorias";
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ProviderCategorias>
                <div className="App">
                    <h1>Inventario Pokemon</h1>
                    <div id="bandejaDeEntrada">
                        <ListadoCategorias/>
                        <VistaCategoria />
                    </div>
                </div>
            </ProviderCategorias>
        </QueryClientProvider>
    );
}
