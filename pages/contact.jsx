import styles from '../styles/ContactPage.module.css';
import MailIcon from '../components/icons/MailIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import GithubIcon from '../components/icons/GithubIcon';
import ScholarIcon from '../components/icons/ScholarIcon';
import OrcidIcon from '../components/icons/OrcidIcon';
import ResearchGateIcon from '../components/icons/ResearchGateIcon';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'diegofbravoh@gmail.com',
      href: 'mailto:diegofbravoh@gmail.com',
      icon: <MailIcon width={44} height={44} />,
      description: 'Best way to reach me'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/ingdiegobravo',
      href: 'https://www.linkedin.com/in/ingdiegobravo/',
      icon: <LinkedinIcon width={44} height={44} />,
      description: 'Professional profile'
    },
    {
      name: 'GitHub',
      value: 'github.com/DiegoBravoH',
      href: 'https://github.com/DiegoBravoH',
      icon: <GithubIcon width={44} height={44} />,
      description: 'Code & open source'
    },
    {
      name: 'Google Scholar',
      value: 'scholar.google.com',
      href: 'https://scholar.google.com/citations?user=S47_4IcAAAAJ&hl',
      icon: <ScholarIcon width={44} height={44} />,
      description: 'Publications & citations'
    },
    {
      name: 'ORCID',
      value: '0000-0003-1957-1615',
      href: 'https://orcid.org/0000-0003-1957-1615',
      icon: <OrcidIcon width={44} height={44} />,
      description: 'Research identity'
    },
    {
      name: 'ResearchGate',
      value: 'researchgate.net',
      href: 'https://www.researchgate.net/profile/Diego-Bravo-9',
      icon: <ResearchGateIcon width={44} height={44} />,
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
