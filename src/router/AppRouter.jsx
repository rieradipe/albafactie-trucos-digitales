import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Peques from "../pages/peques/ZonaPeques";
import ZonaMayores from "../pages/peques/ZonaMayores";
import Recursos from "../pages/Recursos";

import PersonasFalsas from "../pages/peques/PersonasFalsas";
import SecretosSeguros from "../pages/peques/SecretosSeguros";
import Retos from "../pages/peques/Retos";
import ContraSeguras from "../pages/peques/ContraSeguras";
import MensajesSeguros from "../pages/peques/MensajesSeguros";
import Datos from "../pages/peques/Datos";
import Diploma from "../pages/peques/Diploma";
import JuegosPeques from "../pages/peques/JuegosPeques";
import SuperDetectives from "../pages/peques/SuperDetectives";
import JuegosSuperDetectives from "../pages/peques/JuegosSuperDetectives";
import CasoNuevoAmigo from "../pages/peques/CasoNuevoAmigo";
import CasoMensajeExtrano from "../pages/peques/CasoMensajeExtrano";
import CasoRegaloSorpresa from "../pages/peques/CasoRegaloSorpresa";
import DiplomaSuper from "../pages/peques/DiplomaSuper";
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/peques" element={<Peques />} />
        <Route path="/peques/juegos" element={<JuegosPeques />} />

        <Route path="/peques/personas-falsas" element={<PersonasFalsas />} />
        <Route path="/peques/secretos-seguros" element={<SecretosSeguros />} />
        <Route path="/peques/retos" element={<Retos />} />

        <Route path="/mayores" element={<ZonaMayores />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route
          path="/peques/retos/contras-seguras"
          element={<ContraSeguras />}
        />
        <Route
          path="/peques/retos/mensajes-seguros"
          element={<MensajesSeguros />}
        />
        <Route path="/peques/retos/datos" element={<Datos />} />
        <Route path="/peques/retos/diploma" element={<Diploma />} />
        <Route
          path="/peques/superdetectives/misiones"
          element={<JuegosSuperDetectives />}
        />
        <Route path="/peques/superdetectives" element={<SuperDetectives />} />

        <Route
          path="/peques/superdetectives/caso-nuevo-amigo"
          element={<CasoNuevoAmigo />}
        />
        <Route
          path="/peques/superdetectives/caso-mensaje-extrano"
          element={<CasoMensajeExtrano />}
        />
        <Route
          path="/peques/superdetectives/caso-regalo-sorpresa"
          element={<CasoRegaloSorpresa />}
        />
        <Route
          path="/peques/superdetectives/diploma"
          element={<DiplomaSuper />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
