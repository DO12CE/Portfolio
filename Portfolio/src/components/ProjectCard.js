import { Col,Button } from "react-bootstrap";
import '../App.css';

export const ProjectCard = ({ title, description, imgUrl ,pdfFile , attest}) => {

  const openPDF = () => {
    // Ouvre le fichier PDF spécifié dans une nouvelle fenêtre
    window.open(pdfFile, '_blank');
  };
  const openAttest =()=> {
    window.open(attest , '_blank');
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-3">
            <Button  onClick={openPDF} className="button-beau">Voir le PDF</Button>
            <Button  onClick={openAttest} className="button-beau">Voir l'Attestation</Button>
          </div>
        </div>
      </div>
    </Col>
  )
}
