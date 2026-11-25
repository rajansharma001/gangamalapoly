// =========================================================
// GANGAMALA POLYCLINIC PVT. LTD. — CORE INTERACTION ENGINE
// Jumla Road, Birendranagar-6, Surkhet, Karnali Province
// =========================================================

// --- PRELOADER REMOVAL ENGINE (INSTANT & FAIL-SAFE) ---
function hidePreloader() {
  var preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('loaded', 'fade-out');
    document.body.classList.add('loaded');
    setTimeout(function () {
      if (preloader && preloader.parentNode) {
        preloader.style.display = 'none';
      }
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(hidePreloader, 150);
});
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 600);

// Scroll Reveal & Language Init
document.addEventListener('DOMContentLoaded', function () {
  const hiddenElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    hiddenElements.forEach((el) => observer.observe(el));
  } else {
    hiddenElements.forEach((el) => el.classList.add('show'));
  }

  var savedLang = localStorage.getItem('gmLang') || 'en';
  if (savedLang === 'ne') {
    switchLang('ne');
  }
});

function toggleMobileNav(force) {
  var drawer = document.getElementById('mobileDrawer');
  var scrim = document.getElementById('mobileScrim');
  if (!drawer) return;
  var isOpen = force !== undefined ? force : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  if (scrim) {
    scrim.classList.toggle('open', isOpen);
    scrim.classList.toggle('active', isOpen);
  }
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  var btn = document.getElementById('scrollToTopBtn');
  if (btn) {
    if (window.pageYOffset > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
});

function toggleLangDropdown(e) {
  e.stopPropagation();
  var dd = document.querySelector('.lang-dropdown');
  if (!dd) return;
  dd.classList.toggle('open');
}
document.addEventListener('click', function () {
  var dd = document.querySelector('.lang-dropdown');
  if (dd) dd.classList.remove('open');
});

// =========================================================
// BILINGUAL TRANSLATIONS (ENGLISH & NEPALI)
// =========================================================
var translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    departments: 'Specialties',
    doctors: 'Doctors',
    patient_stories: 'Patient Stories',
    blog: 'Health Blog',
    contact: 'Contact',
    book_consultation: 'Book OPD',
    about_hospital: 'About Polyclinic',
    clinical_services: 'Specialties & Services',
    doctors_opd: 'Specialist Doctors',
    contact_location: 'Contact & Location',
    immediate_triage: 'Daily Specialist OPD & Complete Diagnostics Under One Roof',
    emergency_247: 'Daily Specialist OPD',
    doctor_consultations: 'Visiting Heart Clinic',
    pharmacy_labs: 'Lab, USG, ECG & X-Ray',
    hospital_location: 'Jumla Road, Surkhet',
    services_title: 'Specialized Care & Diagnostic Services',
    online_consultation: 'ONLINE OPD & CAMP BOOKING',
    immediate_emergency: 'Need Same-Day Token or Lab Info?',
    select_department: 'Select Specialty / Doctor *',
    preferred_time: 'Preferred Slot',
    why_title: 'Trusted Multi-Specialty Care in Birendranagar',
    senior_physicians: 'Daily Specialist Doctors',
    patient_centric_approach: 'Shahid Gangalal Heart Clinic',
    direct_access: 'Complete On-Site Diagnostics',
    pharmacy_24h_labs: 'Pharmacy & Minor OT',
    faq_title: 'Frequently Asked Questions',
    contact_title: 'Contact & Clinic Location',
    blog_title: 'Health Blog & Clinical Guides',
    patient_stories_title: 'Patient Stories & Reviews'
  },
  ne: {
    home: 'होम',
    about: 'हाम्रोबारे',
    services: 'सेवाहरू',
    departments: 'विशेषज्ञ सेवा',
    doctors: 'डाक्टरहरू',
    patient_stories: 'बिरामी अनुभव',
    blog: 'स्वास्थ्य ब्लग',
    contact: 'सम्पर्क',
    book_consultation: 'ओपीडी बुक',
    about_hospital: 'पोलिक्लिनिकको बारेमा',
    clinical_services: 'विशेषज्ञ र निदान सेवाहरू',
    doctors_opd: 'विशेषज्ञ डाक्टरहरू',
    contact_location: 'सम्पर्क र ठेगाना',
    immediate_triage: 'दैनिक विशेषज्ञ ओपीडी र आधुनिक निदान एउटै छानोमुनि',
    emergency_247: 'दैनिक विशेषज्ञ ओपीडी',
    doctor_consultations: 'मुटु रोग विशेषज्ञ क्लिनिक',
    pharmacy_labs: 'ल्याब, भिडियो एक्स-रे, ईसीजी',
    hospital_location: 'जुम्ला रोड, सुर्खेत',
    services_title: 'विशेषज्ञ उपचार र निदान सेवाहरू',
    online_consultation: 'अनलाइन ओपीडी र क्याम्प बुकिङ',
    immediate_emergency: 'तुरुन्त टोकन वा ल्याब जानकारी चाहिन्छ?',
    select_department: 'विभाग / डाक्टर छान्नुहोस् *',
    preferred_time: 'उपयुक्त समय',
    why_title: 'वीरेन्द्रनगरमा भरपर्दो बहु-विशेषज्ञ स्वास्थ्य सेवा',
    senior_physicians: 'दैनिक विशेषज्ञ चिकित्सक',
    patient_centric_approach: 'शहिद गंगालाल मुटु क्लिनिक',
    direct_access: 'सम्पूर्ण निदान सेवा एकै ठाउँमा',
    pharmacy_24h_labs: 'फार्मेसी र माइनर ओटी',
    faq_title: 'बारम्बार सोधिने प्रश्नहरू',
    contact_title: 'सम्पर्क र क्लिनिकको ठेगाना',
    blog_title: 'स्वास्थ्य ब्लग र चिकित्सकीय सल्लाह',
    patient_stories_title: 'बिरामीको अनुभव र प्रतिक्रिया'
  }
};

function switchLang(lang, e) {
  if (e) e.preventDefault();
  localStorage.setItem('gmLang', lang);

  document.querySelectorAll('.lang-option[data-lang]').forEach(function (el) {
    el.classList.toggle('active', el.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.mobile-lang-btn[data-lang]').forEach(function (el) {
    el.classList.toggle('active', el.getAttribute('data-lang') === lang);
  });
  var label = document.querySelector('.lang-label');
  if (label) label.textContent = lang === 'en' ? 'EN' : 'NP';

  var t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });

  var dd = document.querySelector('.lang-dropdown');
  if (dd) dd.classList.remove('open');
}

