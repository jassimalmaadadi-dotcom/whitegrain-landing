const revealItems = document.querySelectorAll(".scroll-reveal");
const languageButtons = document.querySelectorAll("[data-lang]");
let currentLanguage = localStorage.getItem("whiteGrainLanguage") || "en";

const arabicCopy = {
  "Problem": "المشكلة",
  "How it works": "كيف يعمل",
  "AI analysis": "تحليل بالذكاء الاصطناعي",
  "Checks": "ما الذي يفحصه",
  "Report": "التقرير",
  "Compare": "قارن",
  "Notify me": "أبلغني",
  "Launching for people building and renovating in Qatar": "قريباً لمن يبني أو يرمم في قطر",
  "Advanced AI for checking construction quotes before you sign.": "ذكاء اصطناعي متقدم لمراجعة عروض البناء قبل التوقيع.",
  "WhiteGrain will use advanced artificial intelligence to read your contractor quote, BOQ, contract, technical specs, drawings, and material list. It turns them into a clear dashboard with cost context, missing details, discrepancies, risks, recommendations, and answers to your questions.": "يستخدم WhiteGrain الذكاء الاصطناعي المتقدم لقراءة عرض المقاول، جدول الكميات، العقد، المواصفات الفنية، المخططات، وقائمة المواد. ثم يحولها إلى لوحة واضحة تعرض سياق التكلفة، التفاصيل الناقصة، التعارضات، المخاطر، التوصيات، وإجابات على أسئلتك.",
  "Advanced AI analysis": "تحليل متقدم بالذكاء الاصطناعي",
  "Cost estimate": "تقدير التكلفة",
  "BOQ and quote review": "مراجعة جدول الكميات والعرض",
  "Project dashboard": "لوحة المشروع",
  "Ask your documents": "اسأل مستنداتك",
  "Notify me when it launches": "أبلغني عند الإطلاق",
  "See how it works": "اعرف كيف يعمل",
  "The problem": "المشكلة",
  "Most construction surprises are hidden in vague quotes.": "معظم مفاجآت البناء تكون مخفية داخل عروض غير واضحة.",
  "A contractor quote can look complete while still missing the details that decide the real cost, quality, and payment risk.": "قد يبدو عرض المقاول كاملاً، لكنه قد يفتقد التفاصيل التي تحدد التكلفة الحقيقية، الجودة، ومخاطر الدفعات.",
  "\"Tiles included\"": "\"البلاط مشمول\"",
  "No brand, size, allowance, supplier, installation rule, or credit if you choose cheaper tiles.": "لا توجد علامة تجارية، مقاس، قيمة مخصصة، مورد، طريقة تركيب، أو قاعدة فرق السعر إذا اخترت بلاطاً أرخص.",
  "\"AC lump sum\"": "\"التكييف مبلغ إجمالي\"",
  "No brand, tonnage, duct insulation, testing, commissioning, or upgrade rule.": "لا توجد علامة تجارية، طن التبريد، عزل الدكت، اختبار، تشغيل، أو قاعدة للترقية.",
  "\"Waterproofing included\"": "\"العزل المائي مشمول\"",
  "No system, membrane type, installation method, warranty, or inspection requirement.": "لا يوجد نظام محدد، نوع العازل، طريقة التركيب، الضمان، أو متطلبات الفحص.",
  "\"Payment stage\"": "\"مرحلة الدفع\"",
  "Payment is requested, but the quote does not say what work must be completed first.": "يوجد طلب دفع، لكن العرض لا يوضح ما العمل الذي يجب إنجازه أولاً.",
  "Upload any project files you already have. WhiteGrain analyzes them and gives you a dashboard, answers, and recommendations.": "ارفع أي ملفات مشروع لديك حالياً. يحللها WhiteGrain ويعطيك لوحة متابعة، إجابات، وتوصيات.",
  "Start with project details, a quote, BOQ, contract, specs, drawings, material list, or payment schedule. WhiteGrain reviews them together, flags gaps and discrepancies, and shows clear next steps before you sign or pay.": "ابدأ بتفاصيل المشروع، عرض سعر، جدول كميات، عقد، مواصفات، مخططات، قائمة مواد، أو جدول دفعات. يراجعها WhiteGrain معاً، ويحدد النواقص والتعارضات، ويعرض خطوات واضحة قبل التوقيع أو الدفع.",
  "Step 1": "الخطوة ١",
  "Add project details": "أضف تفاصيل المشروع",
  "Villa, renovation, majlis, handover, or fit-out. Add size, stage, and rough scope.": "فيلا، ترميم، مجلس، استلام شقة، أو تجهيز محل. أضف المساحة، المرحلة، والنطاق المبدئي.",
  "Step 2": "الخطوة ٢",
  "Upload any project files you already have": "ارفع أي ملفات مشروع لديك حالياً",
  "Quote, BOQ, contract, technical specs, material list, drawings, payment schedule, or even partial documents.": "عرض سعر، جدول كميات، عقد، مواصفات فنية، قائمة مواد، مخططات، جدول دفعات، أو حتى مستندات جزئية.",
  "Step 3": "الخطوة ٣",
  "Advanced AI analyzes them": "يحللها الذكاء الاصطناعي المتقدم",
  "It reviews costs, BOQ items, specs, materials, contract terms, payment stages, and discrepancies across files.": "يراجع التكلفة، بنود جدول الكميات، المواصفات، المواد، شروط العقد، مراحل الدفع، والتعارضات بين الملفات.",
  "Step 4": "الخطوة ٤",
  "Get a dashboard, answers, and recommendations": "احصل على لوحة متابعة، إجابات، وتوصيات",
  "See what is missing, what conflicts, what to confirm, and ask questions about the uploaded files before you sign, pay, or push back.": "اعرف ما الناقص، ما المتعارض، وما الذي يحتاج تأكيداً، واسأل عن الملفات المرفوعة قبل التوقيع أو الدفع أو طلب تعديل.",
  "WhiteGrain will read the project files and turn them into an owner-friendly AI dashboard.": "سيقرأ WhiteGrain ملفات المشروع ويحولها إلى لوحة ذكاء اصطناعي واضحة لصاحب المشروع.",
  "The value is not just uploading a PDF. The AI will compare your documents against each other, highlight discrepancies, explain unclear items in simple language, and let you ask questions about the files you uploaded.": "القيمة ليست مجرد رفع ملف PDF. سيقارن الذكاء الاصطناعي مستنداتك مع بعضها، يبرز التعارضات، يشرح البنود غير الواضحة بلغة بسيطة، ويتيح لك طرح أسئلة عن الملفات التي رفعتها.",
  "WhiteGrain AI Dashboard": "لوحة WhiteGrain الذكية",
  "Discrepancies": "تعارضات",
  "Missing details": "تفاصيل ناقصة",
  "Cost range": "نطاق التكلفة",
  "Quote says": "العرض يقول",
  "Tiles included": "البلاط مشمول",
  "Needs clarity": "يحتاج توضيح",
  "No allowance or credit rule": "لا توجد قيمة مخصصة أو قاعدة فرق سعر",
  "BOQ says": "جدول الكميات يقول",
  "AC lump sum": "التكييف مبلغ إجمالي",
  "No brand, tonnage, or testing": "لا توجد علامة تجارية، طن تبريد، أو اختبار",
  "Ask about uploaded files": "اسأل عن الملفات المرفوعة",
  "Can I change the tiles later and get the price difference?": "هل أستطيع تغيير البلاط لاحقاً واسترجاع فرق السعر؟",
  "WhiteGrain checks the quote and flags that no allowance, brand, supplier, or credit rule is stated.": "يفحص WhiteGrain العرض ويوضح أنه لا توجد قيمة مخصصة، علامة تجارية، مورد، أو قاعدة فرق سعر.",
  "Document understanding": "فهم المستندات",
  "Read quotes, BOQs, contracts, technical specs, payment schedules, and material lists.": "قراءة عروض الأسعار، جداول الكميات، العقود، المواصفات الفنية، جداول الدفعات، وقوائم المواد.",
  "Discrepancy detection": "اكتشاف التعارضات",
  "Compare files against each other and flag mismatches, missing items, exclusions, and vague wording.": "مقارنة الملفات ببعضها وتحديد التعارضات، البنود الناقصة، الاستثناءات، والصياغة غير الواضحة.",
  "Recommendations": "توصيات",
  "Explain what to clarify, what to ask for, and what might affect cost, quality, or payment risk.": "شرح ما يجب توضيحه، ما يجب طلبه، وما قد يؤثر على التكلفة أو الجودة أو مخاطر الدفعات.",
  "Ask anything about your files": "اسأل أي شيء عن ملفاتك",
  "Ask free-form questions about uploaded documents and get answers, explanations, and recommendations based on the project files.": "اطرح أسئلة مفتوحة عن المستندات المرفوعة واحصل على إجابات، شروحات، وتوصيات بناءً على ملفات المشروع.",
  "What it checks": "ما الذي يفحصه",
  "WhiteGrain is organized around real homeowner decisions.": "يركز WhiteGrain على القرارات الحقيقية التي يحتاجها صاحب المشروع.",
  "Instead of generic AI chat, the app will focus on the decisions you actually need to make before choosing a contractor, signing, paying, or approving work.": "بدلاً من محادثة ذكاء اصطناعي عامة، يركز التطبيق على القرارات التي تحتاجها فعلاً قبل اختيار المقاول، التوقيع، الدفع، أو اعتماد العمل.",
  "Cost": "التكلفة",
  "How much should this roughly cost?": "كم يفترض أن تكون التكلفة تقريباً؟",
  "Compare the quote against a rough Qatar cost range and see which categories drive the budget.": "قارن العرض بنطاق تكلفة تقريبي في قطر واعرف البنود التي ترفع الميزانية.",
  "BOQ": "جدول الكميات",
  "What is missing from the BOQ?": "ما الناقص في جدول الكميات؟",
  "Find missing quantities, vague descriptions, lump sums, exclusions, and unrealistic allowances.": "اعثر على الكميات الناقصة، الأوصاف المبهمة، المبالغ الإجمالية، الاستثناءات، والقيم غير الواقعية.",
  "Specs": "المواصفات",
  "Are the technical specs clear?": "هل المواصفات الفنية واضحة؟",
  "Check concrete, waterproofing, cable specs, AC insulation, paint, and workmanship details.": "افحص الخرسانة، العزل المائي، مواصفات الكابلات، عزل التكييف، الدهان، وتفاصيل التنفيذ.",
  "Materials": "المواد",
  "Can I change materials later?": "هل أستطيع تغيير المواد لاحقاً؟",
  "Check brands, tile allowance, supplier choice, upgrade cost, substitutions, and price difference rules.": "افحص العلامات التجارية، قيمة البلاط، اختيار المورد، تكلفة الترقية، البدائل، وقواعد فرق السعر.",
  "Contract": "العقد",
  "Is the payment schedule safe?": "هل جدول الدفعات آمن؟",
  "Review payment stages, variation rules, warranty, retention, delays, and handover conditions.": "راجع مراحل الدفع، قواعد التغييرات، الضمان، الاستقطاع، التأخير، وشروط التسليم.",
  "What you get": "ما الذي تحصل عليه",
  "An AI-generated dashboard, report, and question area for your project.": "لوحة متابعة وتقرير ومنطقة أسئلة لمشروعك بالذكاء الاصطناعي.",
  "The end result is not only a chat. It is a practical AI review: what the documents say, what they do not say, where they disagree, what looks risky, and what the user can ask next.": "النتيجة ليست مجرد محادثة. إنها مراجعة عملية بالذكاء الاصطناعي: ماذا تقول المستندات، ماذا لا تقول، أين تتعارض، ما الذي يبدو خطراً، وماذا يمكن أن تسأل بعد ذلك.",
  "Cost range": "نطاق التكلفة",
  "Rough estimate and cost-per-sqm context.": "تقدير تقريبي وسياق تكلفة المتر المربع.",
  "Missing items": "بنود ناقصة",
  "BOQ, specs, materials, payments, and exclusions.": "جدول الكميات، المواصفات، المواد، الدفعات، والاستثناءات.",
  "Free-form questions": "أسئلة مفتوحة",
  "Ask anything about uploaded documents.": "اسأل أي شيء عن المستندات المرفوعة.",
  "AI dashboard": "لوحة ذكاء اصطناعي",
  "Findings, discrepancies, and recommendations.": "ملاحظات، تعارضات، وتوصيات.",
  "AI project review preview": "معاينة مراجعة المشروع بالذكاء الاصطناعي",
  "Project review": "مراجعة المشروع",
  "Villa + majlis": "فيلا + مجلس",
  "29 items to clarify": "٢٩ بنداً يحتاج توضيحاً",
  "Estimated range": "النطاق التقديري",
  "BOQ findings": "ملاحظات جدول الكميات",
  "Material gaps": "نواقص المواد",
  "Item": "البند",
  "Finding": "الملاحظة",
  "Status": "الحالة",
  "Tiles": "البلاط",
  "Clarify": "وضّح",
  "AC": "التكييف",
  "Lump sum with no brand": "مبلغ إجمالي بدون علامة تجارية",
  "Risk": "خطر",
  "Payment": "الدفع",
  "Not tied to completed work": "غير مرتبط بعمل منجز",
  "Check": "افحص",
  "Not legal or engineering approval. Built to help you understand what to clarify before deciding.": "ليس اعتماداً قانونياً أو هندسياً. الهدف مساعدتك على فهم ما يجب توضيحه قبل اتخاذ القرار.",
  "Ask WhiteGrain about your uploaded files": "اسأل WhiteGrain عن ملفاتك المرفوعة",
  "You ask": "أنت تسأل",
  "Can I change the tiles later, and will I get the price difference?": "هل أستطيع تغيير البلاط لاحقاً وهل سأحصل على فرق السعر؟",
  "WhiteGrain answers": "WhiteGrain يجيب",
  "The uploaded quote says tiles are included, but it does not state the allowance, brand, supplier, or credit rule. Ask the contractor to confirm these before signing.": "العرض المرفوع يقول إن البلاط مشمول، لكنه لا يوضح القيمة المخصصة، العلامة التجارية، المورد، أو قاعدة فرق السعر. اطلب من المقاول تأكيد ذلك قبل التوقيع.",
  "Does the BOQ conflict with the technical specifications?": "هل يتعارض جدول الكميات مع المواصفات الفنية؟",
  "Quote comparison": "مقارنة العروض",
  "The cheapest quote can hide the most missing work.": "أرخص عرض قد يخفي أكبر قدر من الأعمال الناقصة.",
  "WhiteGrain will compare offers by scope, allowances, payment terms, and exclusions, not just by the final number.": "سيقارن WhiteGrain العروض حسب النطاق، القيم المخصصة، شروط الدفع، والاستثناءات، وليس حسب الرقم النهائي فقط.",
  "Contractor A": "المقاول أ",
  "QAR 2.95M": "٢.٩٥ مليون ر.ق",
  "Lower price, but several important items are unclear or excluded.": "سعر أقل، لكن عدة بنود مهمة غير واضحة أو مستثناة.",
  "External works excluded": "الأعمال الخارجية مستثناة",
  "No tile allowance": "لا توجد قيمة مخصصة للبلاط",
  "AC brand not stated": "علامة التكييف غير مذكورة",
  "Contractor B": "المقاول ب",
  "QAR 3.24M": "٣.٢٤ مليون ر.ق",
  "Higher price, but scope, materials, warranty, and payment milestones are clearer.": "سعر أعلى، لكن النطاق والمواد والضمان ومراحل الدفع أوضح.",
  "Waterproofing system named": "نظام العزل المائي مذكور",
  "Material allowances listed": "قيم المواد مذكورة",
  "Handover requirements clearer": "متطلبات التسليم أوضح",
  "What to ask before choosing": "ماذا تسأل قبل الاختيار",
  "Are exclusions really cheaper, or will they become variations later?": "هل الاستثناءات أرخص فعلاً، أم ستتحول إلى تغييرات لاحقاً؟",
  "Who it is for": "لمن هذا",
  "For anyone in Qatar about to build, renovate, fit out, or hand over.": "لكل من في قطر على وشك البناء، الترميم، التجهيز، أو الاستلام.",
  "New villa": "فيلا جديدة",
  "Renovation": "ترميم",
  "Majlis or extension": "مجلس أو توسعة",
  "Apartment handover": "استلام شقة",
  "Shop, cafe, clinic, or office fit-out": "تجهيز محل، مقهى، عيادة، أو مكتب",
  "Launch list": "قائمة الإطلاق",
  "Get notified when WhiteGrain launches.": "احصل على تنبيه عند إطلاق WhiteGrain.",
  "Join the launch list and get the first Qatar construction quote checklist when the first version is ready.": "انضم إلى قائمة الإطلاق واحصل على أول قائمة فحص لعروض البناء في قطر عند جاهزية النسخة الأولى.",
  "Email or WhatsApp": "البريد الإلكتروني أو واتساب",
  "Notify me at launch": "أبلغني عند الإطلاق",
  "No documents needed. Just join the launch list.": "لا تحتاج إلى مستندات الآن. فقط انضم إلى قائمة الإطلاق."
};

