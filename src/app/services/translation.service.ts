import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'fr';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    currentLang = signal<Lang>('en');

    translations: Record<string, Record<Lang, string>> = {
        'nav.about': { en: 'About', fr: 'À propos' },
        'nav.skills': { en: 'Skills', fr: 'Compétences' },
        'nav.projects': { en: 'Projects', fr: 'Projets' },
        'nav.contact': { en: 'Contact', fr: 'Contact' },
        'hero.greeting': { en: 'Hello, I\'m', fr: 'Bonjour, je suis' },
        'hero.role': { en: 'Full-Stack Web Developer', fr: 'Développeur Web Full-Stack' },
        'hero.btn.projects': { en: 'View Projects', fr: 'Voir Projets' },
        'hero.btn.contact': { en: 'Contact Me', fr: 'Me Contacter' },
        'sect.about': { en: 'About Me', fr: 'À Propos de Moi' },
        'sect.skills': { en: 'Technical Skills', fr: 'Compétences Techniques' },
        'sect.projects': { en: 'Featured Projects', fr: 'Projets Réalisés' },
        'sect.edu': { en: 'Education & Experience', fr: 'Éducation & Expérience' },
        'sect.contact': { en: 'Get In Touch', fr: 'Contactez-moi' },
        'about.text1': {
            en: 'Full-stack web development student in Morocco, passionate about programming and modern technologies. Motivated, curious, and always ready to learn and improve.',
            fr: 'Étudiant en développement web full-stack au Maroc, passionné par la programmation et les technologies modernes. Motivé, curieux et toujours prêt à apprendre et progresser.'
        },
        'about.text2': {
            en: 'I build academic and practical web applications using Angular, React, Node.js, Java, PHP and SQL databases, focusing on clean structure and real-world functionality.',
            fr: 'Je développe des applications web académiques et pratiques avec Angular, React, Node.js, Java, PHP et les bases de données SQL, en mettant l’accent sur une structure propre et des fonctionnalités réelles.'
        },
        'projects.viewLive': { en: 'View Live', fr: 'Voir en direct' },
        'projects.viewCode': { en: 'View Code', fr: 'Voir Code' },
        'edu.bts': { en: 'BTS – Web Development Full-Stack', fr: 'BTS – Développement Web Full-Stack' },
        'edu.bts.period': { en: '2024 - 2026', fr: '2024 - 2026' },
        'edu.bts.desc': {
            en: 'Professional training in full-stack web development: programming, databases, frameworks and software projects.',
            fr: 'Formation professionnelle en développement web full-stack : programmation, bases de données, frameworks et projets logiciels.'
        },
        'exp.intern': { en: 'Full-Stack Internship', fr: 'Stage Full-Stack' },
        'exp.intern.period': { en: 'Jul 2025 – Aug 2025', fr: 'Juil 2025 – Août 2025' },
        'exp.intern.desc': {
            en: 'Contributed to a commercial monitoring web application using React, Node.js, PostgreSQL and Odoo.',
            fr: 'Participation au développement d’une application web de monitoring commercial avec React, Node.js, PostgreSQL et Odoo.'
        },
        'contact.title': { en: 'Let\'s Talk', fr: 'Parlons-en' },
        'contact.subtitle': {
            en: 'Open to internships and junior web developer opportunities. Feel free to contact me for collaboration or projects.',
            fr: 'Ouvert aux stages et opportunités de développeur web junior. N’hésitez pas à me contacter pour une collaboration ou un projet.'
        },
        'contact.email': { en: 'Email', fr: 'Email' },
        'nav.cv': { en: 'CV', fr: 'CV' },
        'hero.cv': { en: 'Download CV', fr: 'Télécharger CV' },
        'contact.btn': { en: 'Send Message', fr: 'Envoyer Message' }
    };

    setLanguage(lang: Lang) {
        this.currentLang.set(lang);
        document.documentElement.lang = lang;
    }

    translate(key: string): string {
        return this.translations[key]?.[this.currentLang()] || key;
    }
}
