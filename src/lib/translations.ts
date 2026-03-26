export type Lang = "fr" | "en";

export const translations = {
  // Navigation
  nav: {
    accueil: { fr: "Accueil", en: "Home" },
    collections: { fr: "Collections", en: "Collections" },
    laBoutique: { fr: "La Boutique", en: "The Boutique" },
    contact: { fr: "Contact", en: "Contact" },
    nousAppeler: { fr: "Nous appeler", en: "Call us" },
    subtitle: { fr: "Lingerie & Pr\u00eat-\u00e0-porter", en: "Lingerie & Ready-to-wear" },
  },

  // Home page
  home: {
    heroSubtitle: { fr: "Papeete, Tahiti \u2014 Depuis 41 ans", en: "Papeete, Tahiti \u2014 Since 41 years" },
    heroTitle1: { fr: "L\u2019\u00e9l\u00e9gance", en: "Elegance" },
    heroTitle2: { fr: "se vit au quotidien", en: "lived every day" },
    heroText: {
      fr: "Lingerie fine, maillots de bain et pr\u00eat-\u00e0-porter. Les plus belles marques fran\u00e7aises au coeur de Papeete.",
      en: "Fine lingerie, swimwear and ready-to-wear. The finest French brands in the heart of Papeete.",
    },
    heroBtn1: { fr: "Voir les collections", en: "View collections" },
    heroBtn2: { fr: "Notre histoire", en: "Our story" },

    collectionsLabel: { fr: "Nos collections", en: "Our collections" },
    collectionsTitle: { fr: "Raffinement et sensualit\u00e9", en: "Refinement and sensuality" },

    collectionsData: [
      {
        title: { fr: "Lingerie", en: "Lingerie" },
        description: {
          fr: "Aubade, Lise Charmel, Huit \u2014 des collections d\u2019exception.",
          en: "Aubade, Lise Charmel, Huit \u2014 exceptional collections.",
        },
      },
      {
        title: { fr: "Pr\u00eat-\u00e0-porter", en: "Ready-to-wear" },
        description: {
          fr: "Robes, ensembles, kimonos \u2014 l\u2019\u00e9l\u00e9gance au quotidien.",
          en: "Dresses, ensembles, kimonos \u2014 everyday elegance.",
        },
      },
      {
        title: { fr: "Accessoires", en: "Accessories" },
        description: {
          fr: "Sacs, bijoux, accessoires \u2014 les d\u00e9tails qui font la diff\u00e9rence.",
          en: "Bags, jewelry, accessories \u2014 the details that make the difference.",
        },
      },
      {
        title: { fr: "Lingerie Invisible", en: "Invisible Lingerie" },
        description: {
          fr: "Magic Bodyfashion \u2014 maintien invisible, effet naturel.",
          en: "Magic Bodyfashion \u2014 invisible support, natural effect.",
        },
      },
    ],

    brandsLabel: { fr: "Nos marques", en: "Our brands" },
    brandsTitle: { fr: "L\u2019excellence fran\u00e7aise", en: "French excellence" },

    philosophyLabel: { fr: "Notre philosophie", en: "Our philosophy" },
    philosophyTitle: { fr: "La lingerie comme", en: "Lingerie as" },
    philosophyTitle2: { fr: "une seconde peau", en: "a second skin" },
    philosophyP1: {
      fr: "Depuis 41 ans, la Boutique P\u00e9n\u00e9lope s\u00e9lectionne les plus belles collections de lingerie fran\u00e7aise. Chaque pi\u00e8ce est choisie pour sa qualit\u00e9, son \u00e9l\u00e9gance et sa capacit\u00e9 \u00e0 sublimer la f\u00e9minit\u00e9.",
      en: "For 41 years, Boutique P\u00e9n\u00e9lope has selected the finest French lingerie collections. Each piece is chosen for its quality, elegance and ability to enhance femininity.",
    },
    philosophyP2: {
      fr: "De la dentelle d\u00e9licate aux coupes contemporaines, nous proposons une lingerie qui se vit au quotidien \u2014 raffin\u00e9e, confortable, et r\u00e9solument f\u00e9minine.",
      en: "From delicate lace to contemporary cuts, we offer lingerie for everyday living \u2014 refined, comfortable, and resolutely feminine.",
    },
    philosophyBtn: { fr: "D\u00e9couvrir les collections", en: "Discover collections" },

    quote: {
      fr: "La lingerie parfaite ne se voit pas, mais elle change tout.",
      en: "Perfect lingerie is invisible, but it changes everything.",
    },
    quoteName: { fr: "Boutique P\u00e9n\u00e9lope", en: "Boutique P\u00e9n\u00e9lope" },
  },

  // Collections page
  collections: {
    label: { fr: "Nos collections", en: "Our collections" },
    title: { fr: "Raffinement et sensualit\u00e9", en: "Refinement and sensuality" },
    subtitle: {
      fr: "Aubade, Lise Charmel, Huit \u2014 les plus belles marques fran\u00e7aises s\u00e9lectionn\u00e9es avec soin depuis 41 ans.",
      en: "Aubade, Lise Charmel, Huit \u2014 the finest French brands carefully selected for 41 years.",
    },
    sections: [
      {
        title: { fr: "Lingerie", en: "Lingerie" },
        description: {
          fr: "Des pi\u00e8ces d\u2019exception sign\u00e9es Aubade, Lise Charmel et Huit. Dentelle fine, satin d\u00e9licat, coupes sublimantes.",
          en: "Exceptional pieces by Aubade, Lise Charmel and Huit. Fine lace, delicate satin, enhancing cuts.",
        },
      },
      {
        title: { fr: "Pr\u00eat-\u00e0-porter", en: "Ready-to-wear" },
        description: {
          fr: "Robes chinoises, kimonos satin\u00e9s, ensembles \u00e9l\u00e9gants \u2014 des pi\u00e8ces d\u2019exception pour chaque occasion.",
          en: "Chinese dresses, satin kimonos, elegant ensembles \u2014 exceptional pieces for every occasion.",
        },
      },
      {
        title: { fr: "Accessoires", en: "Accessories" },
        description: {
          fr: "Sacs tress\u00e9s, bijoux, accessoires intimes \u2014 les finitions parfaites d\u2019un look r\u00e9ussi.",
          en: "Woven bags, jewelry, intimate accessories \u2014 the perfect finishing touches.",
        },
      },
      {
        title: { fr: "Lingerie Invisible", en: "Invisible Lingerie" },
        description: {
          fr: "Magic Bodyfashion \u2014 sans bretelles, sans dos, sans compromis. L\u2019effet naturel et le maintien invisible pour vos robes dos-nu et d\u00e9collet\u00e9s.",
          en: "Magic Bodyfashion \u2014 strapless, backless, no compromises. Natural effect and invisible support for your backless dresses and low necklines.",
        },
      },
    ],
  },

  // La Boutique page
  boutique: {
    historyLabel: { fr: "Notre histoire", en: "Our story" },
    historyTitle1: { fr: "41 ans de f\u00e9minit\u00e9", en: "41 years of femininity" },
    historyTitle2: { fr: "et d\u2019\u00e9l\u00e9gance", en: "and elegance" },
    historyP1: {
      fr: "Depuis 1984, la Boutique P\u00e9n\u00e9lope est le rendez-vous incontournable des femmes de Papeete qui recherchent l\u2019\u00e9l\u00e9gance et le raffinement.",
      en: "Since 1984, Boutique P\u00e9n\u00e9lope has been the essential destination for women in Papeete seeking elegance and refinement.",
    },
    historyP2: {
      fr: "Situ\u00e9e Rue Lagarde, en plein centre-ville, notre boutique vous accueille dans un \u00e9crin de douceur o\u00f9 chaque pi\u00e8ce est s\u00e9lectionn\u00e9e avec passion pour sublimer votre f\u00e9minit\u00e9.",
      en: "Located on Rue Lagarde, in the heart of the city, our boutique welcomes you in a haven of softness where each piece is passionately selected to enhance your femininity.",
    },
    historyP3: {
      fr: "Des grandes maisons de lingerie fran\u00e7aise aux accessoires les plus raffin\u00e9s, nous vous guidons dans vos choix avec bienveillance et expertise.",
      en: "From the great French lingerie houses to the most refined accessories, we guide your choices with care and expertise.",
    },

    brandsLabel: { fr: "Nos partenaires", en: "Our partners" },
    brandsTitle: { fr: "Les marques que nous aimons", en: "The brands we love" },
    brands: [
      {
        name: "Aubade",
        text: {
          fr: "Maison fran\u00e7aise de lingerie de luxe. L\u2019art de la s\u00e9duction depuis 1958.",
          en: "French luxury lingerie house. The art of seduction since 1958.",
        },
      },
      {
        name: "Lise Charmel",
        text: {
          fr: "Lingerie haut de gamme lyonnaise. Dentelle, broderie et savoir-faire d\u2019exception.",
          en: "High-end Lyon lingerie. Lace, embroidery and exceptional craftsmanship.",
        },
      },
      {
        name: "Huit",
        text: {
          fr: "Lingerie fran\u00e7aise contemporaine. Des coupes modernes qui subliment chaque morphologie.",
          en: "Contemporary French lingerie. Modern cuts that enhance every body shape.",
        },
      },
    ],

    approachLabel: { fr: "Notre approche", en: "Our approach" },
    approachTitle: { fr: "Un conseil personnalis\u00e9", en: "Personalized advice" },
    approachP1: {
      fr: "Chez P\u00e9n\u00e9lope, nous croyons que la lingerie est bien plus qu\u2019un sous-v\u00eatement. C\u2019est une seconde peau, un geste de beaut\u00e9 quotidien qui permet \u00e0 chaque femme d\u2019exprimer sa personnalit\u00e9 et sa sensualit\u00e9.",
      en: "At P\u00e9n\u00e9lope, we believe lingerie is much more than underwear. It is a second skin, a daily beauty ritual that allows every woman to express her personality and sensuality.",
    },
    approachP2: {
      fr: "Notre \u00e9quipe vous accueille avec discr\u00e9tion et bienveillance pour vous aider \u00e0 trouver la pi\u00e8ce parfaite \u2014 celle qui vous fera vous sentir belle, confiante et f\u00e9minine.",
      en: "Our team welcomes you with discretion and care to help you find the perfect piece \u2014 the one that will make you feel beautiful, confident and feminine.",
    },
    approachBtn: { fr: "Voir les collections", en: "View collections" },
  },

  // Contact page
  contact: {
    label: { fr: "Nous trouver", en: "Find us" },
    title: { fr: "Contactez-nous", en: "Contact us" },
    subtitle: {
      fr: "Passez nous voir en boutique ou contactez-nous par t\u00e9l\u00e9phone.",
      en: "Visit us in store or contact us by phone.",
    },
    phoneLabel: { fr: "T\u00e9l\u00e9phone", en: "Phone" },
    emailLabel: { fr: "Email", en: "Email" },
    addressLabel: { fr: "Adresse", en: "Address" },
    addressCity: { fr: "Papeete 98713, Tahiti", en: "Papeete 98713, Tahiti" },
    addressNote: { fr: "Centre-ville de Papeete", en: "Downtown Papeete" },
    hoursLabel: { fr: "Horaires d\u2019ouverture", en: "Opening hours" },
    messenger: { fr: "Envoyer un message", en: "Send a message" },
    facebook: { fr: "Boutique Penelope Tahiti", en: "Boutique Penelope Tahiti" },
  },

  // Footer
  footer: {
    description: {
      fr: "Lingerie fine, maillots de bain et pr\u00eat-\u00e0-porter depuis 41 ans \u00e0 Papeete.",
      en: "Fine lingerie, swimwear and ready-to-wear for 41 years in Papeete.",
    },
    accueil: { fr: "Accueil", en: "Home" },
    collections: { fr: "Collections", en: "Collections" },
    laBoutique: { fr: "La Boutique", en: "The Boutique" },
    contact: { fr: "Contact", en: "Contact" },
    phoneLabel: { fr: "T\u00e9l\u00e9phone", en: "Phone" },
    messenger: { fr: "Envoyer un message", en: "Send a message" },
    addressLabel: { fr: "Adresse", en: "Address" },
    hoursLabel: { fr: "Horaires", en: "Hours" },
    hoursMF: { fr: "Lun \u2014 Ven : 8h30 \u2014 17h", en: "Mon \u2014 Fri: 8:30am \u2014 5pm" },
    hoursSat: { fr: "Sam : 8h30 \u2014 14h", en: "Sat: 8:30am \u2014 2pm" },
    copyright: { fr: "Boutique P\u00e9n\u00e9lope. Tous droits r\u00e9serv\u00e9s.", en: "Boutique P\u00e9n\u00e9lope. All rights reserved." },
  },

  // OpenStatus
  openStatus: {
    days: {
      fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    open: { fr: "Ouvert", en: "Open" },
    closed: { fr: "Ferm\u00e9", en: "Closed" },
  },

  // Phone button
  phone: {
    nousAppeler: { fr: "Nous appeler \u2014 40 42 93 87", en: "Call us \u2014 40 42 93 87" },
  },
} as const;

export function t(obj: { fr: string; en: string }, lang: Lang): string {
  return obj[lang];
}