// =========================================================
// REAL GANGAMALA POLYCLINIC SPECIALISTS DATA
// =========================================================
const GM_DOCTORS_DATA = [
  {
    id: 0,
    img: 'images/dr-kritika-thapa.jpg',
    dept: 'Gynecology & Obstetrics',
    category: 'Gynecology',
    name: 'Dr. Kritika Thapa',
    desc: 'MD (Teaching Hospital) · Specialist Gynecologist · 5+ Yrs Experience',
    schedule:
      '<strong>Daily Specialist OPD:</strong><br>Antenatal, Prenatal & Fertility Care<br>Menstrual & Menopause Management'
  },
  {
    id: 1,
    img: 'images/dr-tejendra-saud.jpg',
    dept: 'Orthopedics & Spine',
    category: 'Orthopedics',
    name: 'Dr. Tejendra Saud',
    desc: 'MS Orthopedics & Trauma Surgery · Bone, Joint & Spine Specialist',
    schedule:
      '<strong>Daily Specialist OPD:</strong><br>Fracture, Arthritis & Back Pain Care<br>ACL, Ligament & Spine Consultation'
  },
  {
    id: 2,
    img: 'images/dr-susmita-pradhan.jpg',
    dept: 'Dermatology & Skin Care',
    category: 'Dermatology',
    name: 'Dr. Susmita Pradhan',
    desc: 'MD Dermatology & Venereology · Clinical Skin, Hair & Allergy Specialist',
    schedule:
      '<strong>Daily Skin Care OPD:</strong><br>Acne, Eczema, Fungal & Pigmentation<br>Venereology, Scalp & Allergy Care'
  },
  {
    id: 3,
    img: 'images/dr-amrit-bogati.jpg',
    dept: 'Senior Cardiologist',
    category: 'Cardiology',
    name: 'Dr. Amrit Bogati',
    desc: 'MBBS, MD (Cardiology) · NMC: 7700 · Shahid Gangalal National Heart Centre',
    schedule:
      '<strong>Monthly Visiting Heart Clinic:</strong><br>Every 3rd Saturday of Nepali Month (B.S.)<br>Pre-Registration Recommended (083-520611)'
  },
  {
    id: 4,
    img: 'images/dr-db-gurung.jpg',
    dept: 'Radiology & USG',
    category: 'Radiology',
    name: 'Dr. D.B. Gurung',
    desc: 'Senior Radiologist · Ultrasonography (USG) & Diagnostic Imaging',
    schedule:
      '<strong>USG & Imaging Desk:</strong><br>Abdominal, Pelvic & Obstetric USG<br>Same-Day Diagnostic Reporting'
  }
];

