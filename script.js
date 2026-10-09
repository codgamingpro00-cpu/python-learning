const localizedManifest = {
    en: {
        navSolutions: "Enterprise Solutions",
        navArchitecture: "Data Platform",
        heroBadge: "v4.0 ENTERPRISE LAYER",
        heroTitle: "Predict Customer Decisions Instantly",
        heroSubtitle: "Leverage neural network modeling algorithms to parse complex structured consumer patterns into clean, actionable analytical frameworks.",
        heroCta: "Initialize Console",
        card1Title: "Precision Index",
        card1Desc: "Real-time vector matching algorithms reduce false predictive analysis anomalies completely.",
        card2Title: "Stream Latency",
        card2Desc: "Sub-millisecond data execution pipelines pipe telemetry directly into internal server systems.",
        card3Title: "Global Nodes",
        card3Desc: "Distributed edge compute points securely guarantee data sovereignty globally across zones.",
        footerNotice: "Engineered for extreme performance compliance protocols."
    },
    fr: {
        navSolutions: "Solutions Entreprise",
        navArchitecture: "Plateforme de Données",
        heroBadge: "COUCHE ENTREPRISE v4.0",
        heroTitle: "Prédisez les Décisions Clients Instantanément",
        heroSubtitle: "Exploitez les algorithmes de réseaux neuronaux pour transformer les comportements complexes en frameworks analytiques exploitables.",
        heroCta: "Initialiser la Console",
        card1Title: "Indice de Précision",
        card1Desc: "Les algorithmes de correspondance vectorielle en temps réel éliminent complètement les anomalies d'analyse prédictive.",
        card2Title: "Latence du Flux",
        card2Desc: "Les pipelines d'exécution inférieurs à la milliseconde injectent la télémétrie directement dans vos serveurs.",
        card3Title: "Nœuds Mondiaux",
        card3Desc: "Les points de calcul distants garantissent une souveraineté totale des données à travers toutes les zones mondiales.",
        footerNotice: "Conçu pour répondre aux protocoles de conformité de haute performance."
    },
    ar: {
        navSolutions: "حلول المؤسسات",
        navArchitecture: "منصة البيانات",
        heroBadge: "الإصدار v4.0 للمؤسسات",
        heroTitle: "توقع قرارات العملاء على الفور",
        heroSubtitle: "استخدم خوارزميات الشبكات العصبية لتحليل سلوك المستهلك المعقد وتحويله إلى أطر عمل تحليلية واضحة وقابلة للتنفيذ المباشر.",
        heroCta: "تشغيل لوحة التحكم",
        card1Title: "مؤشر الدقة العالية",
        card1Desc: "خوارزميات مطابقة المتجهات في الوقت الفعلي تقلل تمامًا من أخطاء التحليل التنبؤية.",
        card2Title: "زمن استجابة الشبكة",
        card2Desc: "خطوط معالجة البيانات فائقة السرعة تنقل البيانات مباشرة إلى أنظمة الخوادم الداخلية الخاصة بك.",
        card3Title: "عقد الحوسبة العالمية",
        card3Desc: "نقاط الحوسبة الطرفية الموزعة تضمن بشكل آمن سيادة البيانات وخصوصيتها عبر جميع المناطق الجغرافية.",
        footerNotice: "تم تطويره ليتوافق مع بروتوكولات الأداء الفائق والامتثال العالمي."
    }
};

const switcher = document.getElementById("localizationTrigger");
const localizedNodes = document.querySelectorAll("[data-key]");

function applyLocalization(targetLanguage) {
    
    document.documentElement.lang = targetLanguage;
    
    
    if (targetLanguage === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }


    localizedNodes.forEach(node => {
        const translationLookupKey = node.getAttribute("data-key");
        if (localizedManifest[targetLanguage] && localizedManifest[targetLanguage][translationLookupKey]) {
            node.textContent = localizedManifest[targetLanguage][translationLookupKey];
        }
    });
}


switcher.addEventListener("change", (event) => {
    applyLocalization(event.target.value);
});
