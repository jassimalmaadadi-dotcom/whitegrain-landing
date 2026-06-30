const PUBLIC_REVIEW_ENDPOINT = "https://kfhhbetspgcvbkkvlwtg.functions.supabase.co/public-review-intake";
const MAX_UPLOAD_FILES = 8;
const MAX_UPLOAD_FILE_BYTES = 25 * 1024 * 1024;
const MAX_IMAGE_UPLOAD_BYTES = 1.6 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 1800;
const IMAGE_UPLOAD_QUALITY = 0.78;
const COMPRESSIBLE_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

const translations = {
  ar: {
    madeInQatar: "صنع في قطر",
    navHow: "طريقة العمل",
    navChecks: "ما نراجعه",
    navExamples: "أمثلة",
    navReport: "التقرير",
    navPrivacy: "الخصوصية",
    login: "تسجيل الدخول",
    admin: "Admin",
    primaryCta: "احصل على 3 ملاحظات مجانية",
    heroEyebrow: "مراجعة احترافية للملاحظات المهمة",
    heroWait: "انتظر!",
    heroBefore: "قبل أن توقع",
    heroTitle: "انتظر! قبل أن توقّع",
    heroSubLine1: "ارفع مستند المقاول أو جدول الكميات أو مستند الإصلاح/الصيانة.",
    heroSubLine2: "نراجعه ونرسل لك التقرير على",
    whatsappWord: "واتساب",
    heroSubheadline: "ارفع مستند المقاول أو جدول الكميات أو مستند الإصلاح/الصيانة. نراجعه ونرسل لك التقرير على واتساب.",
    heroText:
      "ارفع عرض السعر أو جدول الكميات أو عقد الإصلاح أو الصيانة. يراجع WhiteGrain المستند للبحث عن نطاق غير واضح، مواصفات ضعيفة، مخاطر دفع، بنود ناقصة، ملاحظات امتثال، ومؤشرات تكلفة.",
    flow1: "ارفع الملف",
    flow2: "المراجعة",
    flow3: "تقرير واتساب",
    visualQuote: "عرض المقاول",
    visualRepair: "عقد إصلاح / صيانة",
    waFlags: "ملاحظات مهمة",
    waCosts: "مخاطر تكلفة",
    waMissing: "بنود ناقصة",
    waTerms: "شروط غير واضحة",
    proof1: "فجوات النطاق",
    proof2: "مخاطر الدفع",
    proof3: "ملاحظات المواصفات",
    intakeTopline: "ابدأ المراجعة هنا",
    projectTypeLabel: "ما نوع المستند؟",
    selectProject: "اختر نوع المشروع",
    projectVilla: "مستندات البناء",
    projectRenovation: "مستندات الترميم",
    projectMaintenance: "مستندات الصيانة / الإصلاح",
    projectFitout: "تشطيب داخلي",
    projectOther: "أخرى",
    projectVillaShort: "مستندات البناء",
    projectRenovationShort: "مستندات الترميم",
    projectMaintenanceShort: "مستندات الصيانة / الإصلاح",
    uploadTitle: "اضغط لرفع الملفات",
    uploadHint: "PDF أو صور أو Word أو Excel. يمكنك رفع ملف واحد أو عدة ملفات.",
    fileEmpty: "لم يتم اختيار ملفات",
    scanStatus: "تم اختيار الملفات. أضف رقم الواتساب لتحصل على الملاحظات.",
    whatsappLabel: "رقم الواتساب",
    whatsappPlaceholder: "رقم الواتساب",
    nameLabel: "الاسم",
    namePlaceholder: "اختياري",
    worryLabel: "ما الذي يقلقك؟ (اختياري)",
    optional: "(اختياري)",
    submitReady: "احصل على 3 ملاحظات مجانية",
    submitSending: "جاري المراجعة...",
    formNote: "لا تحتاج إلى تسجيل حساب. سيتم إرسال التقرير على واتساب.",
    formReady: "تم اختيار الملفات. أضف رقم الواتساب واختر نوع المستند.",
    formSuccess: "تم الاستلام!|سيبدأ خبراء WhiteGrain بمراجعة ملفاتك ورفع الملاحظات المهمة الآن.|سيصلك التقرير على واتساب قريباً.",
    formSending: "جاري رفع الملفات...",
    formPreparing: "جاري تجهيز الصور للرفع...",
    formReading: "ما زلنا نرفع الملفات. الرجاء إبقاء الصفحة مفتوحة.",
    formChecking: "ما زلنا نرفع الملفات. الرجاء إبقاء الصفحة مفتوحة.",
    formAlmostDone: "ما زلنا نرفع الملفات. الرجاء إبقاء الصفحة مفتوحة.",
    formTimeout: "تعذر تأكيد الاستلام. إذا وصلك تقرير واتساب فلا تحتاج إلى إعادة الإرسال.",
    formUploadInterrupted: "تعذر تأكيد استلام الملفات. الرجاء المحاولة مرة أخرى.",
    formNonJsonError: "تعذر تأكيد استلام الملفات. الرجاء المحاولة مرة أخرى.",
    formMissingFile: "ارفع ملفاً واحداً على الأقل قبل إرسال الطلب.",
    formMissingName: "أضف اسمك حتى نعرف لمن تكون المراجعة.",
    formMissingWhatsapp: "أضف رقم الواتساب حتى نرسل التقرير.",
    formMissingProject: "اختر نوع المشروع أو المستند.",
    sampleEyebrow: "نموذج سريع",
    sampleTitle: "كيف سيبدو تقرير الواتساب",
    sampleText: "ملخص عملي قصير: ماذا يقول المستند، لماذا يهم، وما الذي يجب أن تسأل عنه قبل التوقيع.",
    sampleFlagLabel: "ملاحظة مهمة",
    sampleFlagTitle: "التكييف مذكور كمبلغ إجمالي",
    sampleFlagText: "اطلب تحديد العلامة التجارية، الطنية، عزل الدكت، الاختبار، التشغيل، والضمان قبل الاعتماد.",
    samplePinsTitle: "أمثلة ملاحظات",
    pinA: "قيمة البلاط غير محددة",
    pinB: "مرحلة الدفع غير واضحة",
    pinC: "وقت الاستجابة غير محدد",
    phoneLabel: "تقرير واتساب",
    phoneTitle: "3 ملاحظات جاهزة",
    phoneText: "نقاط واضحة تسأل عنها قبل التوقيع.",
    howEyebrow: "خطوات بسيطة",
    howTitle: "ارفع المستند، نراجعه، يصلك التقرير على واتساب.",
    step1Title: "ارفع",
    step1Text: "ارسل عرض السعر أو جدول الكميات أو العقد أو مستند الإصلاح أو الصيانة.",
    step2Title: "مراجعة الملاحظات",
    step2Text: "يفحص WhiteGrain التفاصيل الناقصة، العبارات غير الواضحة، مخاطر الدفع، ومنطق التكلفة.",
    step3Title: "تقرير واتساب",
    step3Text: "استلم الملاحظات والتوصيات والأسئلة التي يجب طرحها قبل التوقيع.",
    reviewEyebrow: "مراجعة مستندات متخصصة",
    reviewTitle: "ما الذي يراجعه WhiteGrain",
    reviewText: "مصمم لأصحاب المنازل في قطر عند مراجعة مستندات البناء والترميم والتشطيب والإصلاح والصيانة.",
    scopeGaps: "فجوات النطاق",
    scopeText: "أعمال ناقصة أو غير واضحة.",
    specifications: "المواصفات",
    specText: "علامات تجارية أو درجات أو اختبارات غير محددة.",
    compliance: "الامتثال",
    complianceText: "بنود تحتاج تأكيداً مقابل المتطلبات.",
    logicCheck: "الفحص المنطقي",
    logicText: "شروط متعارضة أو افتراضات غير واضحة.",
    paymentRisk: "مخاطر الدفع",
    paymentText: "دفعات مقدمة، مراحل دفع، وتغييرات.",
    costReasonableness: "معقولية التكلفة",
    costText: "بنود تبدو ناقصة أو غير مفصلة.",
    flagsEyebrow: "أمثلة",
    flagsTitle: "كيف تبدو الملاحظة المهمة",
    flagTilesTitle: "البلاط مشمول",
    flagTiles: "لا يوجد تحديد للعلامة أو المقاس أو المنشأ أو قيمة السماح أو فرق السعر عند تغيير الاختيار.",
    flagAcTitle: "التكييف مبلغ إجمالي",
    flagAc: "لا توجد علامة تجارية أو طنّية أو عزل دكت أو اختبار أو تشغيل أو تفاصيل ضمان.",
    flagWaterproofTitle: "العزل المائي",
    flagWaterproof: "نوع النظام والضمان واختبار الغمر وطريقة التنفيذ غير محددة.",
    flagPaymentTitle: "مرحلة الدفع",
    flagPayment: "الدفع مطلوب قبل وجود عمل منجز أو معتمد بشكل واضح وقابل للقياس.",
    sampleReportLabel: "نموذج التقرير",
    reportTitle: "واضح بما يكفي لتتصرف.",
    reportText: "التقرير ليس مقالة فنية طويلة. يعطيك الملاحظات، لماذا تهم، وماذا تسأل بعد ذلك.",
    reportItem1Title: "فجوة نطاق",
    reportItem1Text: "اطلب من المقاول تحديد ما هو مشمول وما هو مستثنى بالضبط.",
    reportItem2Title: "مخاطر دفع",
    reportItem2Text: "اربط الدفعة بعمل منجز أو فحص أو اعتماد.",
    reportItem3Title: "أسئلة يجب طرحها",
    reportItem3Text: "أكد الضمان والاختبارات والاستثناءات ووقت الاستجابة والتغييرات.",
    trustTitle: "خصوصية من البداية",
    trustNoSignup: "لا تحتاج إلى تسجيل حساب",
    trustWhatsapp: "التقرير على واتساب",
    trustPrivateTitle: "رفع خاص",
    easyUnderstand: "سهل الفهم",
    builtForDocs: "مصمم لمستندات المقاولين والصيانة",
    trust1: "تستخدم مستنداتك فقط لإعداد المراجعة.",
    trust2Title: "لا نشاركها مع المقاول",
    trust2: "لا نرسل مستنداتك إلى المقاول الذي تتم مراجعته.",
    trust3Title: "حدود واضحة",
    trust3: "هذه مراجعة احترافية للملاحظات المهمة وليست استشارة قانونية."
  }
};

