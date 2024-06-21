import { useState } from "react";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

const Routes = () => {
  const [estaLogado, setLogado] = useState(false);

  return <>{estaLogado ? <RotasPrivadas /> : <RotasPublicas />}</>;
};

export default Routes;