// =========================================================
// REAL GANGAMALA POLYCLINIC SERVICES & EQUIPMENT MODALS
// =========================================================
const GM_SERVICES = [
  {
    id: 0,
    title: 'Gynecology & Women’s Health OPD',
    cat: 'Daily Specialist Women’s Clinic',
    icon: 'fa-person-pregnant',
    doctor: 'Dr. Kritika Thapa',
    doctorRole: 'MD (Teaching Hospital) · Specialist Gynecologist',
    schedule: 'Daily OPD Consultations · Jumla Road, Birendranagar-6',
    heroImg: 'images/gangamala-hero.jpg',
    overview:
      'Compassionate, evidence-based gynecological and obstetric care led by Dr. Kritika Thapa. Designed to support women in Birendranagar and across Karnali Province through every stage of reproductive health, safe pregnancy monitoring, and routine gynecological wellness.',
    capabilities: [
      'Antenatal & Prenatal Checkups with Obstetric USG Coordination',
      'Menstrual Disorders, PCOS & Hormonal Irregularities',
      'Fertility Evaluation, Pre-Conception & Family Planning Counseling',
      'Menopause Management & Preventive Women’s Screening',
      'Pelvic Infections, Fibroids & Ovarian Cyst Evaluation',
      'Confidential, Unhurried One-on-One Consultations'
    ],
    equipments: [
      {
        title: 'Obstetric & Pelvic Ultrasonography (USG)',
        desc: 'Dedicated high-resolution ultrasound coordination with Senior Radiologist Dr. D.B. Gurung for fetal growth and pelvic diagnostics.',
        img: 'images/gangamala-lab.jpg'
      },
      {
        title: 'In-House Antenatal Laboratory Panels',
        desc: 'Same-day complete blood counts, hemoglobin, blood sugar, urine routine, and thyroid/hormone screening.',
        img: 'images/gangamala-pharmacy.jpg'
      }
    ]
  },
  {
    id: 1,
    title: 'Orthopedics, Bone, Joint & Spine Care',
    cat: 'Daily Orthopedic Specialist OPD',
    icon: 'fa-bone',
    doctor: 'Dr. Tejendra Saud',
    doctorRole: 'MS Orthopedics & Trauma Surgery · Spine & Joint Specialist',
    schedule: 'Daily OPD Consultations · On-Site X-Ray & Dressing Support',
    heroImg: 'images/dr-tejendra-saud.jpg',
    overview:
      'Comprehensive diagnosis and treatment of bone, joint, ligament, and spinal disorders by Orthopedic Specialist Dr. Tejendra Saud, backed by immediate on-site X-Ray imaging, splinting, plaster care, and minor OT dressing services.',
    capabilities: [
      'Fracture Assessment, Casting, Plaster Care & Follow-Up',
      'Osteoarthritis, Rheumatoid Joint Pain & Knee Degeneration',
      'Low Back Pain, Cervical Spondylosis & Lumbar Disc Care',
      'ACL, Meniscal & Sports Ligament Injury Evaluation',
      'Post-Operative Orthopedic Wound Care & Stitch Removal',
      'Pediatric Bone Deformity & Bone Health Screening'
    ],
    equipments: [
      {
        title: 'On-Site Diagnostic X-Ray Unit',
        desc: 'Rapid radiographic imaging for fractures, joint spacing, and spinal alignment right inside the polyclinic.',
        img: 'images/gangamala-lab.jpg'
      },
      {
        title: 'Sterile Dressing & Minor OT Bay',
        desc: 'Clean orthopedic dressing, splinting, laceration care, and minor procedural support.',
        img: 'images/gangamala-pharmacy.jpg'
      }
    ]
  },
  {
    id: 2,
    title: 'Dermatology, Venereology & Skin Care Clinic',
    cat: 'Specialized Skin, Hair & Allergy Care',
    icon: 'fa-hand-sparkles',
    doctor: 'Dr. Susmita Pradhan',
    doctorRole: 'MD Dermatology & Venereology · Skin Care Specialist',
    schedule: 'Daily Skin Care Clinic OPD · Jumla Road, Surkhet',
    heroImg: 'images/dr-susmita-pradhan.jpg',
    overview:
      'Dedicated clinical dermatology and venereology care led by Dr. Susmita Pradhan. We provide evidence-based diagnosis and tailored medical therapy for acute and chronic skin, hair, nail, allergic, and sexually transmitted dermatological conditions.',
    capabilities: [
      'Acne Vulgaris, Post-Acne Scarring & Pigmentation / Melasma',
      'Eczema, Psoriasis, Chronic Urticaria & Skin Allergies',
      'Fungal Infections (Ringworm/Tinea), Scabies & Bacterial Skin Care',
      'Hair Fall, Alopecia, Dandruff & Scalp Disorder Treatment',
      'Pediatric Dermatology & Blistering Skin Conditions',
      'Confidential Venereology (STI) Consultation & Management'
    ],
    equipments: [
      {
        title: 'Dermatological Lab & Microscopy Support',
        desc: 'In-house laboratory support for fungal screening, allergy markers, and blood profiles.',
        img: 'images/gangamala-lab.jpg'
      },
      {
        title: 'Verified Dermatological Pharmacy Desk',
        desc: 'Authentic specialist-prescribed topical formulations, sunscreens, and systemic medications dispensed on-site.',
        img: 'images/gangamala-pharmacy.jpg'
      }
    ]
  },
  {
    id: 3,
    title: 'Senior Cardiology Visiting Clinic & ECG Service',
    cat: 'Shahid Gangalal National Heart Centre Specialist',
    icon: 'fa-heart-pulse',
    doctor: 'Dr. Amrit Bogati (MBBS, MD · NMC: 7700)',
    doctorRole: 'Senior Cardiologist · Shahid Gangalal National Heart Centre, Kathmandu',
    schedule: 'Every 3rd Saturday of the Nepali Month (B.S.) · Daily ECG Available',
    heroImg: 'images/dr-amrit-bogati.jpg',
    overview:
      'Bringing Kathmandu’s premier cardiac expertise directly to Karnali Province. Senior Cardiologist Dr. Amrit Bogati from Shahid Gangalal National Heart Centre visits Gangamala Polyclinic regularly every third Saturday of the Nepali (B.S.) month—saving Surkhet and Karnali families costly travel.',
    capabilities: [
      'Hypertension (High Blood Pressure) & Lipid Disorder Management',
      'Chest Pain, Coronary Artery Disease & Angina Evaluation',
      'Heart Failure, Palpitations & Arrhythmia Assessment',
      'Post-Angioplasty & Post-Cardiac Surgery Follow-Up in Surkhet',
      'Daily On-Site 12-Lead Electrocardiogram (ECG) Screening',
      'Cardiac Risk Blood Profiling (Lipid, Fasting Sugar, Kidney Panel)'
    ],
    equipments: [
      {
        title: '12-Lead Diagnostic ECG Service',
        desc: 'Immediate resting electrocardiogram available daily for chest discomfort, palpitations, and pre-camp evaluation.',
        img: 'images/gangamala-lab.jpg'
      },
      {
        title: 'Complete Cardiac Blood Biomarker Lab',
        desc: 'Lipid profile, fasting blood glucose, renal function, and haematology panels done in-house before your heart consultation.',
        img: 'images/gangamala-pharmacy.jpg'
      }
    ]
  },
  {
    id: 4,
    title: 'Ultrasonography (USG) & Digital X-Ray Imaging',
    cat: 'Senior Radiologist Diagnostic Imaging',
    icon: 'fa-x-ray',
    doctor: 'Dr. D.B. Gurung',
    doctorRole: 'Senior Radiologist · Ultrasonography & Imaging',
    schedule: 'Regular Daily Imaging Desk · Fast Same-Day Reports',
    heroImg: 'images/dr-db-gurung.jpg',
    overview:
      'Accurate diagnostic imaging is the backbone of right treatment. Senior Radiologist Dr. D.B. Gurung conducts detailed Ultrasonography (USG) scans alongside our dedicated X-Ray service—delivering clear, timely reports directly coordinated with your consulting specialist.',
    capabilities: [
      'Whole Abdomen & Pelvis Ultrasonography (Liver, Gallbladder, Kidneys)',
      'Obstetric / Pregnancy Growth & Antenatal Ultrasound Scans',
      'Thyroid, Neck & Soft-Tissue Ultrasound Evaluation',
      'Chest, Limb, Joint & Spine Diagnostic X-Ray Imaging',
      'Kidney Stone, Gallstone & Appendicitis Rapid Screening',
      'Same-Day Verified Radiology Reporting'
    ],
    equipments: [
      {
        title: 'Diagnostic Ultrasonography (USG) Console',
        desc: 'High-clarity real-time ultrasound scanning performed personally by Senior Radiologist Dr. D.B. Gurung.',
        img: 'images/dr-db-gurung.jpg'
      },
      {
        title: 'Dedicated X-Ray Diagnostic Suite',
        desc: 'Prompt chest and orthopedic X-ray imaging with minimal wait time for OPD and minor trauma patients.',
        img: 'images/gangamala-lab.jpg'
      }
    ]
  },
  {
    id: 5,
    title: 'Well-Equipped Pathology Lab, Pharmacy & Minor OT',
    cat: 'Haematology, Biochemistry, Pharmacy & Dressing',
    icon: 'fa-flask-vial',
    doctor: 'Certified Lab Technologists, Nursing & Pharmacy Team',
    doctorRole: 'In-House Diagnostic Laboratory, औषधी पसल & Minor OT',
    schedule: 'Open Daily · Fast Accurate Lab Reports & Genuine Medicines',
    heroImg: 'images/gangamala-lab.jpg',
    overview:
      'Our well-equipped in-house diagnostic laboratory features automated Haematology analysis, Hot Air Oven sterilization, and precision Incubator facilities—paired seamlessly with our stocked in-house Pharmacy ("औषधी पसल") and clean Dressing & Minor OT room.',
    capabilities: [
      'Automated Haematology (CBC, Hemoglobin, ESR, Platelets)',
      'Biochemistry Panels (Blood Sugar, LFT, RFT, Lipid, Uric Acid)',
      'Urine & Stool Routine Microscopy, Culture & Incubation',
      'Serology Screening (Typhoid, Dengue, Hepatitis, Pregnancy Tests)',
      'Sterile Wound Dressing, Suturing, Stitch Removal & Minor OT',
      'In-House Pharmacy (औषधी पसल) with Genuine Prescribed Medicines'
    ],
    equipments: [
      {
        title: 'Gangamala Polyclinic Haematology & Incubator Lab',
        desc: 'Real on-site laboratory equipped with automated Haematology analyzer, Hot Air Oven, and clinical Incubator.',
        img: 'images/gangamala-lab.jpg'
      },
      {
        title: 'In-House Pharmacy Counter (औषधी पसल)',
        desc: 'Real clinic pharmacy counter stocked with verified, temperature-maintained prescription medicines.',
        img: 'images/gangamala-pharmacy.jpg'
      }
    ]
  }
];