const originalText = new Map();
const nodesToTranslate = document.querySelectorAll("[data-i18n]");
const originalPlaceholders = new Map();
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");

nodesToTranslate.forEach((node) => {
  originalText.set(node, node.textContent);
});

placeholderNodes.forEach((node) => {
  originalPlaceholders.set(node, node.getAttribute("placeholder") || "");
});

let currentLanguage = localStorage.getItem("whitegrainLandingLanguage") || "en";
let currentMessage = { type: "", key: "formNote" };
let hasSelectedFile = false;
let submitProgressTimers = [];

const languageLabel = document.querySelector("#languageLabel");
const languageToggle = document.querySelector(".language-toggle");
const brandLink = document.querySelector(".brand");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector("#redFlagForm");
const formNote = document.querySelector("#formNote");
const submitButton = document.querySelector(".submit-button");
const submitButtonLabel = submitButton?.querySelector("span");
const fileInput = document.querySelector('input[name="document"]');
const fileName = document.querySelector("#fileName");
const contactFields = document.querySelector("#contactFields");
const analysisStatus = document.querySelector("#analysisStatus");
const uploadZone = document.querySelector(".upload-zone");

function t(key, fallback = "") {
  if (currentLanguage === "ar" && translations.ar[key]) {
    return translations.ar[key];
  }

  return fallback || key;
}

