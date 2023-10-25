//IMPORTACION INDIVIDUAL

// import { Apple } from './USA';
// import { Windows } from './USA';

//********************************* */

//import Coche from './USA'
import { Microsoft } from "../repaso/USA";
import Coche, { Apple, Windows } from "./USA"; //IMPORTACION COLECTIVA
export default function Mexico() {
  return (
    <>
      <Apple />
      <Windows />
      <Coche />
      <Microsoft />  
    </>
  );
}
