// ==========================================
// 1. DYNAMIC CONTENT ENGINE
// ==========================================
const contentDB = {
  // --- Left Sidebar: Main Contents ---
  home: `
    <span class="badge">Latest Updates</span>
    <h2>Welcome to SAFA & ATAMA</h2>
    <div class="hero-image-placeholder">Professional Clinic Reception Image Here</div>
    <p>Bridging the gap between ancient Prophetic healing and modern medical acupuncture. Explore our clinic for world-class holistic treatments, or join our academy to build a career in alternative medicine.</p>
    <p><strong>Recent News:</strong> Enrollment for the 2027 Master of Acupuncture batch is now open. Clinic wait times have been reduced with our new booking system.</p>
  `,
  testimonials: `
    <h2>Patient & Student Stories</h2>
    <p>"After suffering from chronic migraines for 5 years, the Hijama sessions at SAFA Clinic completely transformed my life." - <strong>Ahmed K.</strong></p>
    <hr style="margin:20px 0; border:0; border-top:1px solid #e2e8f0;">
    <p>"The D.A.T. program at ATAMA was rigorous and professional. I now run my own successful practice." - <strong>Dr. Fathima R.</strong></p>
  `,
  achievements: `
    <h2>Our Milestones</h2>
    <ul>
      <li><strong>10,000+</strong> Patients successfully treated since inception.</li>
      <li><strong>500+</strong> Certified acupuncture practitioners graduated from ATAMA Academy.</li>
      <li><strong>ISO 9001:2015</strong> Certified for Quality Medical Education.</li>
      <li>Published over 15 peer-reviewed case studies on Prophetic Medicine.</li>
    </ul>
  `,
  location: `
    <h2>Visit Us</h2>
    <p>We are centrally located in Nagercoil, equipped with modern consultation rooms and fully sanitized practical training halls.</p>
    <div class="hero-image-placeholder">Google Map Integration Here</div>
    <p><strong>SAFA & ATAMA Headquarters</strong><br>123 Healing Street, Nagercoil, Tamil Nadu 629001</p>
  `,
  contact: `
    <h2>Get in Touch</h2>
    <p>Our reception is open from 9 AM to 7 PM, Monday through Saturday.</p>
    <ul>
      <li><strong>Clinic Appointments:</strong> +91 98765 43210</li>
      <li><strong>Academy Admissions:</strong> +91 91234 56780</li>
      <li><strong>Email:</strong> admin@safaatama.com</li>
    </ul>
  `,

  // --- Right Sidebar: Treatments ---
  acu: `
    <span class="badge">Clinic Service</span>
    <h2>Traditional Acupuncture</h2>
    <div class="hero-image-placeholder">Acupuncture Treatment Image Here</div>
    <p>Acupuncture involves the insertion of extremely thin needles through your skin at strategic points on your body. It is a key component of traditional Chinese medicine, optimized by our practitioners for pain relief and wellness.</p>
    <p><strong>Best for:</strong> Back pain, arthritis, anxiety, and digestive issues.</p>
  `,
  hijama: `
    <span class="badge">Clinic Service</span>
    <h2>Wet Cupping (Hijama)</h2>
    <p>Hijama is an ancient, holistic method for the treatment of a variety of diseases. It falls under the category of Prophetic Medicine (Tibb-e-Nabawi) and involves drawing out stagnant, congested blood.</p>
    <ul>
      <li>Removes toxins and stimulates the lymphatic system.</li>
      <li>Improves local blood circulation.</li>
      <li>Highly sterilized, single-use equipment guaranteed.</li>
    </ul>
  `,
  dry: `
    <span class="badge">Clinic Service</span>
    <h2>Dry Cupping</h2>
    <p>Unlike Hijama, dry cupping does not involve any incisions. Suction cups are applied to the skin to create a vacuum, which lifts the muscle tissue and promotes deep relaxation and blood flow.</p>
    <p>Excellent for athletes and those suffering from deep muscle tension.</p>
  `,
  herbal: `
    <span class="badge">Clinic Service</span>
    <h2>Herbal Medicine</h2>
    <p>We provide prescribed natural remedies sourced from organic herbs, tailored to support your immune system, balance hormones, and aid post-treatment recovery.</p>
  `,
  moxa: `
    <span class="badge">Clinic Service</span>
    <h2>Moxibustion</h2>
    <p>A form of heat therapy in which dried plant materials called "moxa" are burned on or very near the surface of the skin to invigorate the flow of Qi and dispel pathogenic cold.</p>
  `,

  // --- Right Sidebar: Courses ---
  dat: `
    <span class="badge">Academy Course</span>
    <h2>Diploma in Acupuncture Therapy (D.A.T.)</h2>
    <p><strong>Duration:</strong> 6 Months</p>
    <p>This foundational diploma covers the essential principles of meridians, Yin-Yang theory, needle manipulation techniques, and clinical hygiene. Perfect for beginners entering alternative medicine.</p>
  `,
  macu: `
    <span class="badge">Academy Course</span>
    <h2>Master of Acupuncture (M.Acu)</h2>
    <p><strong>Duration:</strong> 1 Year</p>
    <p>An advanced curriculum designed for D.A.T. graduates. It includes complex pathological case studies, advanced diagnostic techniques, and a mandatory 3-month clinical internship.</p>
  `,
  tibb: `
    <span class="badge">Academy Course</span>
    <h2>Tibb-e-Nabawi Certification</h2>
    <p><strong>Duration:</strong> 3 Months</p>
    <p>A specialized, culturally rich course focusing purely on authentic Prophetic medical practices, with intensive hands-on training in Hijama (Wet Cupping), dietary Sunnahs, and herbal remedies.</p>
  `,
  pulse: `
    <span class="badge">Academy Course</span>
    <h2>Advanced Pulse Diagnosis</h2>
    <p><strong>Duration:</strong> 2 Weeks Intensive</p>
    <p>Master the ancient art of feeling the pulse at various levels and positions to accurately diagnose internal organ health and energy blockages.</p>
  `
};