function refreshDynamicText() {
  if (!hasSelectedFile && fileName) {
    fileName.textContent = t("fileEmpty", "No files selected");
  } else if (hasSelectedFile && fileInput?.files?.length) {
    fileName.textContent = formatFileSummary(fileInput.files);
  }

  if (submitButtonLabel && !submitButton.disabled) {
    submitButtonLabel.textContent = t("submitReady", "Get 3 Free Red Flags");
  }

  if (currentMessage) {
    showFormMessage(currentMessage.type, currentMessage.key, false);
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("whitegrainLandingLanguage", language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  if (languageLabel) {
    languageLabel.textContent = language === "ar" ? "AR" : "EN";
  }

  nodesToTranslate.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = language === "ar" && translations.ar[key] ? translations.ar[key] : originalText.get(node);
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const translatedValue =
      language === "ar" && translations.ar[key] ? translations.ar[key] : originalPlaceholders.get(node);

    node.setAttribute("placeholder", translatedValue || "");
  });

  refreshDynamicText();
  window.lucide?.createIcons();
}

function closeMenu() {
  navLinks?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!navLinks || !menuButton) return;

  const nextState = !navLinks.classList.contains("is-open");
  navLinks.classList.toggle("is-open", nextState);
  document.body.classList.toggle("menu-open", nextState);
  menuButton.setAttribute("aria-expanded", String(nextState));
}

