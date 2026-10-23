import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Lang>('en');

  cvUrl = computed(() => {
    return this.currentLang() === 'fr' ? 'assets/cv/CVfr.pdf' : 'assets/cv/CVeng.pdf';
  });

  translations: Record<string, Record<Lang, string>> = {
    // Navigation
    'nav.about': { en: 'About', fr: 'À propos' },
    'nav.skills': { en: 'Skills', fr: 'Compétences' },
    'nav.projects': { en: 'Projects', fr: 'Projets' },
    'nav.education': { en: 'Experience', fr: 'Parcours' },
    'nav.contact': { en: 'Contact', fr: 'Contact' },
    'nav.cv': { en: 'Resume', fr: 'CV' },

    // Hero Section
    'hero.badge': {
      en: 'Available for Internship & Junior Opportunities',
      fr: 'Disponible pour Stage & Opportunités Junior'
    },
    'hero.greeting': { en: "Hello, I'm", fr: 'Bonjour, je suis' },
    'hero.role': {
      en: 'Full-Stack Developer | Angular & Spring Boot',
      fr: 'Développeur Full-Stack | Angular & Spring Boot'
    },
    'hero.bio': {
      en: 'Specialized in building performant, secure, and modern web applications with Angular, Spring Boot, React, and robust relational & NoSQL databases.',
      fr: 'Spécialisé dans le développement d’applications web modernes, performantes et sécurisées avec Angular, Spring Boot, React, et des bases de données SQL & NoSQL.'
    },
    'hero.btn.projects': { en: 'Explore Projects', fr: 'Explorer Projets' },
    'hero.btn.contact': { en: 'Get in Touch', fr: 'Me Contacter' },
    'hero.cv': { en: 'Download CV', fr: 'Télécharger CV' },
    'hero.terminal.title': { en: 'developer.ts', fr: 'developer.ts' },

    // Section Titles
    'sect.about': { en: 'About Me', fr: 'À Propos de Moi' },
    'sect.skills': { en: 'Technical Expertise', fr: 'Compétences Techniques' },
    'sect.projects': { en: 'Featured Projects', fr: 'Projets Réalisés' },
    'sect.edu': { en: 'Education & Experience', fr: 'Formation & Expérience' },
    'sect.contact': { en: 'Get In Touch', fr: 'Contactez-moi' },

    // About Section
    'about.text1': {
      en: 'Full-Stack Web Developer based in Marrakech, Morocco. Passionate about software craftsmanship, clean architecture, and building intuitive user experiences.',
      fr: 'Développeur Web Full-Stack basé à Marrakech, Maroc. Passionné par le software craftsmanship, l’architecture logicielle propre et la création d’expériences utilisateurs intuitives.'
    },
    'about.text2': {
      en: 'I design and implement scalable end-to-end applications from responsive frontend interfaces (Angular, React) to robust backend RESTful APIs (Spring Boot, Node.js, Laravel) and optimized relational databases.',
      fr: 'Je conçois et développe des applications complètes et scalables, des interfaces frontend réactives (Angular, React) jusqu’aux API RESTful robustes (Spring Boot, Node.js, Laravel) et bases de données optimisées.'
    },
    'about.stat.exp': { en: 'Years Experience', fr: 'Ans d\'Expérience' },
    'about.stat.projects': { en: 'Completed Projects', fr: 'Projets Réalisés' },
    'about.stat.code': { en: 'Clean Architecture', fr: 'Code Propre & Testé' },
    'about.stat.location': { en: 'Marrakech / Remote', fr: 'Marrakech / À distance' },

    // Skills Section
    'skills.frontend': { en: 'Frontend Engineering', fr: 'Ingénierie Frontend' },
    'skills.backend': { en: 'Backend & APIs', fr: 'Backend & APIs' },
    'skills.tools': { en: 'Databases & Tools', fr: 'Bases de Données & Outils' },

    // Projects Section
    'projects.filter.all': { en: 'All Projects', fr: 'Tous les Projets' },
    'projects.filter.angular': { en: 'Angular & Spring', fr: 'Angular & Spring' },
    'projects.filter.react': { en: 'React / Node', fr: 'React / Node' },
    'projects.filter.laravel': { en: 'PHP / Laravel', fr: 'PHP / Laravel' },
    'projects.viewLive': { en: 'Live Demo', fr: 'Voir Démo' },
    'projects.viewCode': { en: 'Source Code', fr: 'Code Source' },
    'projects.details': { en: 'Key Architecture', fr: 'Architecture Clé' },

    // Project 1: Commercial Dashboard
    'project.com.title': {
      en: 'Commercial Monitoring Dashboard',
      fr: 'Dashboard de Monitoring Commercial'
    },
    'project.com.desc': {
      en: 'Enterprise analytics dashboard featuring real-time KPI tracking, interactive charts, sales performance metrics, and role-based access control with JWT.',
      fr: 'Tableau de bord d\'analyse commerciale avec suivi des KPI en temps réel, graphiques interactifs, métriques de vente et contrôle d\'accès basé sur les rôles avec JWT.'
    },

    // Project 2: Event Platform
    'project.events.title': {
      en: 'Event & Ticket Reservation System',
      fr: 'Système de Réservation d\'Événements'
    },
    'project.events.desc': {
      en: 'Full-stack platform allowing users to browse events, select seat tiers, book tickets securely, and manage customer reservations with automated receipts.',
      fr: 'Plateforme full-stack permettant de consulter les événements, choisir ses billets en temps réel, réserver en toute sécurité et gérer les réservations avec reçus automatiques.'
    },

    // Project 3: Chgouri Car
    'project.chgouri.title': {
      en: 'Chgouri Car – Car Rental Platform',
      fr: 'Chgouri Car – Location de Voitures'
    },
    'project.chgouri.desc': {
      en: 'Full-stack web application for car rental services, featuring an online vehicle booking engine, real-time fleet availability, dynamic pricing, and an intuitive customer reservation workflow.',
      fr: 'Application web full-stack de location de voitures intégrant un système de réservation en ligne, la disponibilité des véhicules en temps réel, une tarification dynamique et un suivi complet des réservations.'
    },

    // Project 4: Charity Association
    'project.charity.title': {
      en: 'Association Oulad Lkhir Platform',
      fr: 'Plateforme Association Oulad Lkhir'
    },
    'project.charity.desc': {
      en: 'Non-profit management portal supporting donation campaigns, volunteer coordination, beneficiary tracking, and transparent charity impact reporting.',
      fr: 'Portail de gestion pour association caritative permettant le suivi des dons, la coordination des bénévoles, le suivi des bénéficiaires et les rapports d\'impact.'
    },

    // Education & Experience
    'edu.bts': {
      en: 'BTS – Full-Stack Web Development',
      fr: 'BTS – Développement Web Full-Stack'
    },
    'edu.bts.school': {
      en: 'Lycée Technique / Centre BTS • Marrakech',
      fr: 'Lycée Technique / Centre BTS • Marrakech'
    },
    'edu.bts.period': { en: '2024 - 2026', fr: '2024 - 2026' },
    'edu.bts.desc': {
      en: 'In-depth professional curriculum: Object-Oriented Programming (Java, PHP), Modern Web Frameworks (Angular, Spring Boot), Database Architecture (UML, SQL, NoSQL), and software design patterns.',
      fr: 'Formation professionnelle approfondie : Programmation Orientée Objet (Java, PHP), Frameworks modernes (Angular, Spring Boot), Conception de bases de données (UML, SQL, NoSQL) et design patterns logiciels.'
    },
    'exp.intern': {
      en: 'Full-Stack Developer Internship',
      fr: 'Stage Développeur Full-Stack'
    },
    'exp.intern.company': {
      en: 'Enterprise Tech Solutions • Morocco',
      fr: 'Solutions Informatiques & Digitales • Maroc'
    },
    'exp.intern.period': { en: 'Jul 2025 – Aug 2025', fr: 'Juil 2025 – Août 2025' },
    'exp.intern.desc': {
      en: 'Designed and implemented full-stack modules for a commercial monitoring web application. Integrated REST APIs, implemented secure JWT authentication, and developed responsive Angular dashboard components.',
      fr: 'Conception et développement de modules full-stack pour une application de monitoring commercial. Intégration d’API REST sécurisées avec JWT, et développement de dashboards réactifs avec Angular.'
    },

    // Contact Section
    'contact.title': { en: "Let's Build Something Great", fr: 'Discutons de Votre Projet' },
    'contact.subtitle': {
      en: 'Currently open to internship opportunities, junior developer roles, and freelance collaborations. Reach out directly!',
      fr: 'Actuellement ouvert aux opportunités de stage, postes de développeur junior et projets freelance. N’hésitez pas à me contacter !'
    },
    'contact.email': { en: 'Email', fr: 'Email' },
    'contact.location': { en: 'Location', fr: 'Localisation' },
    'contact.location.val': {
      en: 'Marrakech, Morocco (Available for Remote & Hybrid)',
      fr: 'Marrakech, Maroc (Disponible en Télétravail & Hybride)'
    },
    'contact.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },
    'contact.whatsapp.cta': { en: 'Chat on WhatsApp', fr: 'Discuter sur WhatsApp' },
    'contact.form.name': { en: 'Your Name', fr: 'Votre Nom' },
    'contact.form.name.placeholder': { en: 'e.g. John Doe', fr: 'ex: Mohamed Alami' },
    'contact.form.email': { en: 'Your Email', fr: 'Votre Email' },
    'contact.form.email.placeholder': { en: 'e.g. john@example.com', fr: 'ex: contact@entreprise.com' },
    'contact.form.subject': { en: 'Subject', fr: 'Sujet' },
    'contact.form.subject.placeholder': { en: 'e.g. Internship or Project Collaboration', fr: 'ex: Opportunité de Stage ou Projet' },
    'contact.form.message': { en: 'Your Message', fr: 'Votre Message' },
    'contact.form.message.placeholder': {
      en: 'Tell me about your project, team, or opportunity...',
      fr: 'Parlez-moi de votre projet, équipe ou opportunité...'
    },
    'contact.btn': { en: 'Send Message', fr: 'Envoyer Message' },
    'contact.sending': { en: 'Sending...', fr: 'Envoi en cours...' },
    'contact.success': {
      en: '✓ Thank you! Your message has been sent successfully.',
      fr: '✓ Merci ! Votre message a bien été envoyé.'
    },
    'contact.error': {
      en: 'Could not send directly. Please email me at zakriaoukhamou11@gmail.com.',
      fr: 'Impossible d\'envoyer directement. Veuillez m\'écrire à zakriaoukhamou11@gmail.com.'
    }
  };

  setLanguage(lang: Lang) {
    this.currentLang.set(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  translate(key: string): string {
    return this.translations[key]?.[this.currentLang()] || key;
  }
}
