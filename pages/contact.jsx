import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'diegofbravoh@gmail.com',
      href: 'mailto:diegofbravoh@gmail.com',
      icon: '✉',
      description: 'Best way to reach me'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/ingdiegobravo',
      href: 'https://www.linkedin.com/in/ingdiegobravo/',
      icon: <i className="fa-brands fa-linkedin"></i>,
      description: 'Professional profile'
    },
    {
      name: 'GitHub',
      value: 'github.com/DiegoBravoH',
      href: 'https://github.com/DiegoBravoH',
      icon: <i className="fa-brands fa-github"></i>,
      description: 'Code & open source'
    },
    {
      name: 'Google Scholar',
      value: 'scholar.google.com',
      href: 'https://scholar.google.com/citations?user=S47_4IcAAAAJ&hl',
      icon: <i className="fa-solid fa-graduation-cap"></i>,
      description: 'Publications & citations'
    },
    {
      name: 'ORCID',
      value: '0000-0003-1957-1615',
      href: 'https://orcid.org/0000-0003-1957-1615',
      icon: <i className="fa-brands fa-orcid"></i>,
      description: 'Research identity'
    },
    {
      name: 'ResearchGate',
      value: 'researchgate.net',
      href: 'https://www.researchgate.net/profile/Diego-Bravo-9',
      icon: <i className="fa-brands fa-researchgate"></i>,
      description: 'Papers & collaborations'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}> Machine Learning Engineer • Real-Time & Edge AI • PhD Candidate @ UNAL </p>
        </div>

        <div className={styles.bio}>
          <p>
            PhD Machine Learning Engineer specializing in real-time and edge AI systems, with 4+ years of experience building production-grade solutions for medical imaging. Designed and deployed temporal deep learning models (CNN+ViT) for Video Capsule Endoscopy, trained on large-scale datasets (~3.5M frames) and optimized for real-time inference (~30 ms/frame) on edge devices (Jetson).
          </p>
          <p>
            Experienced in developing end-to-end AI pipelines, from multimodal data processing to deployment, with a focus on reliable and scalable systems for clinical applications. Proven track record in temporal modeling and large-scale data analysis, with publications in leading venues including Scientific Data (Nature), MICCAI, ISBI, SIPAIM, and SPIE.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>{method.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{method.name}</h3>
                <p className={styles.cardValue}>{method.value}</p>
                <p className={styles.cardDescription}>{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.availability}>
            <span className={styles.statusIndicator}></span>
            Available to discuss full-time roles, research collaborations, and consulting
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
