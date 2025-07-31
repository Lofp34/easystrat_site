import React from 'react'

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EasyStrat",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "CRM, Project Management, Business Productivity",
    "operatingSystem": "Web Browser",
    "description": "Plateforme SaaS tout-en-un qui synchronise agendas, CRM, projets et opérations pour PME et ETI. Strats métier spécialisées par secteur.",
    "url": "https://easystrat.com",
    "screenshot": "https://easystrat.com/images/app-screenshot.jpg",
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "EasyStrat",
      "url": "https://easystrat.com",
      "logo": "https://easystrat.com/images/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/easystrat",
        "https://twitter.com/easystrat"
      ]
    },
    "publisher": {
      "@type": "Organization", 
      "name": "EasyStrat",
      "logo": {
        "@type": "ImageObject",
        "url": "https://easystrat.com/images/logo.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "EasyStrat"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Agenda augmenté intelligent",
      "CRM avec pipeline automatisé", 
      "Gestion de projet intégrée",
      "Facturation et paiements",
      "Tableau de bord temps réel",
      "Strats métier par secteur",
      "Synchronisation multi-outils",
      "Rapports et analytics"
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://easystrat.com"
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'EasyStrat ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EasyStrat est une plateforme SaaS tout-en-un qui centralise et synchronise vos agendas, CRM, projets et opérations. Elle propose des strats métier adaptées à votre secteur d'activité."
        }
      },
      {
        "@type": "Question", 
        "name": "Pour quels secteurs EasyStrat est-il adapté ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EasyStrat propose des strats métier spécialisées pour l'automobile, l'immobilier, le bâtiment, l'hôtellerie-restauration (CHR) et la formation. La plateforme s'adapte aux besoins spécifiques de chaque secteur."
        }
      },
      {
        "@type": "Question",
        "name": "EasyStrat propose-t-il un essai gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Oui, EasyStrat propose un essai gratuit pour tester toutes les fonctionnalités de la plateforme avant de choisir votre plan d'abonnement."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}

export default StructuredData