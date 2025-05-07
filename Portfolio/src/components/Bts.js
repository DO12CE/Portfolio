



export const  Bts=()=> {

    return (
        <div id="bts" className="bts-container">
           <div className="main-container">
        <div>
          <h4 className="section-title">Qu'est-ce que le BTS SIO ?</h4>
        </div>

        <div className="section-content">
          <div className="full-width">
            <p className="text-block">
              Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations, s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
            </p>
          </div>

          {/* SLAM */}
          <div className="half-width slam-section">
            <h6 className="sub-title">Option SLAM</h6>
            <div className="text-block">
              Le signe SLAM signifie « Solutions Logicielles et Applications Métier ». Voici quelques indications sur cette seconde option du BTS SIO, ainsi des précisions sur cette formation et ses débouchés.
            </div>
            <div className="text-block">
              L’option SLAM est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance de programmes applicatifs.
            </div>
            <div className="text-block">
              Ils pourront également gérer l’intégration, la sécurisation et la configuration des serveurs, mais aussi des postes clients et des équipements d’interconnexion.
            </div>
            <div className="text-block">Voici les débouchés avec un BTS SIO SLAM:</div>
            <ul className="list">
              <li>Développeur d'applications informatiques</li>
              <li>Développeur informatique</li>
              <li>Analyste d'applications ou d'études</li>
              <li>Analyste programmeur</li>
              <li>Chargé d'études informatiques</li>
              <li>Informaticien d'études</li>
              <li>Programmeur analyste</li>
              <li>Programmeur d'applications</li>
              <li>Responsable des services applicatifs</li>
              <li>Technicien d'études informatiques</li>
            </ul>
          </div>

          {/* SISR */}
          <div className="half-width sisr-section">
            <h6 className="sub-title">Option SISR</h6>
            <div className="text-block">
              L’acronyme SISR signifie « Solutions d’infrastructure, systèmes et réseaux ». Voici des précisions sur cette formation et ses débouchés.
            </div>
            <div className="text-block">
              L’option SISR est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance d’infrastructures réseaux.
            </div>
            <div className="text-block">
              Des cours plus généraux viendront compléter la formation et apporter des compétences plus généralistes.
            </div>
            <div className="text-block">Voici les débouchés avec un BTS SIO SISR:</div>
            <ul className="list">
              <li>Technicien de production</li>
              <li>Technicien d’infrastructure</li>
              <li>Technicien réseau et télécoms</li>
              <li>Technicien systèmes et réseaux</li>
              <li>Administrateur systèmes et réseaux</li>
              <li>Support systèmes et réseaux</li>
              <li>Pilote d’exploitation</li>
              <li>Informaticien support et déploiement</li>
            </ul>
          </div>

          <p className="source">
            Source: Synthèse de différents sites (onisep, letudiant, dimension-bts)
          </p>
        </div>
      </div>

        </div>
    )

} 