function showFormMessage(type, key, remember = true) {
  const defaultMessages = {
    formNote: "No signup required. Your report is sent on WhatsApp.",
    formSuccess: "Received!|Our experts will start reviewing your files and raising red flags now.|You will get your WhatsApp report soon.",
    formMissingFile: "Upload at least one file before submitting.",
    formMissingName: "Add your name so we know who the review is for.",
    formMissingWhatsapp: "Add your WhatsApp number so we can send the report.",
    formMissingProject: "Select the project or document type.",
    formTooManyFiles: `Upload up to ${MAX_UPLOAD_FILES} files at once.`,
    formSubmitFailed: "Something went wrong. Please try again.",
    formReady: "Files selected. Add your WhatsApp number and choose the document type.",
    formSending: "Uploading your files...",
    formPreparing: "Preparing large images...",
    formReading: "Still uploading files. Please keep this page open.",
    formChecking: "Still uploading files. Please keep this page open.",
    formAlmostDone: "Still uploading files. Please keep this page open.",
    formTimeout: "WhiteGrain could not confirm the upload. If you receive a WhatsApp report, you do not need to submit again.",
    formUploadInterrupted: "WhiteGrain could not confirm the upload. Please try again.",
    formNonJsonError: "WhiteGrain could not confirm the upload. Please try again."
  };

  if (remember) {
    currentMessage = { type, key };
  }

  if (!formNote) return;

  formNote.classList.remove("success", "error", "rich-success");

  if (key === "formSuccess") {
    const [headline, ...bodyLines] = t(key, defaultMessages[key]).split("|");
    formNote.textContent = "";
    const headlineNode = document.createElement("strong");
    headlineNode.textContent = headline;
    const bodyNode = document.createElement("span");
    bodyLines.forEach((line) => {
      const lineNode = document.createElement("span");
      lineNode.textContent = line;
      bodyNode.appendChild(lineNode);
    });
    formNote.append(headlineNode, bodyNode);
    formNote.classList.add("rich-success");
  } else {
    formNote.textContent = t(key, defaultMessages[key]);
  }

  if (type) {
    formNote.classList.add(type);
  }
}

function showDirectFormMessage(type, message) {
  if (!formNote) return;

  currentMessage = null;
  formNote.textContent = message;
  formNote.classList.remove("success", "error", "rich-success");

  if (type) {
    formNote.classList.add(type);
  }
}

function clearSubmitProgress() {
  submitProgressTimers.forEach((timer) => window.clearTimeout(timer));
  submitProgressTimers = [];
}

