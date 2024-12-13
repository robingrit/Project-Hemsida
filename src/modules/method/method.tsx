import "./method.scss";

import method_img from "./resources/egg-method.svg"

function Method() {
  return (
    <>
      <div className="method-wrapper">
        <div className="method-container">
          <div className="method-left">
            <img id="method-img" src={method_img} alt="Metoden Diagram" />
          </div>
          <div className="method-right">
            <h1>En God Granne-Metoden</h1>
            <h2>För hållbara och lokala livsmedelsinköp</h2>
            <p>
              Många kommuner köper livsmedel från stora grossister, vilket försvårar stöd till lokala producenter. En God Granne-metoden hjälper kommuner att successivt öka andelen lokala inköp genom upphandlingar och långsiktiga samarbeten. Arbetet börjar med att skapa team och nätverk som underlättar integrationen av lokalt producerade livsmedel i upphandlingar och måltidsplanering.            
            </p>
          </div>
        </div>
        <div className="method-steps">
          <h2>Arbetsprocessen</h2>
          <ol>
            <li>Förbered - Kommuner bygger team och inleder dialog med lokala producenter för att skapa hållbara upphandlingssystem.</li>
            <li>Upphandla - En rättvis upphandlingsprocess enligt LOU synkroniserar lokala avtal med större upphandlingar för att stödja producenterna.</li>
            <li>Realisera - Efter upphandling följs samarbetet upp för att optimera leveranser och stärka de lokala affärsrelationerna över tid.</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Method;