const englishCopy = Object.fromEntries(Object.entries(arabicCopy).map(([english, arabic]) => [arabic, english]));

const placeholderCopy = {
  en: "you@example.com or +974...",
  ar: "you@example.com أو +974..."
};

const formMessages = {
  saving: {
    en: "Saving...",
    ar: "جار الحفظ..."
  },
  success: {
    en: "You are on the WhiteGrain launch list.",
    ar: "تمت إضافتك إلى قائمة إطلاق WhiteGrain."
  },
  local: {
    en: "Saved locally for now. Add the Google Sheets URL to send signups to your Sheet.",
    ar: "تم الحفظ محلياً حالياً. أضف رابط Google Sheets لإرسال التسجيلات إلى الجدول."
  },
  error: {
    en: "Saved locally, but the Google Sheet did not receive it. Please check the web app URL.",
    ar: "تم الحفظ محلياً، لكن Google Sheet لم يستقبل البيانات. يرجى فحص رابط الويب."
  },
  submit: {
    en: "Notify me at launch",
    ar: "أبلغني عند الإطلاق"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => revealObserver.observe(item));

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function replaceTextNode(node, dictionary) {
  const normalized = normalizeText(node.nodeValue || "");
  if (!normalized || !dictionary[normalized]) return;

  const leading = (node.nodeValue.match(/^\s*/) || [""])[0];
  const trailing = (node.nodeValue.match(/\s*$/) || [""])[0];
  node.nodeValue = `${leading}${dictionary[normalized]}${trailing}`;
}

function translatePage(dictionary) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => replaceTextNode(node, dictionary));
}

function setLanguage(language) {
  const nextLanguage = language === "ar" ? "ar" : "en";
  const dictionary = nextLanguage === "ar" ? arabicCopy : englishCopy;

  translatePage(dictionary);
  document.documentElement.lang = nextLanguage;
  document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = nextLanguage;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  currentLanguage = nextLanguage;
  localStorage.setItem("whiteGrainLanguage", nextLanguage);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