function startSubmitProgress() {
  clearSubmitProgress();

  const stages = [
    { delay: 4500, key: "formReading", label: "Still uploading..." },
    { delay: 14000, key: "formChecking", label: "Still uploading..." },
    { delay: 30000, key: "formAlmostDone", label: "Still uploading..." },
  ];

  stages.forEach((stage) => {
    const timer = window.setTimeout(() => {
      if (!submitButton?.disabled) return;
      showFormMessage("", stage.key);
      if (submitButtonLabel) {
        submitButtonLabel.textContent = t(stage.key, stage.label);
      }
    }, stage.delay);
    submitProgressTimers.push(timer);
  });
}

function isCompressibleImage(file) {
  return COMPRESSIBLE_IMAGE_TYPES.has(file.type);
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image could not be prepared for upload."));
    };

    image.src = url;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Image could not be prepared for upload."));
      }
    }, type, quality);
  });
}

async function compressImageForUpload(file) {
  if (!isCompressibleImage(file) || file.size <= MAX_IMAGE_UPLOAD_BYTES) {
    return file;
  }

  const image = await loadImageFromFile(file);
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const longestSide = Math.max(sourceWidth, sourceHeight);
  const scale = longestSide > MAX_IMAGE_DIMENSION ? MAX_IMAGE_DIMENSION / longestSide : 1;
  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return file;
  }

  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const blob = await canvasToBlob(canvas, "image/jpeg", IMAGE_UPLOAD_QUALITY);
  if (blob.size >= file.size) {
    return file;
  }

  const baseName = file.name.replace(/\.(jpe?g|png|webp)$/i, "") || "document";
  return new File([blob], `${baseName}.jpg`, {
    type: "image/jpeg",
    lastModified: file.lastModified,
  });
}

function prepareFilesForUpload(files) {
  return Promise.all(Array.from(files).map((file) => compressImageForUpload(file)));
}

async function readEndpointResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    try {
      return await response.json();
    } catch (_error) {
      throw new Error(t("formNonJsonError", "WhiteGrain could not confirm the upload. Please try again."));
    }
  }

  const text = await response.text().catch(() => "");
  const cleanText = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  if (cleanText && cleanText.length < 160) {
    throw new Error(cleanText);
  }

  throw new Error(t("formNonJsonError", "WhiteGrain could not confirm the upload. Please try again."));
}

function revealContactStep() {
  if (!form || !contactFields || !analysisStatus) return;

  hasSelectedFile = true;
  form.classList.add("has-file");
  uploadZone?.classList.add("is-selected");
  contactFields.hidden = false;
  analysisStatus.hidden = false;
  showFormMessage("", "formReady");

  window.setTimeout(() => {
    form.querySelector('input[name="whatsapp"]')?.focus();
  }, 180);
}

function resetUploadState() {
  hasSelectedFile = false;
  fileName.textContent = t("fileEmpty", "No files selected");
  analysisStatus.hidden = true;
  contactFields.hidden = false;
  form.classList.remove("has-file");
  uploadZone?.classList.remove("is-selected");
  showFormMessage("", "formNote");
}

function formatFileSummary(files) {
  const count = files?.length || 0;

  if (count === 0) {
    return t("fileEmpty", "No files selected");
  }

  if (count === 1) {
    return files[0]?.name || t("fileEmpty", "No files selected");
  }

  return currentLanguage === "ar" ? `${count} ملفات مختارة` : `${count} files selected`;
}

function handleFiles(files) {
  if (!files?.length) {
    resetUploadState();
    return;
  }

  fileName.textContent = formatFileSummary(files);
  revealContactStep();
}

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "ar" : "en");
});

menuButton?.addEventListener("click", toggleMenu);