// =========================================================
// HEALTH BLOG ARTICLES (TAILORED TO GANGAMALA SURKHET)
// =========================================================
const GM_BLOGS = [
  {
    id: 0,
    title: 'Preparing for Your Monthly Senior Cardiologist Consultation in Surkhet',
    cat: 'Cardiology',
    author: 'Dr. Amrit Bogati',
    role: 'Senior Cardiologist · Shahid Gangalal National Heart Centre',
    date: 'Nov 15, 2026',
    readTime: '4 min read',
    img: 'images/dr-amrit-bogati.jpg',
    excerpt:
      'How to prepare your BP log, ECG, and blood reports ahead of our 3rd Saturday monthly heart clinic at Gangamala Polyclinic.',
    fullContent: `
      <p>Patients across Surkhet, Dailekh, Jajarkot, and Kalikot no longer have to travel all the way to Kathmandu for specialist cardiac follow-ups. Every third Saturday of the Nepali (B.S.) month, our Visiting Senior Cardiology Clinic brings Shahid Gangalal National Heart Centre expertise right to Jumla Road, Birendranagar.</p>
      <div class="okh-modal-quote">
        "Early ECG screening and consistent blood pressure control prevent the majority of preventable heart emergencies." — Dr. Amrit Bogati, MBBS, MD
      </div>
      <h3>1. Bring Your Complete Medication Strip List</h3>
      <p>Carry your current prescriptions or medicine strips so your cardiologist can review exact dosages for hypertension, cholesterol, or blood thinners.</p>
      <h3>2. Complete Baseline ECG & Lipid Tests Early</h3>
      <p>Gangamala Polyclinic offers daily on-site ECG and in-house blood testing (Lipid Profile, Fasting Blood Sugar, Renal Function). Getting these done a day before or early morning on the 3rd Saturday ensures a thorough consultation.</p>
      <h3>3. Pre-Register Your Token</h3>
      <p>Because slots for the monthly 3rd Saturday clinic fill quickly, please call our reception desk at <strong>083-520611</strong> in advance to reserve your token.</p>
    `
  },
  {
    id: 1,
    title: 'Essential Antenatal Checkups & Ultrasound Milestones During Pregnancy',
    cat: 'Gynecology',
    author: 'Dr. Kritika Thapa',
    role: 'Specialist Gynecologist · MD (Teaching Hospital)',
    date: 'Nov 08, 2026',
    readTime: '5 min read',
    img: 'images/gangamala-hero.jpg',
    excerpt:
      'A trimester-by-trimester guide to prenatal checkups, blood tests, and USG scans for expectant mothers in Karnali Province.',
    fullContent: `
      <p>Regular antenatal care is the single most effective step toward a healthy mother and baby. At Gangamala Polyclinic, our Gynecology OPD works closely with Senior Radiologist Dr. D.B. Gurung and our in-house Haematology laboratory so expectant mothers receive coordinated care under one roof.</p>
      <div class="okh-modal-quote">
        "Every pregnancy is unique. Scheduled checkups let us detect anemia, gestational diabetes, or blood pressure changes early when they are easiest to manage." — Dr. Kritika Thapa
      </div>
      <h3>First Trimester (Weeks 1–12)</h3>
      <p>Confirm pregnancy dating via early USG, check baseline hemoglobin, blood group, thyroid function, and begin folic acid supplementation.</p>
      <h3>Second Trimester (Weeks 13–27)</h3>
      <p>Monitor fetal growth and anatomy scan, check blood pressure and urine protein, and start iron-calcium supplementation as advised.</p>
      <h3>Third Trimester (Weeks 28–40)</h3>
      <p>Track fetal position, amniotic fluid levels via ultrasound, monitor blood sugar, and discuss delivery readiness with your gynecologist.</p>
    `
  },
  {
    id: 2,
    title: 'Managing Skin Allergies, Melasma & Fungal Infections Safely',
    cat: 'Dermatology',
    author: 'Dr. Susmita Pradhan',
    role: 'Dermatologist & Venereologist',
    date: 'Oct 29, 2026',
    readTime: '4 min read',
    img: 'images/dr-susmita-pradhan.jpg',
    excerpt:
      'Why unprescribed over-the-counter steroid creams worsen fungal rashes and pigmentation—and what evidence-based skin care looks like.',
    fullContent: `
      <p>Across Surkhet’s warm valley summers and humid monsoon months, fungal infections (ringworm/tinea), acne flare-ups, sun-induced melasma, and contact allergies are among the most frequent skin concerns seen in our daily Skin Care Clinic.</p>
      <div class="okh-modal-quote">
        "Avoid mixing triple-combination steroid creams without a dermatologist’s diagnosis. They thin the skin barrier and make fungal infections resistant." — Dr. Susmita Pradhan
      </div>
      <h3>1. Daily Broad-Spectrum Sun Protection</h3>
      <p>Melasma and post-acne dark spots darken rapidly under UV exposure. Apply a dermatologist-recommended sunscreen every morning, even on cloudy days.</p>
      <h3>2. Complete Your Antifungal Course</h3>
      <p>Stopping antifungal therapy as soon as itching reduces often leads to stubborn recurrence. Complete the full prescribed duration and keep skin folds clean and dry.</p>
      <h3>3. Seek Early Specialist Diagnosis</h3>
      <p>Visit our daily Dermatology OPD on Jumla Road for safe, targeted treatment tailored to your skin type.</p>
    `
  },
  {
    id: 3,
    title: 'Knee Pain, Back Strain & When to Get an Orthopedic X-Ray',
    cat: 'Orthopedics',
    author: 'Dr. Tejendra Saud',
    role: 'Orthopedic & Spine Specialist',
    date: 'Oct 19, 2026',
    readTime: '4 min read',
    img: 'images/dr-tejendra-saud.jpg',
    excerpt:
      'Understanding warning signs of ligament tears, degenerative joint arthritis, and spinal disc strain before they limit daily mobility.',
    fullContent: `
      <p>Whether caused by hillside travel, sports injuries, heavy lifting, or age-related joint wear, musculoskeletal pain should never be ignored when it persists beyond a few days.</p>
      <div class="okh-modal-quote">
        "Prompt orthopedic evaluation paired with a clear X-ray helps distinguish a simple sprain from a hairline fracture or ligament injury." — Dr. Tejendra Saud
      </div>
      <h3>Red Flags That Need Prompt Evaluation</h3>
      <ul>
        <li>Inability to bear weight or visible swelling after a fall or twist</li>
        <li>Back pain radiating down into the buttock or leg (sciatica)</li>
        <li>Morning knee stiffness lasting more than 30 minutes</li>
        <li>Numbness, tingling, or weakness in hands or feet</li>
      </ul>
      <p>At Gangamala Polyclinic, on-site X-Ray imaging, daily Orthopedic OPD, and Minor OT dressing allow seamless assessment in a single visit.</p>
    `
  },
  {
    id: 4,
    title: 'Inside Our Haematology Lab & Senior Radiologist USG Desk',
    cat: 'Diagnostics',
    author: 'Dr. D.B. Gurung & Lab Team',
    role: 'Radiology & Pathology Diagnostics',
    date: 'Oct 08, 2026',
    readTime: '3 min read',
    img: 'images/gangamala-lab.jpg',
    excerpt:
      'How accurate automated haematology, sterile incubation, and Senior Radiologist ultrasound reporting empower faster treatment decisions.',
    fullContent: `
      <p>Reliable treatment starts with dependable diagnostics. Gangamala Polyclinic Pvt. Ltd. maintains a well-equipped diagnostic laboratory featuring automated Haematology analysis, Hot Air Oven sterilization, and clinical Incubator equipment right in Birendranagar-6.</p>
      <div class="okh-modal-quote">
        "Direct communication between our radiologist, lab technologists, and specialist doctors eliminates guesswork and reduces repeat visits for patients."
      </div>
      <h3>Preparation Tips Before Your USG or Blood Test</h3>
      <ul>
        <li><strong>Abdominal USG:</strong> Fast for 6–8 hours prior to imaging for a clear view of the gallbladder and liver.</li>
        <li><strong>Pelvic / Early Obstetric USG:</strong> Drink 3–4 glasses of water 45 minutes before your scan so the bladder is comfortably full.</li>
        <li><strong>Fasting Blood Sugar & Lipid Profile:</strong> Fast overnight (8–12 hours); plain water is permitted.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: 'Proper Wound Care, Sterile Dressing & Minor OT Safety',
    cat: 'Clinic Services',
    author: 'Gangamala Clinical Team',
    role: 'Minor OT & Nursing Care · Jumla Road',
    date: 'Sep 25, 2026',
    readTime: '3 min read',
    img: 'images/gangamala-pharmacy.jpg',
    excerpt:
      'Why professional aseptic dressing and timely follow-up prevent wound infections and speed up clean healing.',
    fullContent: `
      <p>Minor cuts, post-operative incisions, burns, and diabetic foot wounds require strict sterile handling to heal cleanly without secondary infection.</p>
      <h3>What Our Minor OT & Dressing Unit Provides</h3>
      <ul>
        <li>Aseptic wound cleansing and sterile dressing changes</li>
        <li>Minor laceration suturing and timely stitch removal</li>
        <li>Abscess drainage and localized minor procedures</li>
        <li>Immediate access to verified antibiotics, antiseptics, and tetanus prophylaxis from our in-house pharmacy (औषधी पसल)</li>
      </ul>
      <p>Walk into Gangamala Polyclinic on Jumla Road or call <strong>083-520611</strong> for dressing schedules and post-op care.</p>
    `
  }
];

// =========================================================
// PATIENT RECOVERY STORIES & REVIEWS (SURKHET & KARNALI)
// =========================================================
const GM_STORIES = [
  {
    id: 0,
    name: 'Bharat Devkota',
    age: 42,
    location: 'Birendranagar, Surkhet',
    condition: 'Comprehensive OPD & Diagnostic Checkup',
    dept: 'OPD & Diagnostics',
    doctor: 'Gangamala Specialist Team',
    quote:
      'Very nice service! Clean facility, courteous staff, and smooth coordination between specialist consultation, laboratory testing, and the in-house pharmacy.',
    fullStory: `
      <p>Visiting Gangamala Polyclinic on Jumla Road was a refreshing healthcare experience in Birendranagar. From the moment I arrived at the reception desk, the team guided me smoothly through my consultation and diagnostic blood tests.</p>
      <div class="okh-modal-quote">
        "Very nice service — attentive doctors, clean diagnostic lab, and genuine medicines available right at the counter." — Bharat Devkota (5.0★ Verified Review)
      </div>
      <p>Having the haematology lab, ultrasound, and pharmacy under one roof saved my family hours of running across town. I highly recommend Gangamala Polyclinic to everyone in Surkhet.</p>
    `
  },
  {
    id: 1,
    name: 'Kamala Bhandari',
    age: 29,
    location: 'Birendranagar-6, Surkhet',
    condition: 'Complete Antenatal Care & Safe Pregnancy Monitoring',
    dept: 'Gynecology & USG',
    doctor: 'Dr. Kritika Thapa & Dr. D.B. Gurung',
    quote:
      'Dr. Kritika Thapa listened patiently to every concern throughout my pregnancy. Having Dr. D.B. Gurung’s USG and blood tests right downstairs made every antenatal visit stress-free.',
    fullStory: `
      <p>During my first pregnancy, I wanted a gynecologist who took time to explain every test result clearly. Dr. Kritika Thapa’s daily OPD at Gangamala Polyclinic gave me complete confidence from month one.</p>
      <div class="okh-modal-quote">
        "She checked my hemoglobin and blood pressure every visit, coordinated my ultrasound scans with Dr. D.B. Gurung on the same day, and guided our family with warmth." — Kamala Bhandari
      </div>
      <p>Thanks to timely iron management and regular monitoring, my pregnancy progressed smoothly without complications.</p>
    `
  },
  {
    id: 2,
    name: 'Hari Bahadur Shahi',
    age: 58,
    location: 'Narayan, Dailekh',
    condition: 'Hypertension & Cardiac Follow-Up Without Kathmandu Travel',
    dept: 'Cardiology & ECG',
    doctor: 'Dr. Amrit Bogati (Shahid Gangalal Heart Centre)',
    quote:
      'Earlier I had to travel to Kathmandu every few months for my heart checkup. Consulting Dr. Amrit Bogati on the 3rd Saturday right in Surkhet saved us huge travel cost and hardship.',
    fullStory: `
      <p>After being diagnosed with coronary artery disease and high blood pressure, traveling 14 hours to Kathmandu for routine cardiac follow-ups was exhausting for my age.</p>
      <div class="okh-modal-quote">
        "Having a Senior Cardiologist from Shahid Gangalal National Heart Centre regularly available at Gangamala Polyclinic every third Saturday is a blessing for Karnali." — Hari Bahadur Shahi
      </div>
      <p>I completed my ECG and fasting lipid blood work right at Gangamala’s lab before seeing Dr. Amrit Bogati. My medications were adjusted accurately and my blood pressure has stayed steady ever since.</p>
    `
  },
  {
    id: 3,
    name: 'Prakash Roka',
    age: 34,
    location: 'Chhinchu, Surkhet',
    condition: 'Knee Ligament Strain & Chronic Lower Back Pain',
    dept: 'Orthopedics & X-Ray',
    doctor: 'Dr. Tejendra Saud',
    quote:
      'Dr. Tejendra Saud diagnosed my knee injury accurately using the clinic’s X-Ray and guided me through a structured recovery plan without unnecessary procedures.',
    fullStory: `
      <p>After twisting my knee and straining my lower back during work, I struggled to climb stairs for weeks. At Gangamala Polyclinic, Dr. Tejendra Saud examined my joint carefully and reviewed my X-Ray within minutes.</p>
      <div class="okh-modal-quote">
        "Clear diagnosis, honest advice, and targeted medication plus exercise guidance got me back on my feet pain-free in six weeks." — Prakash Roka
      </div>
      <p>I am grateful for having a trusted orthopedic specialist available daily right on Jumla Road.</p>
    `
  },
  {
    id: 4,
    name: 'Srijana Pun',
    age: 25,
    location: 'Birendranagar-4, Surkhet',
    condition: 'Persistent Facial Melasma & Monsoon Fungal Rash',
    dept: 'Dermatology & Skin Care',
    doctor: 'Dr. Susmita Pradhan',
    quote:
      'Over-the-counter creams had damaged my skin for months. Dr. Susmita Pradhan identified the exact issue on my very first visit and restored my skin health completely.',
    fullStory: `
      <p>I had tried several cosmetic fairness and anti-itch creams that only worsened redness and dark patches on my cheeks. Visiting Gangamala’s Skin Care Clinic changed everything.</p>
      <div class="okh-modal-quote">
        "Dr. Susmita Pradhan explained why steroid creams were harming my skin barrier and prescribed a simple, affordable clinical routine." — Srijana Pun
      </div>
      <p>Within two months my irritation disappeared and my skin tone became even and healthy again.</p>
    `
  },
  {
    id: 5,
    name: 'Devi Kumari Thapa',
    age: 49,
    location: 'Mehelkuna, Surkhet',
    condition: 'Gallstone Diagnosis via Senior Radiologist USG',
    dept: 'Radiology & Lab',
    doctor: 'Dr. D.B. Gurung',
    quote:
      'For months I thought my upper abdominal pain was simple gastritis. Dr. D.B. Gurung’s detailed ultrasound scan detected gallstones immediately so I could get proper care.',
    fullStory: `
      <p>Recurring pain after meals had been bothering me for half a year. During my visit to Gangamala Polyclinic, an abdominal USG performed by Senior Radiologist Dr. D.B. Gurung along with liver function blood tests pinpointed gallstones clearly.</p>
      <div class="okh-modal-quote">
        "Fast, accurate ultrasound reporting and kind staff who explained everything in simple Nepali made all the difference." — Devi Kumari Thapa
      </div>
    `
  }
];

// Backward-compatible aliases
const OKH_BLOGS = GM_BLOGS;
const OKH_STORIES = GM_STORIES;
const OKH_DOCTORS_DATA = GM_DOCTORS_DATA;
const OKH_SERVICES = GM_SERVICES;

// =========================================================
// MODAL ENGINE
// =========================================================
function ensureModalContainer() {
  if (document.getElementById('okhModalOverlay')) return;

  const modalHtml = `
    <div class="okh-modal-overlay" id="okhModalOverlay" onclick="handleModalBackdropClick(event)">
      <div class="okh-modal-box" id="okhModalBox">
        <button class="okh-modal-close" onclick="closeOkhModal()" title="Close Modal">
          <i class="fas fa-times"></i>
        </button>
        <div id="okhModalDynamicContent"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOkhModal();
  });
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'okhModalOverlay') {
    closeOkhModal();
  }
}

