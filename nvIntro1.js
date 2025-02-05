// Developed by: @nrzmalik

// Helper function for updating CSS
const updateHelperCSS = () => {
  const helperLayer = document.querySelector('.introjs-helperLayer');
  if (helperLayer) {
    helperLayer.style.boxShadow = 'rgba(115, 115, 115, 0.8) 0px 0px 1px 2px, rgba(115, 115, 115, 0.5) 0px 0px 0px 5000px';
    
  }
};

// Observer setup
const observeHelperLayer = () => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        Array.from(mutation.addedNodes).forEach(node => {
          if (node.classList?.contains('introjs-helperLayer')) {
            updateHelperCSS();
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};


// Device detection
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Tour configuration management
class TourConfig {
  static defaultElements = {
    slide: '.acc-blocker',
    resources: isMobile() ? '#top-ellipsis' : '#links-right',
    menu: isMobile() ? '#hamburger' : '#outline-content',
    playback: isMobile() ? '#play-pause' : '#playback-controls',
    captions: '#captions',
    prev: '#prev',
    next: '#next',
    volume: '#volume'
    transcript :'#transcript-link'
  };

  static defaultSteps = isMobile() 
    ? ['slide', 'resources', 'menu', 'playback', 'next', 'prev', 'captions'] 
    : ['slide', 'resources', 'menu', 'playback', 'next', 'prev', 'volume', 'captions'];
  
  static getStepConfig(elementKey, language) {
    // Skip volume step if on mobile
    if (isMobile() && elementKey === 'volume') {
      return null;
    }
    
    return {
      element: this.defaultElements[elementKey],
      intro: TranslationManager.getTranslation(elementKey, language),
      title: TranslationManager.getTitle(elementKey, language)
    };
  }
}

// Translation management
class TranslationManager {
  static languages = {
    english: 'en',
    arabic: 'ar', 
    urdu: 'ur',
    dutch: 'nl',
    spanish: 'es',
    french: 'fr',
    mandarin: 'zh',
    portuguese: 'pt',
    romanian: 'ro',
    polish: 'pl'
  };

  static translations = {
    intro: {
      en: 'Welcome to the course! This is the slide area where the course content will be displayed.',
      ar: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة.',
      ur: 'کورس میں خوش آمدید! یہاں سلائیڈ کا علاقہ ہے جہاں کورس کی مواد کی عرض ہوگی.',
      nl: 'Welkom bij de cursus! Dit is het schuifgebied waar de cursusinhoud wordt weergegeven.',
      es: '¡Bienvenido/a al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso.',
      fr: 'Bienvenue dans le cours ! C est ici que sera affiché le contenu du cours.',
      zh: '欢迎来到课程！这是显示课程内容的幻灯片区域。',
      pt: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido.',
      ro: 'Bine ai venit la curs! Aceasta este zona din slide unde continutul cursului va fi afisat. Foloseste butoanele de navigare pentru a te deplasa intre slideuri. Aceasta este zona de diapozitive unde va fi afișat conținutul cursului.',
      pl: 'Witaj na kursie! To obszar slajdu, gdzie wyświetlane będą treści kursu.'
    },
    titles: {
      slide: {
        en: 'Slide Area',
        ar: 'منطقة الشريحة',
        ur: 'سلائیڈ علاقہ',
        nl: 'Schuifgebied',
        es: 'Área de diapositiva',
        fr: 'Zone de diapositive',
        zh: '幻灯片区域',
        pt: 'Área do slide',
        ro: 'Zona de diapozitive',
        pl: 'Obszar slajdu'
      },
      resources: {
        en: 'Helpful Resources',
        ar: 'موارد مفيدة',
        ur: 'مددگار وسائل',
        nl: 'Handige bronnen',
        es: 'Recursos útiles',
        fr: 'Ressources utiles',
        zh: '有用资源',
        pt: 'Recursos Úteis',
        ro: 'Resurse utile',
        pl: 'Pomocne zasoby'
      },
      menu: {
        en: 'Course Menu',
        ar: 'قائمة الدورة',
        ur: 'کورس کی مینو',
        nl: 'Cursusmenu',
        es: 'Menú del curso',
        fr: 'Menu du cours',
        zh: '课程菜单',
        pt: 'Menu do Curso',
        ro: 'Meniul cursului este afisat aici. El ofera o perspectiva de ansamblu asupra structurii cursului si iti permite sa sari direct la sectiuni sau module specifice. l cursului',
        pl: 'Menu kursu'
      },
      playback: {
        en: 'Playback Controls',
        ar: 'عناصر تحكم التشغيل',
        ur: 'پلے بیک کنٹرولز',
        nl: 'Afspeelbediening',
        es: 'Controles de reproducción',
        fr: 'Contrôles de lecture',
        zh: '播放控制',
        pt: 'Controles de Reprodução',
        ro: 'Controale de redare',
        pl: 'Kontrolki odtwarzania'
      },
      next: {
        en: 'Next Slide',
        ar: 'الشريحة التالية',
        ur: 'اگلی سلائیڈ',
        nl: 'Volgende dia',
        es: 'Siguiente diapositiva',
        fr: 'Diapositive suivante',
        zh: '下一张幻灯片',
        pt: 'Próximo slide',
        ro: 'Următoarea diapozitivă',
        pl: 'Następny slajd'
      },
      prev: {
        en: 'Previous Slide',
        ar: 'الشريحة السابقة',
        ur: 'پچھلی سلائیڈ',
        nl: 'Vorige dia',
        es: 'Diapositiva anterior',
        fr: 'Diapositive précédente',
        zh: '上一张幻灯片',
        pt: 'Slide anterior',
        ro: 'Diapozitivul anterior',
        pl: 'Poprzedni slajd'
      },
      volume: {
        en: 'Volume Control',
        ar: 'التحكم في مستوى الصوت',
        ur: 'آواز کنٹرول',
        nl: 'Volumeregeling',
        es: 'Control de volumen',
        fr: 'Contrôle du volume',
        zh: '音量控制',
        pt: 'Controle de volume',
        ro: 'Controlul volumului',
        pl: 'Regulacja głośności'
      },
      captions: {
        en: 'Captions',
        ar: 'التسميات التوضيحية',
        ur: 'کیپشنز',
        nl: 'Ondertitels',
        es: 'Subtítulos',
        fr: 'Sous-titres',
        zh: '字幕',
        pt: 'Legendas',
        ro: 'Subtitrări',
        pl: 'Napisy'
      },
      transcript: {
        en: 'Transcript',
        ar: 'التسميات التوضيحية',
        ur: 'کیپشنز',
        nl: 'Ondertitels',
        es: 'Subtítulos',
        fr: 'Sous-titres',
        zh: '字幕',
        pt: 'Legendas',
        ro: 'Subtitrări',
        pl: 'Napisy'
      }
    },
    slide: {
      en: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      ar: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة. استخدم أزرار التنقل للتحرك بين الشرائح.',
      ur: 'کورس میں خوش آمدید! یہ سلائیڈ کا علاقہ ہے جہاں کورس کا مواد دکھایا جائے گا۔ سلائیڈز کے درمیان منتقل ہونے کے لیے نیویگیشن بٹنوں کا استعمال کریں۔',
      nl: 'Welkom bij de cursus! Dit is het gebied waar de cursusinhoud wordt weergegeven. Gebruik de navigatieknoppen om tussen dia\'s te schakelen.',
      es: '¡Bienvenido/a al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para desplazarte entre las diapositivas.',
      fr: 'Bienvenue dans le cours ! Voici la zone où le contenu du cours sera affiché. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      zh: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      pt: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para mover-se entre os slides.',
      ro: 'Bine ai venit la curs! Aceasta este zona din slide unde continutul cursului va fi afisat. Foloseste butoanele de navigare pentru a te deplasa intre slideuri. Aceasta este zona de diapozitive unde va fi afișat conținutul cursului. Folosește butoanele de navigare pentru a trece între diapozitive.',
      pl: 'Witaj na kursie! To obszar slajdu, gdzie będą wyświetlane treści kursu. Użyj przycisków nawigacyjnych, aby przechodzić między slajdami.'
    },
    resources: {
      en: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      ar: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      ur: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      nl: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      es: 'Recursos útiles: aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      fr: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      zh: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      pt: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.',
      ro: 'Aici poti gasi resurse ajutatoare legate de curs. Apasa pe linkurile afisate pentru a accesa materiale sau referinte aditionale. Aici poți găsi resurse utile legate de curs. Apasă pe linkuri pentru a accesa materiale sau referințe suplimentare.',
      pl: 'Zasoby: Tu znajdziesz pomocne zasoby związane z kursem. Kliknij na linki, aby uzyskać dodatkowe materiały lub odwołania.'
    },
    menu: {
      en: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      ar: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      ur: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      nl: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      es: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      fr: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      zh: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      pt: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.',
      ro: 'Meniul cursului este afisat aici. El ofera o perspectiva de ansamblu asupra structurii cursului si iti permite sa sari direct la sectiuni sau module specifice. Meniul cursului este localizat aici. Oferă o privire de ansamblu asupra structurii cursului și îți permite să sari la secțiuni sau module specifice.',
      pl: 'Menu: Menu kursu znajduje się tutaj. Zapewnia przegląd struktury kursu i pozwala przejść do konkretnych sekcji lub modułów.'
    },
    playback: {
      en: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      ar: 'تتيح لك هذه المراقبات تشغيل أو إيقاف تشغيل تشغيل الشرائح. يمكنك التحكم في وتيرة محتوى الدورة بناءً على تفضيلاتك.',
      ur: 'یہ کنٹرولز آپ کو اسلائیڈ پلے بیک کو چلانے یا روکنے کی اجازت دیتے ہیں. آپ اپنی ترجیحات کے مطابق کورس مواد کی رفتار کو کنٹرول کرسکتے ہیں.',
      nl: 'Met deze bedieningselementen kun je de diavoorstelling afspelen of pauzeren. Je kunt de snelheid van de cursusinhoud naar wens regelen.',
      es: 'Estos controles te permiten reproducir o pausar la reproducción de diapositivas. Puedes controlar el ritmo del contenido del curso según tus preferencias.',
      fr: 'Ces commandes vous permettent de lire ou de mettre en pause la lecture des diapositives. Vous pouvez contrôler le rythme du contenu du cours en fonction de vos préférences.',
      zh: '这些控件允许您播放或暂停幻灯片播放。您可以根据自己的偏好控制课程内容的节奏。',
      pt: 'Esses controles permitem que você reproduza ou pause a reprodução dos slides. Você pode controlar o ritmo do conteúdo do curso com base em suas preferências.',
      ro: 'Aceste controale îți permit să redai sau să pui pauză la redarea diapozitivelor. Poți controla ritmul conținutului cursului în funcție de preferințele tale.',
      pl: 'Te kontrolki umożliwiają odtwarzanie lub wstrzymywanie slajdów. Możesz kontrolować tempo treści kursu w zależności od swoich preferencji.'
    },
    captions: {
      en: 'These captions provide additional information about the course multimdeia content, making it easier to follow along.',
      ar: 'توفر هذه التسميات التوضيحية معلومات إضافية حول محتوى الدورة، مما يسهل متابعتها.',
      ur: 'یہ کیپشن کورس کے مواد کے بارے میں اضافی معلومات فراہم کرتے ہیں، جو اسے سمجھنے میں آسانی فراہم کرتے ہیں۔',
      nl: 'Deze ondertitels geven extra informatie over de cursusinhoud, zodat je makkelijker kunt volgen.',
      es: 'Estos subtítulos proporcionan información adicional sobre el contenido del curso, facilitando su seguimiento.',
      fr: 'Ces sous-titres fournissent des informations supplémentaires sur le contenu du cours, facilitant ainsi la compréhension.',
      zh: '这些字幕提供了关于课程内容的额外信息，使其更容易理解。',
      pt: 'Essas legendas fornecem informações adicionais sobre o conteúdo do curso, facilitando o acompanhamento.',
      ro: 'Aceste subtitrări oferă informații suplimentare despre conținutul cursului, facilitând urmărirea acestuia.',
      pl: 'Te napisy zapewniają dodatkowe informacje o treści kursu, ułatwiając jego śledzenie.'
    },
    next: {
      en: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      ar: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      ur: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں۔ یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا۔',
      nl: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      es: 'Haz clic en el botón "Siguiente" para pasar a la siguiente diapositiva. Te llevará al siguiente tema o módulo del curso.',
      fr: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      zh: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      pt: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.',
      ro: 'Pentru a trece la următoarea diapozitivă, apasă pe butonul "Următorul". Te va duce la următorul subiect sau modul din curs.',
      pl: 'Aby przejść do następnego slajdu, kliknij przycisk "Dalej". Przeniesie cię do następnego tematu lub modułu kursu.'
    },
    prev: {
      en: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      ar: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      ur: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں۔ یہ آپ کو پچھلے موضوع یا ماڈیول پر لے جائے گا۔',
      nl: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      es: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      fr: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      zh: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      pt: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.',
      ro: 'Dacă dorești să te întorci la diapozitivul anterior, folosește butonul "Anterior".',
      pl: 'Jeśli chcesz wrócić do poprzedniego slajdu, użyj przycisku "Wstecz". Przeniesie cię do poprzedniego tematu lub modułu.'
    },
    volume: {
      en: 'This button allows you to adjust the volume for the course content.',
      ar: 'هذا الزر يسمح لك بتعديل مستوى الصوت لمحتوى الدورة.',
      ur: 'یہ بٹن آپ کو کورس مواد کے لئے آواز کی سطح کو ایڈجسٹ کرنے کی اجازت دیتا ہے۔',
      nl: 'Deze knop stelt je in staat het volume van de cursusinhoud aan te passen.',
      es: 'Este botón te permite ajustar el volumen del contenido del curso.',
      fr: 'Ce bouton vous permet de régler le volume du contenu du cours.',
      zh: '此按钮可让您调整课程内容的音量。',
      pt: 'Este botão permite ajustar o volume do conteúdo do curso.',
      ro: 'Acest buton îți permite să ajustezi volumul pentru conținutul cursului.',
      pl: 'Ten przycisk umożliwia regulację głośności treści kursu.'
    },
    transcript: {
      en: 'This button allows you to adjust the Transc for the course content.',
      ar: 'هذا الزر يسمح لك بتعديل مستوى الصوت لمحتوى الدورة.',
      ur: 'یہ بٹن آپ کو کورس مواد کے لئے آواز کی سطح کو ایڈجسٹ کرنے کی اجازت دیتا ہے۔',
      nl: 'Deze knop stelt je in staat het volume van de cursusinhoud aan te passen.',
      es: 'Este botón te permite ajustar el volumen del contenido del curso.',
      fr: 'Ce bouton vous permet de régler le volume du contenu du cours.',
      zh: '此按钮可让您调整课程内容的音量。',
      pt: 'Este botão permite ajustar o volume do conteúdo do curso.',
      ro: 'Acest buton îți permite să ajustezi volumul pentru conținutul cursului.',
      pl: 'Ten przycisk umożliwia regulację głośności treści kursu.'
    }
    
  };

  static addLanguage(langCode, translations) {
    this.languages[langCode] = langCode;
    Object.keys(translations).forEach(key => {
      if (!this.translations[key]) {
        this.translations[key] = {};
      }
      this.translations[key][langCode] = translations[key];
    });
  }

  static getTranslation(key, language) {
    return this.translations[key]?.[this.languages[language]] || this.translations[key]?.en;
  }

  static getTitle(key, language) {
    return this.translations['titles'][key]?.[this.languages[language]] || this.translations['titles'][key]?.en || '';
  }
}


class IntroTour {
  constructor(options = {}) {
    this.language = options.language || 'english';
    this.steps = options.steps || TourConfig.defaultSteps;
    this.customElements = options.elements || {};
  }

  getElements() {
    return { ...TourConfig.defaultElements, ...this.customElements };
  }

  getSteps() {
    return this.steps
      .map(step => {
        if (step.startsWith('#')) {
          return {
            element: step,
            intro: `Custom element with id ${step}`,
            title: `Custom Element: ${step}`
          };
        } else {
          const config = TourConfig.getStepConfig(step, this.language);
          // Skip null configs (like volume on mobile)
          if (!config) return null;
          return {
            element: config.element,
            intro: config.intro || 'No description available.',
            title: config.title || 'No title available.'
          };
        }
      })
      .filter(step => step !== null); // Remove null steps
  }

  start() {
    observeHelperLayer();
    
    introJs().setOptions({
      steps: this.getSteps(),
      showStepNumbers: true,
      showBullets: false,
      tooltipClass: 'customTooltipClass',
      titleClass: 'customTitleClass'
    }).start();
  }
}

// Usage examples:
const startBasicTour = (language) => {
  new IntroTour({ language }).start();
};

const startCustomTour = (options) => {
  new IntroTour(options).start();
};

// Example of adding a new language
const addNewLanguage = (langCode, translations) => {
  TranslationManager.addLanguage(langCode, translations);
};

// Example usage:
/*
// Basic usage
startBasicTour('english');

// Custom tour with specific steps
startCustomTour({
  language: 'spanish',
  steps: ['slide', 'menu', 'next', '#custom-element'],
});

// Adding a new language
addNewLanguage('de', {
  intro: 'Willkommen zum Kurs!',
  // ... other translations
});
*/