brandLink?.addEventListener("click", (event) => {
  if (navLinks && window.matchMedia("(max-width: 720px)").matches) {
    event.preventDefault();
    toggleMenu();
  }
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

fileInput?.addEventListener("change", () => {
  handleFiles(fileInput.files);
});

uploadZone?.addEventListener("dragover", (event) => {
  event.preventDefault();
  uploadZone.classList.add("is-dragging");
});

uploadZone?.addEventListener("dragleave", () => {
  uploadZone.classList.remove("is-dragging");
});

uploadZone?.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadZone.classList.remove("is-dragging");

  const files = Array.from(event.dataTransfer?.files || []);
  if (!files.length || !fileInput) return;

  const transfer = new DataTransfer();
  files.forEach((file) => transfer.items.add(file));
  fileInput.files = transfer.files;
  handleFiles(fileInput.files);
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const files = fileInput?.files || [];
  const whatsapp = String(data.get("whatsapp") || "").trim();
  const projectType = String(data.get("projectType") || "").trim();

  if (!files.length) {
    showFormMessage("error", "formMissingFile");
    fileInput?.focus();
    return;
  }

  if (files.length > MAX_UPLOAD_FILES) {
    showFormMessage("error", "formTooManyFiles");
    fileInput?.focus();
    return;
  }

  if (!whatsapp) {
    showFormMessage("error", "formMissingWhatsapp");
    form.querySelector('input[name="whatsapp"]')?.focus();
    return;
  }

  if (!projectType) {
    showFormMessage("error", "formMissingProject");
    form.querySelector('input[name="projectType"]')?.focus();
    return;
  }

  submitButton.classList.add("is-loading");
  submitButton.disabled = true;
  submitButtonLabel.textContent = t("formPreparing", "Preparing large images...");
  showFormMessage("", "formPreparing");
  startSubmitProgress();

  let uploadFiles;
  try {
    uploadFiles = await prepareFilesForUpload(files);
  } catch (_error) {
    uploadFiles = Array.from(files);
  }

  const oversizedFile = uploadFiles.find((file) => file.size > MAX_UPLOAD_FILE_BYTES);
  if (oversizedFile) {
    showDirectFormMessage(
      "error",
      currentLanguage === "ar"
        ? `${oversizedFile.name} أكبر من 25MB. الرجاء رفع ملف أصغر.`
        : `${oversizedFile.name} is larger than 25MB. Please upload a smaller file.`
    );
    clearSubmitProgress();
    submitButton.classList.remove("is-loading");
    submitButton.disabled = false;
    submitButtonLabel.textContent = t("submitReady", "Get 3 Free Red Flags");
    return;
  }

  data.delete("document");
  uploadFiles.forEach((file) => data.append("document", file, file.name));
  data.set("language", currentLanguage);
  data.set("pageUrl", window.location.href);
  data.set("userAgent", window.navigator.userAgent);

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 180000);

  try {
    submitButtonLabel.textContent = t("formSending", "Uploading files...");
    showFormMessage("", "formSending");
    const response = await fetch(PUBLIC_REVIEW_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
      signal: controller.signal,
    });
    const result = await readEndpointResponse(response);

    if (!response.ok) {
      throw new Error(result.error || t("formSubmitFailed", "Something went wrong. Please try again."));
    }

    showFormMessage("success", "formSuccess");
    form.reset();
    resetUploadState();
    showFormMessage("success", "formSuccess");
  } catch (error) {
    const fallbackMessage =
      error?.name === "AbortError"
        ? t("formTimeout", "This is taking longer than expected. Please try again.")
        : error instanceof Error
          ? error.message
          : t("formSubmitFailed", "Something went wrong. Please try again.");
    showDirectFormMessage(
      "error",
      fallbackMessage
    );
  } finally {
    window.clearTimeout(timeoutId);
    clearSubmitProgress();
    submitButton.classList.remove("is-loading");
    submitButton.disabled = false;
    submitButtonLabel.textContent = t("submitReady", "Get 3 Free Red Flags");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

if (window.lucide) {
  window.lucide.createIcons();
} else {
  window.addEventListener("load", () => window.lucide?.createIcons());
}

applyLanguage(currentLanguage);
