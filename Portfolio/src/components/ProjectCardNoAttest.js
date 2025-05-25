import { Col,Button } from "react-bootstrap";
import '../App.css';

export const ProjectCardNoAttest = ({ title, description, imgUrl ,pdfFile }) => {

  const openPDF = () => {
    // Ouvre le fichier PDF spécifié dans une nouvelle fenêtre
    window.open(pdfFile, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-3">
            <Button onClick={openPDF} className="button-beau">Voir le PDF</Button>
          </div>
        </div>
      </div>
    </Col>
  )
}