function closeOkhModal() {
  const overlay = document.getElementById('okhModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openBlogModal(blogId) {
  ensureModalContainer();
  const blog = GM_BLOGS.find((b) => b.id === Number(blogId)) || GM_BLOGS[0];
  const container = document.getElementById('okhModalDynamicContent');

  container.innerHTML = `
    <span class="okh-modal-badge"><i class="fas fa-newspaper"></i> ${blog.cat}</span>
    <h2 class="okh-modal-title">${blog.title}</h2>
    
    <div class="okh-modal-meta">
      <span><i class="fas fa-user-md"></i> <strong>${blog.author}</strong> (${blog.role})</span>
      <span><i class="fas fa-calendar-alt"></i> ${blog.date}</span>
      <span><i class="fas fa-clock"></i> ${blog.readTime}</span>
    </div>

    <img src="${blog.img}" alt="${blog.title}" class="okh-modal-img" style="object-position: top center;">

    <div class="okh-modal-body">
      ${blog.fullContent}
    </div>

    <div class="okh-modal-footer">
      <a href="appointment.html" class="modal-btn-action modal-btn-primary">
        <i class="fa-regular fa-calendar-check"></i> Book OPD Slot
      </a>
      <a href="tel:+97783520611" class="modal-btn-action modal-btn-call">
        <i class="fas fa-phone-alt"></i> 083-520611
      </a>
      <button class="modal-btn-action modal-btn-close" onclick="closeOkhModal()">
        <i class="fas fa-times"></i> Close
      </button>
    </div>
  `;

  document.getElementById('okhModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openStoryModal(storyId) {
  ensureModalContainer();
  const story = GM_STORIES.find((s) => s.id === Number(storyId)) || GM_STORIES[0];
  const container = document.getElementById('okhModalDynamicContent');

  container.innerHTML = `
    <span class="okh-modal-badge" style="background: rgba(2, 132, 199, 0.14); color: #1e3a8a;">
      <i class="fas fa-heart-pulse"></i> Patient Experience
    </span>
    <h2 class="okh-modal-title">${story.name} — ${story.condition}</h2>
    
    <div class="okh-modal-meta">
      <span><i class="fas fa-map-marker-alt"></i> ${story.location}</span>
      <span><i class="fas fa-stethoscope"></i> ${story.dept}</span>
      <span><i class="fas fa-user-md"></i> Specialist: ${story.doctor}</span>
    </div>

    <div class="okh-modal-quote">
      "${story.quote}"
    </div>

    <div class="okh-modal-body">
      ${story.fullStory}
    </div>

    <div class="okh-modal-footer">
      <a href="appointment.html" class="modal-btn-action modal-btn-primary">
        <i class="fa-regular fa-calendar-check"></i> Book Consultation
      </a>
      <a href="tel:+97783520611" class="modal-btn-action modal-btn-call">
        <i class="fas fa-phone-alt"></i> 083-520611
      </a>
      <button class="modal-btn-action modal-btn-close" onclick="closeOkhModal()">
        <i class="fas fa-times"></i> Close
      </button>
    </div>
  `;

  document.getElementById('okhModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openServiceModal(serviceId) {
  ensureModalContainer();
  const service = GM_SERVICES.find((s) => s.id === Number(serviceId)) || GM_SERVICES[0];
  const container = document.getElementById('okhModalDynamicContent');

  let capabilitiesHtml = service.capabilities
    .map(
      (cap) => `
    <div style="display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; font-weight: 600; line-height: 1.5;">
      <i class="fas fa-check-circle" style="color: var(--primary-cyan); font-size: 15px; margin-top: 2px; flex-shrink: 0;"></i>
      <span>${cap}</span>
    </div>
  `
    )
    .join('');

  let equipmentsHtml = service.equipments
    .map(
      (eq) => `
    <div style="background: var(--bg-light); border-radius: 16px; overflow: hidden; border: 1px solid #dbeafe; display: flex; flex-direction: column;">
      <div style="height: 165px; overflow: hidden;">
        <img src="${eq.img}" alt="${eq.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="padding: 14px 16px; flex-grow: 1;">
        <strong style="font-size: 14px; color: var(--primary-dark); display: block; margin-bottom: 4px;">${eq.title}</strong>
        <p style="font-size: 12.5px; color: var(--text-gray); margin-bottom: 0; line-height: 1.5;">${eq.desc}</p>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = `
    <span class="okh-modal-badge"><i class="fas ${service.icon}"></i> ${service.cat}</span>
    <h2 class="okh-modal-title" style="margin-bottom: 8px;">${service.title}</h2>
    
    <div class="okh-modal-meta" style="margin-bottom: 18px; padding-bottom: 12px;">
      <span><i class="fas fa-user-md" style="color: var(--primary-cyan);"></i> <strong>${service.doctor}</strong></span>
      <span><i class="fas fa-clock" style="color: var(--primary-cyan);"></i> ${service.schedule}</span>
    </div>

    <img src="${service.heroImg}" alt="${service.title}" class="okh-modal-img" style="height: clamp(220px, 30vw, 320px); object-fit: cover; object-position: top center;">

    <div class="okh-modal-body" style="margin-top: 18px;">
      <p style="font-size: 15px; line-height: 1.7; margin-bottom: 20px; color: var(--primary-dark); font-weight: 500;">
        ${service.overview}
      </p>

      <h3 style="font-size: 17px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i class="fas fa-stethoscope" style="color: var(--primary-cyan);"></i> Clinical Scope & Specializations:
      </h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin-bottom: 25px;">
        ${capabilitiesHtml}
      </div>

      <h3 style="font-size: 17px; font-weight: 700; color: var(--primary-dark); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i class="fas fa-microscope" style="color: var(--primary-cyan);"></i> On-Site Support & Facilities:
      </h3>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 10px;">
        ${equipmentsHtml}
      </div>
    </div>

    <div class="okh-modal-footer">
      <a href="appointment.html" class="modal-btn-action modal-btn-primary">
        <i class="fa-regular fa-calendar-check"></i> Book Consultation
      </a>
      <a href="tel:+97783520611" class="modal-btn-action modal-btn-call">
        <i class="fas fa-phone-alt"></i> 083-520611
      </a>
      <button class="modal-btn-action modal-btn-close" onclick="closeOkhModal()">
        <i class="fas fa-times"></i> Close
      </button>
    </div>
  `;

  document.getElementById('okhModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// =========================================================
// INTERACTIVE BOOKING & CONTACT CONFIRMATION MODALS
// =========================================================
function handleAppointmentSubmit(e) {
  e.preventDefault();
  ensureModalContainer();
  const form = e.target;
  const name = (form.querySelector('input[type="text"]') || {}).value || 'Valued Patient';
  const phone = (form.querySelector('input[type="tel"]') || {}).value || '';
  const selects = form.querySelectorAll('select');
  const dept = selects[0] ? selects[0].value : 'Specialist OPD';
  const dateInput = form.querySelector('input[type="date"]');
  const prefDate = dateInput && dateInput.value ? dateInput.value : 'Next Available Day';
  const slot = selects[1] ? selects[1].value : 'Morning OPD';
  const token = 'GM-' + Math.floor(1000 + Math.random() * 9000);

  const container = document.getElementById('okhModalDynamicContent');
  container.innerHTML = `
    <span class="okh-modal-badge" style="background: rgba(2, 132, 199, 0.14); color: #1e3a8a;">
      <i class="fas fa-circle-check"></i> Appointment Request Received
    </span>
    <h2 class="okh-modal-title">Token Reference: ${token}</h2>
    <p style="font-size: 14.5px; color: var(--text-gray); margin-bottom: 18px;">
      Thank you, <strong>${name}</strong>. Your consultation request at <strong>Gangamala Polyclinic Pvt. Ltd.</strong> (Jumla Road, Birendranagar-6, Surkhet) has been logged. Our reception desk will confirm your slot on <strong>${phone}</strong>.
    </p>
    <div style="background: var(--bg-light); border: 1px solid #dbeafe; border-radius: 16px; padding: 18px 20px; display: grid; gap: 10px; font-size: 14px; margin-bottom: 20px;">
      <div><strong>Specialty / Doctor:</strong> ${dept}</div>
      <div><strong>Preferred Date:</strong> ${prefDate}</div>
      <div><strong>Preferred Slot:</strong> ${slot}</div>
      <div><strong>Clinic Reception:</strong> <a href="tel:+97783520611" style="color: var(--primary-cyan); font-weight: 700;">+977 83-520611</a></div>
    </div>
    <div class="okh-modal-footer">
      <a href="tel:+97783520611" class="modal-btn-action modal-btn-primary">
        <i class="fas fa-phone-alt"></i> Call Reception (083-520611)
      </a>
      <button class="modal-btn-action modal-btn-close" onclick="closeOkhModal()">
        <i class="fas fa-check"></i> Done
      </button>
    </div>
  `;

  document.getElementById('okhModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  form.reset();
  return false;
}

function handleContactSubmit(e) {
  e.preventDefault();
  ensureModalContainer();
  const form = e.target;
  const name = (form.querySelector('input[type="text"]') || {}).value || 'Valued Visitor';

  const container = document.getElementById('okhModalDynamicContent');
  container.innerHTML = `
    <span class="okh-modal-badge" style="background: rgba(2, 132, 199, 0.14); color: #1e3a8a;">
      <i class="fas fa-paper-plane"></i> Inquiry Sent
    </span>
    <h2 class="okh-modal-title">Thank You, ${name}!</h2>
    <p style="font-size: 14.5px; color: var(--text-gray); margin-bottom: 18px; line-height: 1.7;">
      Your message has been received by the <strong>Gangamala Polyclinic Pvt. Ltd.</strong> helpdesk in Birendranagar-6, Surkhet. For immediate OPD timings, USG/Lab inquiries, or 3rd Saturday Senior Cardiologist registration, call us directly at <strong>+977 83-520611</strong>.
    </p>
    <div class="okh-modal-footer">
      <a href="tel:+97783520611" class="modal-btn-action modal-btn-primary">
        <i class="fas fa-phone-alt"></i> Call 083-520611
      </a>
      <button class="modal-btn-action modal-btn-close" onclick="closeOkhModal()">
        <i class="fas fa-times"></i> Close
      </button>
    </div>
  `;

  document.getElementById('okhModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  form.reset();
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  ensureModalContainer();
});

// =========================================================
// AUTOMATIC GRID RENDERING FOR BLOGS, STORIES & DOCTORS
// =========================================================
let globalBlogState = {
  list: [...GM_BLOGS],
  itemsPerPage: 4,
  currentPage: 1
};

let globalStoryState = {
  list: [...GM_STORIES],
  itemsPerPage: 4,
  currentPage: 1
};

let globalDoctorState = {
  list: [...GM_DOCTORS_DATA],
  itemsPerPage: 6,
  currentPage: 1
};

function renderBlogsPage() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const start = (globalBlogState.currentPage - 1) * globalBlogState.itemsPerPage;
  const end = start + globalBlogState.itemsPerPage;
  const currentItems = globalBlogState.list.slice(start, end);

  if (currentItems.length === 0) {
    grid.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-gray);">No articles found matching your criteria.</div>';
    renderPaginationControls('paginationControls', 0, globalBlogState, renderBlogsPage);
    return;
  }

  currentItems.forEach((blog, idx) => {
    const card = document.createElement('div');
    card.className = 'blog-card clickable-card fade-up show delay-' + ((idx % 2) + 1);
    card.onclick = () => openBlogModal(blog.id);
    card.innerHTML = `
      <div class="blog-img-wrapper">
        <span class="blog-category">${blog.cat}</span>
        <img src="${blog.img}" alt="${blog.title}" loading="lazy" style="object-position: top center;">
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span><i class="fas fa-calendar-alt"></i> ${blog.date}</span>
          <span><i class="fas fa-user-md"></i> ${blog.author}</span>
        </div>
        <h3 class="blog-title"><a href="javascript:void(0)">${blog.title}</a></h3>
        <p class="blog-excerpt">${blog.excerpt}</p>
        <span class="card-read-hint">
          Read Full Article & Doctor Advice <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    `;
    grid.appendChild(card);
  });

  renderPaginationControls('paginationControls', globalBlogState.list.length, globalBlogState, renderBlogsPage);
}

function renderStoriesPage() {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const start = (globalStoryState.currentPage - 1) * globalStoryState.itemsPerPage;
  const end = start + globalStoryState.itemsPerPage;
  const currentItems = globalStoryState.list.slice(start, end);

  if (currentItems.length === 0) {
    grid.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-gray);">No patient stories found.</div>';
    renderPaginationControls('paginationControls', 0, globalStoryState, renderStoriesPage);
    return;
  }

  currentItems.forEach((story, idx) => {
    const card = document.createElement('div');
    card.className = 'patient-story-card clickable-card fade-up show delay-' + ((idx % 2) + 1);
    card.onclick = () => openStoryModal(story.id);
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
        <span style="font-size: 11.5px; font-weight: 700; color: var(--primary-cyan); background: rgba(2,132,199,0.1); padding: 4px 10px; border-radius: 12px; text-transform: uppercase;">
          ${story.dept}
        </span>
        <span style="font-size: 12px; color: var(--text-gray);"><i class="fas fa-map-marker-alt" style="color: var(--primary-cyan);"></i> ${story.location}</span>
      </div>
      <h3 style="font-size: 17px; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">
        ${story.name} <span style="font-size: 13px; font-weight: 500; color: var(--text-gray);">(${story.age} yrs)</span>
      </h3>
      <p class="patient-story-content">"${story.quote}"</p>
      <div style="font-size: 13px; color: var(--text-gray); margin-top: 10px;">
        <strong>Treating Specialist:</strong> ${story.doctor}
      </div>
      <span class="card-read-hint">
        Read Full Patient Story <i class="fas fa-arrow-right"></i>
      </span>
    `;
    grid.appendChild(card);
  });

  renderPaginationControls('paginationControls', globalStoryState.list.length, globalStoryState, renderStoriesPage);
}

function renderDoctorsPage() {
  const grid = document.getElementById('doctorsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const start = (globalDoctorState.currentPage - 1) * globalDoctorState.itemsPerPage;
  const end = start + globalDoctorState.itemsPerPage;
  const currentItems = globalDoctorState.list.slice(start, end);

  currentItems.forEach((doc, idx) => {
    const card = document.createElement('div');
    card.className = 'team-card fade-up show delay-' + ((idx % 4) + 1);
    card.innerHTML = `
      <div class="team-img-container">
        <img src="${doc.img}" alt="${doc.name}">
        <div class="team-social-pill">
          <a href="tel:+97783520611" title="Call Reception 083-520611"><i class="fas fa-phone-alt"></i></a>
          <a href="appointment.html" title="Book OPD Slot"><i class="fas fa-calendar-check"></i></a>
        </div>
      </div>
      <span class="team-dept-badge">${doc.dept}</span>
      <h3>${doc.name}</h3>
      <div class="team-subtext">${doc.desc}</div>
      <div class="team-schedule-box">${doc.schedule}</div>
    `;
    grid.appendChild(card);
  });

  renderPaginationControls('paginationControls', globalDoctorState.list.length, globalDoctorState, renderDoctorsPage);
}

function filterDoctorsByCategory(cat, btn) {
  if (btn) {
    document.querySelectorAll('.doc-filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  }
  if (cat === 'All') {
    globalDoctorState.list = [...GM_DOCTORS_DATA];
  } else {
    globalDoctorState.list = GM_DOCTORS_DATA.filter((d) =>
      d.category.toLowerCase().includes(cat.toLowerCase()) ||
      d.dept.toLowerCase().includes(cat.toLowerCase())
    );
  }
  globalDoctorState.currentPage = 1;
  renderDoctorsPage();
}

function renderPaginationControls(elementId, totalItems, state, renderFn) {
  const controls = document.getElementById(elementId);
  if (!controls) return;
  controls.innerHTML = '';
  const totalPages = Math.ceil(totalItems / state.itemsPerPage);

  if (totalPages <= 1) return;

  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevBtn.disabled = state.currentPage === 1;
  prevBtn.onclick = () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderFn();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };
  controls.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.innerText = i;
    if (i === state.currentPage) pageBtn.className = 'active';
    pageBtn.onclick = () => {
      state.currentPage = i;
      renderFn();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    };
    controls.appendChild(pageBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextBtn.disabled = state.currentPage === totalPages;
  nextBtn.onclick = () => {
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderFn();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };
  controls.appendChild(nextBtn);
}

function handleBlogSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    globalBlogState.list = [...GM_BLOGS];
  } else {
    globalBlogState.list = GM_BLOGS.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.cat.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q)
    );
  }
  globalBlogState.currentPage = 1;
  renderBlogsPage();
}

function filterBlogCategory(cat) {
  if (cat === 'All') {
    globalBlogState.list = [...GM_BLOGS];
  } else {
    globalBlogState.list = GM_BLOGS.filter((b) => b.cat.toLowerCase().includes(cat.toLowerCase()));
  }
  globalBlogState.currentPage = 1;
  renderBlogsPage();
}

function filterStoryDept(dept) {
  if (dept === 'All') {
    globalStoryState.list = [...GM_STORIES];
  } else {
    globalStoryState.list = GM_STORIES.filter((s) => s.dept.toLowerCase().includes(dept.toLowerCase()));
  }
  globalStoryState.currentPage = 1;
  renderStoriesPage();
}

document.addEventListener('DOMContentLoaded', function () {
  renderBlogsPage();
  renderStoriesPage();
  renderDoctorsPage();
});

// =========================================================
// THEME CONTROLLER (DARK MODE / LIGHT MODE)
// =========================================================
function initTheme() {
  const savedTheme = localStorage.getItem('gm_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(activeTheme);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('theme-dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('theme-dark');
  }
  updateThemeIcons(theme);
}

function toggleTheme() {
  const isDark =
    document.body.classList.contains('theme-dark') ||
    document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('gm_theme', newTheme);
  applyTheme(newTheme);
}

function updateThemeIcons(theme) {
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach((btn) => {
    btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

initTheme();
