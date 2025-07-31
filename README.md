# EasyStrat - Site Web

La plateforme qui transforme la stratégie en résultats concrets.

## 🚀 À propos

EasyStrat centralise et relie vos agendas, CRM, projets et opérations dans une application SaaS modulable. Des strats métier adaptées à votre contexte pour prendre une longueur d'avance.

## 🛠️ Stack technique

- **Frontend** : Next.js 14+ avec React 18+ (App Router)
- **Styling** : Tailwind CSS + Framer Motion
- **Backend** : Supabase (PostgreSQL + Auth + Real-time)
- **Déploiement** : Vercel
- **Hébergement** : GitHub
- **Langage** : TypeScript

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/easystrat-site.git
cd easystrat-site
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
```bash
cp .env.example .env.local
```

Remplir les variables dans `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=votre-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-supabase
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
easystrat_site/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   ├── components/             # Composants React réutilisables
│   ├── lib/                    # Utilitaires et configurations
│   ├── styles/                 # Styles globaux
│   └── types/                  # Types TypeScript
├── public/                     # Assets statiques
├── supabase/                   # Migrations et configurations Supabase
├── docs/                       # Documentation
└── .cursor/rules/              # Règles Cursor
```

## 🎨 Design System

### Couleurs EasyStrat
- **Bleu Minuit** : `#0B1E3A` (confiance, fond principal)
- **Cyan Électrique** : `#1BD0F2` (innovation, accents)
- **Corail Action** : `#FF6A5A` (CTA, actions)
- **Ivoire UI** : `#F8F7F4` (fond chaud, contenu)
- **Gris Pierre** : `#A9B0B8` (texte secondaire)

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Hiérarchie** : H1-H6 avec tailles responsives

## 📱 Pages principales

1. **Accueil** (`/`) - Hero, social proof, briques clés
2. **Solution** (`/solution`) - Concept "noyau + strats"
3. **Fonctionnalités** (`/fonctionnalites/*`) - Pages dédiées
4. **Secteurs** (`/secteurs/*`) - Auto, Immobilier, etc.
5. **Tarifs** (`/tarifs`) - Plans et abonnement
6. **Ressources** (`/ressources`) - Guides et études
7. **À propos** (`/a-propos`) - Mission et équipe
8. **Contact** (`/contact`) - Formulaire et démo
9. **Auth** (`/connexion`, `/inscription`) - Login/Signup

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run type-check   # Vérification TypeScript
```

## 🚀 Déploiement

### Vercel (recommandé)
1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déploiement automatique à chaque push sur `main`

### Variables d'environnement requises
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (pour les API routes)

## 📚 Documentation

- [Description du projet](Description.txt)
- [Règles Cursor](.cursor/rules/)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Supabase](https://supabase.com/docs)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site web** : [easystrat.com](https://easystrat.com)
- **Email** : contact@easystrat.com
- **GitHub** : [@easystrat](https://github.com/easystrat)

---

**EasyStrat** - La stratégie n'attend pas : planifiez, reliez, exécutez. 