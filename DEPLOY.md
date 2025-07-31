# 🚀 Guide de Déploiement Vercel - EasyStrat

## Déploiement automatique (Recommandé)

### 1. Prérequis
- Compte GitHub avec le repository `easystrat_site`
- Compte Vercel (gratuit sur [vercel.com](https://vercel.com))

### 2. Déploiement en 1 clic
1. **Connectez-vous sur [vercel.com](https://vercel.com)**
2. **Cliquez "New Project"**
3. **Importez le repository GitHub** `Lofp34/easystrat_site`
4. **Configuration automatique** (Next.js détecté)
5. **Cliquez "Deploy"**

### 3. URL de production
- **Automatique :** `https://easystrat-site.vercel.app`
- **Personnalisée :** Configurable dans Vercel Dashboard

## Configuration avancée

### Variables d'environnement Vercel
Dans le dashboard Vercel > Settings > Environment Variables :

```bash
# Production
NEXT_PUBLIC_SITE_URL=https://easystrat-site.vercel.app
NEXT_PUBLIC_SITE_NAME=EasyStrat

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Domaine personnalisé
1. **Dans Vercel Dashboard > Settings > Domains**
2. **Ajouter :** `easystrat.com`
3. **Configurer DNS :** 
   - A record: `76.76.19.61`
   - CNAME: `cname.vercel-dns.com`

### Build optimisé
```bash
# Le build est automatiquement optimisé avec :
- Next.js 14 App Router
- Image optimization
- Static generation
- Edge functions ready
- SEO automatique
```

## Fonctionnalités Vercel activées

✅ **Automatic deployments** (push GitHub)  
✅ **Preview deployments** (Pull Requests)  
✅ **Edge Network** (CDN global)  
✅ **Image optimization** (WebP, AVIF)  
✅ **Analytics** (Core Web Vitals)  
✅ **Security headers** (configurés)  
✅ **Sitemap generation** (automatique)  

## Performance attendue

### Core Web Vitals
- **FCP:** < 1.2s
- **LCP:** < 2.5s  
- **CLS:** < 0.1
- **FID:** < 100ms

### SEO Score
- **Lighthouse:** 95+ sur mobile/desktop
- **PageSpeed:** 90+ 
- **GTmetrix:** Grade A

## Support

- **Documentation Vercel :** [vercel.com/docs](https://vercel.com/docs)
- **Status page :** [vercel-status.com](https://vercel-status.com)
- **Support :** hello@vercel.com

---

**Le site EasyStrat est optimisé pour Vercel et prêt pour la production ! 🌟**