function loadContent(contentKey, clickedElement) {
  const viewport = document.getElementById('dynamic-viewport');
  viewport.innerHTML = contentDB[contentKey];
  
  viewport.style.animation = 'none';
  viewport.offsetHeight; 
  viewport.style.animation = 'fadeIn 0.4s ease-in-out';

  const allLinks = document.querySelectorAll('.side-nav a');
  allLinks.forEach(link => link.classList.remove('active'));

  if (clickedElement) {
    clickedElement.classList.add('active');
  }
}

// ==========================================
// 2. SHARED PAYMENT MODAL LOGIC
// ==========================================
function togglePayment() {
  const modal = document.getElementById('payment-modal');
  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}

// ==========================================
// 3. DAILY HADITH ENGINE (40 Fully Authenticated Hadiths)
// ==========================================
const hadithDatabase = [
  // I. Core Principles
  { text: "مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً<br><br>Allah has not sent down any disease but He has also sent down a cure for it.", reference: "Sahih al-Bukhari 5678" },
  { text: "تَدَاوَوْا فَإِنَّ اللَّهَ عَزَّ وَجَلَّ لَمْ يَضَعْ دَاءً إِلاَّ وَضَعَ لَهُ دَوَاءً، غَيْرَ دَاءٍ وَاحِدٍ الْهَرَمُ<br><br>Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it, with the exception of one disease, namely old age.", reference: "Sunan Abi Dawud 3855 (Sahih)" },
  { text: "الشِّفَاءُ فِي ثَلاَثَةٍ: شَرْبَةِ عَسَلٍ، وَشَرْطَةِ مِحْجَمٍ، وَكَيَّةِ نَارٍ، وَأَنْهَى أُمَّتِي عَنِ الكَيِّ<br><br>Healing is in three things: A gulp of honey, cupping (hijama), and branding with fire. But I forbid my followers to use branding with fire.", reference: "Sahih al-Bukhari 5680" },
  { text: "لاَ تُكْرِهُوا مَرْضَاكُمْ عَلَى الطَّعَامِ وَالشَّرَابِ، فَإِنَّ اللَّهَ عَزَّ وَجَلَّ يُطْعِمُهُمْ وَيَسْقِيهِمْ<br><br>Do not force your sick to eat or drink, for Allah, the Mighty and Sublime, feeds them and gives them to drink.", reference: "Sunan Ibn Majah 3444 (Hasan)" },
  { text: "الحُمَّى مِنْ فَيْحِ جَهَنَّمَ، فَأَبْرِدُوهَا بِالْمَاءِ<br><br>Fever is from the heat of Hell, so cool it down with water.", reference: "Sahih al-Bukhari 3261" },
  // II. Hijama (Wet Cupping)
  { text: "إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الحِجَامَةُ<br><br>The best medical treatment you can apply is cupping (hijama).", reference: "Sahih Muslim 1577" },
  { text: "مَنِ احْتَجَمَ لِسَبْعَ عَشْرَةَ، وَتِسْعَ عَشْرَةَ، وَإِحْدَى وَعِشْرِينَ، كَانَ شِفَاءً مِنْ كُلِّ دَاءٍ<br><br>Whoever performs cupping on the 17th, 19th, or 21st day (of the lunar month), then it is a cure for every disease.", reference: "Sunan Abi Dawud 3861 (Hasan)" },
  { text: "كَانَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَحْتَجِمُ فِي الأَخْدَعَيْنِ وَالْكَاهِلِ<br><br>The Prophet (saw) used to have himself cupped on the two jugular veins (neck) and the upper part of the back (shoulders).", reference: "Sunan Abi Dawud 3859 (Sahih)" },
  { text: "كَانَ لاَ يَشْتَكِي إِلَيْهِ أَحَدٌ وَجَعًا فِي رَأْسِهِ إِلاَّ قَالَ: احْتَجِمْ، وَلاَ وَجَعًا فِي رِجْلَيْهِ إِلاَّ قَالَ: اخْضِبْهُمَا بِالْحِنَّاءِ<br><br>Whenever anyone complained of a headache to the Prophet, he said: 'Get yourself cupped.' And if anyone complained of pain in his legs, he said: 'Dye them with henna.'", reference: "Sunan Abi Dawud 3858 (Hasan)" },
  // III. Prophetic Herbs & Foods
  { text: "فِي الحَبَّةِ السَّوْدَاءِ شِفَاءٌ مِنْ كُلِّ دَاءٍ، إِلَّا السَّامَ<br><br>There is healing in black cumin for all diseases except death.", reference: "Sahih al-Bukhari 5688" },
  { text: "كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ<br><br>Eat olive oil and massage it over your bodies, for it is a blessed tree.", reference: "Jami` at-Tirmidhi 1851 (Sahih)" },
  { text: "مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ<br><br>The water of Zamzam is for whatever it is drunk for (including healing).", reference: "Sunan Ibn Majah 3062 (Sahih)" },
  { text: "مَنْ تَصَبَّحَ كُلَّ يَوْمٍ سَبْعَ تَمَرَاتٍ عَجْوَةً، لَمْ يَضُرَّهُ فِي ذَلِكَ اليَوْمِ سُمٌّ وَلاَ سِحْرٌ<br><br>He who eats seven 'Ajwa dates every morning, will not be affected by poison or magic on the day he eats them.", reference: "Sahih al-Bukhari 5445" },
  { text: "التَّلْبِينَةُ مُجِمَّةٌ لِفُؤَادِ الْمَرِيضِ، تَذْهَبُ بِبَعْضِ الْحُزْنِ<br><br>Talbina soothes the heart of the sick person, and it takes away some of their sorrow.", reference: "Sahih al-Bukhari 5689" },
  { text: "عَلَيْكُمْ بِالسَّنَا وَالسَّنُّوتِ، فَإِنَّ فِيهِمَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ<br><br>You should use Senna and Sanut (fennel), for in them there is healing for every disease, except death.", reference: "Sunan Ibn Majah 3457 (Sahih)" },
  { text: "عَلَيْكُمْ بِهَذَا العُودِ الهِنْدِيِّ، فَإِنَّ فِيهِ سَبْعَةَ أَشْفِيَةٍ<br><br>Use this 'Oud al-Hindi (Indian Costus), for it contains seven types of remedies, among them is a treatment for pleurisy.", reference: "Sahih al-Bukhari 5692" },
  { text: "الكَمْأَةُ مِنَ المَنِّ، وَمَاؤُهَا شِفَاءٌ لِلْعَيْنِ<br><br>Truffles are like Manna, and their water is a healing for eye diseases.", reference: "Sahih al-Bukhari 4639" },
  { text: "اكْتَحِلُوا بِالإِثْمِدِ فَإِنَّهُ يَجْلُو الْبَصَرَ وَيُنْبِتُ الشَّعَرَ<br><br>Use Ithmid, for it clears the vision and grows the eyelashes.", reference: "Sunan Ibn Majah 3495 (Sahih)" },
  { text: "عَلَيْكُمْ بِأَلْبَانِ الْبَقَرِ فَإِنَّهَا تَرُمُّ مِنْ كُلِّ الشَّجَرِ وَهُوَ شِفَاءٌ مِنْ كُلِّ دَاءٍ<br><br>Drink cow's milk, for it feeds on all kinds of herbs and its milk is a healing for every disease.", reference: "Al-Mu'jam al-Kabir (Hasan)" },
  // IV. Diet & Digestion
  { text: "مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ... فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ<br><br>A human being fills no worse vessel than his stomach... But if he must, then one third for his food, one third for his drink, and one third for his breath.", reference: "Jami` at-Tirmidhi 2380 (Sahih)" },
  { text: "بَرَكَةُ الطَّعَامِ الْوُضُوءُ قَبْلَهُ وَالْوُضُوءُ بَعْدَهُ<br><br>The blessing of food is washing the hands before it and washing the hands after it.", reference: "Jami` at-Tirmidhi 1846 (Hasan)" },
  { text: "إِذَا شَرِبَ أَحَدُكُمْ فَلاَ يَتَنَفَّسْ فِي الإِنَاءِ<br><br>When one of you drinks, he should not breathe into the vessel.", reference: "Sahih al-Bukhari 5630" },
  { text: "لاَ يَشْرَبَنَّ أَحَدٌ مِنْكُمْ قَائِمًا فَمَنْ نَسِيَ فَلْيَسْتَقِئْ<br><br>None of you should drink while standing; and if anyone forgets, he must vomit (empty the stomach).", reference: "Sahih Muslim 2024" },
  { text: "لاَ يَأْكُلَنَّ أَحَدٌ مِنْكُمْ بِشِمَالِهِ وَلاَ يَشْرَبَنَّ بِهَا<br><br>Let none of you eat with his left hand or drink with his left hand, for the Shaytan eats and drinks with his left hand.", reference: "Sahih Muslim 2020" },
  // V. Quarantine & Hygiene
  { text: "إِذَا سَمِعْتُمْ بِالطَّاعُونِ بِأَرْضٍ فَلاَ تَدْخُلُوهَا، وَإِذَا وَقَعَ بِأَرْضٍ وَأَنْتُمْ بِهَا فَلاَ تَخْرُجُوا مِنْهَا<br><br>If you hear of an outbreak of plague in a land, do not enter it; but if the plague breaks out in a place while you are in it, do not leave that place.", reference: "Sahih al-Bukhari 5728" },
  { text: "وَفِرَّ مِنَ الْمَجْذُومِ كَمَا تَفِرُّ مِنَ الأَسَدِ<br><br>Flee from the leper (infectious disease) as you would flee from a lion.", reference: "Sahih al-Bukhari 5707" },
  { text: "غَطُّوا الإِنَاءَ وَأَوْكُوا السِّقَاءَ، فَإِنَّ فِي السَّنَةِ لَيْلَةً يَنْزِلُ فِيهَا وَبَاءٌ<br><br>Cover the vessels and tie the waterskins, for there is a night in the year when pestilence descends.", reference: "Sahih Muslim 2012" },
  { text: "الطُّهُورُ شَطْرُ الإِيمَانِ<br><br>Cleanliness (purification) is half of faith.", reference: "Sahih Muslim 223" },
  { text: "لَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي لأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلاَةٍ<br><br>Were it not that I might over-burden my believers, I would have ordered them to use the Miswak (tooth-stick) at every prayer.", reference: "Sahih al-Bukhari 887" },
  { text: "كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا عَطَسَ وَضَعَ يَدَهُ أَوْ ثَوْبَهُ عَلَى فِيْهِ<br><br>Whenever the Messenger of Allah sneezed, he would cover his mouth with his hand or a piece of cloth.", reference: "Jami` at-Tirmidhi 2745 (Sahih)" },
  { text: "التَّثَاؤُبُ مِنَ الشَّيْطَانِ، فَإِذَا تَثَاءَبَ أَحَدُكُمْ فَلْيَرُدَّهُ مَا اسْتَطَاعَ<br><br>Yawning is from Satan. When one of you yawns, let him suppress it as much as he can.", reference: "Sahih al-Bukhari 6226" },
  { text: "إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنْ نَوْمِهِ فَلاَ يَغْمِسْ يَدَهُ فِي الإِنَاءِ حَتَّى يَغْسِلَهَا ثَلاَثًا<br><br>When anyone of you wakes up from sleep, he should not put his hand in the wash bowl until he has washed it three times.", reference: "Sahih al-Bukhari 162" },
  { text: "طُهُورُ إِنَاءِ أَحَدِكُمْ إِذَا وَلَغَ فِيهِ الْكَلْبُ، أَنْ يَغْسِلَهُ سَبْعَ مَرَّاتٍ أُولاَهُنَّ بِالتُّرَابِ<br><br>The cleansing of the utensil belonging to one of you, after it has been licked by a dog, is to wash it seven times, using soil for the first time.", reference: "Sahih Muslim 279" },
  { text: "إِذَا أَتَيْتَ مَضْجَعَكَ فَتَوَضَّأْ وُضُوءَكَ لِلصَّلاَةِ، ثُمَّ اضْطَجِعْ عَلَى شِقِّكَ الأَيْمَنِ<br><br>When you go to bed, perform ablution as is done for prayer; then lie down on your right side.", reference: "Sahih al-Bukhari 247" },
  { text: "إِذَا كَانَ أَحَدُكُمْ فِي الْفَيْءِ فَقَلَصَ عَنْهُ الظِّلُّ وَصَارَ بَعْضُهُ فِي الشَّمْسِ وَبَعْضُهُ فِي الظِّلِّ فَلْيَقُمْ<br><br>If one of you is in the sun and the shadow draws away from him so that he is partly in the sun and partly in the shade, he should get up (move).", reference: "Sunan Abi Dawud 4821 (Sahih)" },
  // VI. Spiritual Healing & Bioethics
  { text: "وَمَا يُدْرِيكَ أَنَّهَا رُقْيَةٌ<br><br>(Regarding reciting Al-Fatihah over a scorpion sting) The Prophet smiled and said, 'How did you know that it is a Ruqyah (healing)?'", reference: "Sahih al-Bukhari 5006" },
  { text: "كَانَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِذَا اشْتَكَى يَقْرَأُ عَلَى نَفْسِهِ بِالْمُعَوِّذَاتِ وَيَنْفُثُ<br><br>Whenever the Messenger of Allah (saw) became ill, he would recite the Mu'awwidhat (Surah Al-Falaq and An-Nas) and blow over his body.", reference: "Sahih al-Bukhari 5016" },
  { text: "لاَ ضَرَرَ وَلاَ ضِرَارَ<br><br>There should be neither harming (of oneself or others) nor reciprocating harm.", reference: "Sunan Ibn Majah 2340 (Sahih)" },
  { text: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ<br><br>A strong believer is better and is more lovable to Allah than a weak believer, and there is good in everyone.", reference: "Sahih Muslim 2664" },
  { text: "لاَ عَدْوَى وَلاَ طِيَرَةَ<br><br>There is no 'Adwa (disease transmission independent of Allah's will) and no Tiyarah (superstitious evil omens).", reference: "Sahih al-Bukhari 5707" }
];

function setDailyHadith() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const targetIndex = dayOfYear % hadithDatabase.length;
  const dailyHadith = hadithDatabase[targetIndex];
  
  const textElement = document.getElementById('hadith-text');
  const refElement = document.getElementById('hadith-ref');
  
  if(textElement && refElement) {
    // Notice innerHTML is used here now instead of textContent to render the <br> tags properly
    textElement.innerHTML = `"${dailyHadith.text}"`;
    refElement.innerHTML = `— ${dailyHadith.reference}`;
  }
}

// Load Home content and set Hadith on initial page load
window.onload = () => {
  setDailyHadith();
  loadContent('home', document.querySelector('.side-nav a.active'));
};
