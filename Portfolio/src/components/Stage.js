import "animate.css";
import Attestationgolfy from "../assets/doc/attestationgolfy.pdf";
import Rapportgolfy from "../assets/doc/golfy.pdf";
import Attestationinfoboost from "../assets/doc/attestationinfoboost.pdf";
import Rapportinfoboost from "../assets/doc/infoboost.pdf";

export const Stage = () => {
  return (
    <div id="stage" className="ssi-container">  
      <div className="main-container">
        <div className="section">
          <h1>Mes Stages </h1>

          <div className="content-wrapper">
            <div className="sub-section">
              <h2>Stage 1-Golfy</h2>
              <div className="button-container">
                <button className="button-beau"><a href={Attestationgolfy} target="_blank">Attestation</a></button>
                <button className="button-beau"><a href={Rapportgolfy} target="_blank">Rapport</a></button>
              </div>
            </div>

            <div className="sub-section">
              <h2>Stage 2-Infoboost</h2>
              <div className="button-container">
                <button className="button-beau"><a href={Attestationinfoboost} target="_blank">Attestation</a></button>
                <button className="button-beau" ><a href={Rapportinfoboost} target="_blank">Rapport</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
