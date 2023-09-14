import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Los sistemas embebidos: lo que son y cómo funcionan',
    image:" /img/main/img1.png" ,
    description: (
      <>
        Los sistemas embebidos son sistemas informáticos que están diseñados para realizar una tarea específica o un conjunto de tareas. Se encuentran en una amplia gama de dispositivos, desde electrodomésticos hasta vehículos autónomos.
      </>
    ),
  },
  {
    title: 'El Internet de las Cosas: una red de dispositivos conectados',
    image:" /img/main/img2.png" ,
    description: (
      <>
       El Internet de las Cosas (IoT) es una red de dispositivos físicos, vehículos, edificios y otros elementos conectados a Internet que pueden recopilar y compartir datos. Los sistemas embebidos son esenciales para el IoT, ya que permiten que los dispositivos se conecten entre sí y con la red.
      </>
    ),
  },
  {
    title: 'Sistemas embebidos e IoT: el futuro de la tecnología',
    image:" /img/main/img3.png" ,
    description: (
      <>
       Los sistemas embebidos e IoT están transformando la forma en que vivimos, trabajamos y nos divertimos. Están creando nuevas oportunidades en una amplia gama de industrias, desde la salud y la seguridad hasta la fabricación y la logística.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureImage} src={image} alt={title} /> 
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
