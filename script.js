// ==========================================
// 1. SHARED PAYMENT MODAL LOGIC
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
// 2. EXPANDED TIBB-E-NABAWI DATABASE
// ==========================================
const hadithDatabase = [
  { text: "There is healing in black cumin for all diseases except death.", reference: "Sahih al-Bukhari 5688" },
  { text: "Healing is in three things: A gulp of honey, cupping (hijama), and branding with fire, but I forbid my followers to use branding with fire.", reference: "Sahih al-Bukhari 5680" },
  { text: "Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it, with the exception of one disease, namely old age.", reference: "Sunan Abi Dawud 3855" },
  { text: "If there is any healing in your medicines, then it is in cupping, a gulp of honey or branding with fire that suits the ailment.", reference: "Sahih al-Bukhari 5683" },
  { text: "The best medical treatment you can apply is cupping (hijama).", reference: "Sahih Muslim 1577" },
  { text: "Eat olive oil and massage it over your bodies, for it is a blessed tree.", reference: "Jami` at-Tirmidhi 1851" },
  { text: "Talbina (barley broth) soothes the heart of the sick person, and it takes away some of their sorrow.", reference: "Sahih al-Bukhari 5689" },
  { text: "The water of Zamzam is for whatever it is drunk for. If you drink it for healing, Allah will heal you.", reference: "Sunan Ibn Majah 3062" },
  { text: "He who eats seven 'Ajwa dates every morning, will not be affected by poison or magic on the day he eats them.", reference: "Sahih al-Bukhari 5445" },
  { text: "Use this 'Oud al-Hindi (Indian Aloe Wood), for it contains seven types of remedies, among them is a treatment for pleurisy.", reference: "Sahih al-Bukhari 5692" },
  { text: "Fever is from the heat of Hell, so cool it down with water.", reference: "Sahih al-Bukhari 3261" },
  { text: "You should use Senna and Sanut (fennel), for in them there is healing for every disease, except the toxicant (death).", reference: "Sunan Ibn Majah 3457" },
  { text: "Whoever performs cupping (hijama) on the 17th, 19th or 21st day (of the Islamic month), then it is a cure for every disease.", reference: "Sunan Abi Dawud 3861" },
  { text: "Truffles are like Manna, and their water is a healing for eye diseases.", reference: "Sahih al-Bukhari 4639" },
  { text: "Drink cow's milk, for it feeds on all kinds of herbs and its milk is a healing and its butter is a medicine.", reference: "Al-Mu'jam al-Kabir" },
  { text: "Were it not that I might over-burden my believers, I would have ordered them to use the Miswak (tooth-stick) at every prayer.", reference: "Sahih al-Bukhari 887" },
  { text: "A human being fills no worse vessel than his stomach. It is sufficient for a human being to eat a few mouthfuls to keep his spine straight.", reference: "Jami` at-Tirmidhi 2380" },
  { text: "If you hear of an outbreak of plague in a land, do not enter it; but if the plague breaks out in a place while you are in it, do not leave that place.", reference: "Sahih al-Bukhari 5728" },
  { text: "When one of you drinks, he should not breathe into the vessel.", reference: "Sahih al-Bukhari 5630" },
  { text: "Cover the vessels and tie the waterskins, for there is a night in the year when pestilence descends.", reference: "Sahih Muslim 2012" },
  { text: "When you go to bed, perform ablution as is done for prayer; then lie down on the right side.", reference: "Sahih al-Bukhari 247" },
  { text: "When anyone of you wakes up from sleep, he should not put his hand in the wash bowl until he has washed it three times.", reference: "Sahih al-Bukhari 162" },
  { text: "A strong believer is better and is more lovable to Allah than a weak believer, and there is good in everyone.", reference: "Sahih Muslim 2664" },
  { text: "Some companions used Surah Al-Fatihah as Ruqyah (healing by recitation) for a scorpion sting, and the Prophet approved.", reference: "Sahih al-Bukhari 5006" },
  { text: "Whenever the Prophet (saw) became ill, he would recite the Mu'awwidhat (Surah Al-Falaq and Surah An-Nas) and blow over his body.", reference: "Sahih al-Bukhari 5016" },
  { text: "Cleanliness is half of faith.", reference: "Sahih Muslim 223" },
  { text: "There should be neither harming (of others) nor reciprocating harm.", reference: "Sunan Ibn Majah 2340" },
  { text: "If one of you is in the sun and the shadow draws away from him so that he is partly in the sun and partly in the shade, he should get up.", reference: "Sunan Abi Dawud 4821" },
  { text: "Let none of you eat with his left hand or drink with his left hand, for the Shaytan eats and drinks with his left hand.", reference: "Sahih Muslim 2020" },
  { text: "The blessing of food is washing the hands before it and washing the hands after it.", reference: "Jami` at-Tirmidhi 1846" },
  { text: "None of you should drink while standing; and if anyone forgets, he must vomit.", reference: "Sahih Muslim 2024" },
  { text: "Whenever the Messenger of Allah sneezed, he would cover his mouth with his hand or a piece of cloth.", reference: "Jami` at-Tirmidhi 2745" },
  { text: "Yawning is from Satan. When one of you yawns, let him suppress it as much as he can.", reference: "Sahih al-Bukhari 6226" },
  { text: "The cleansing of the utensil belonging to one of you, after it has been licked by a dog, is to wash it seven times, using soil for the first time.", reference: "Sahih Muslim 279" },
  { text: "Allah has sent down both the disease and the cure, and He has appointed a cure for every disease, so treat yourselves medically.", reference: "Sunan Abi Dawud 3874" },
  { text: "Use Ithmid (antimony) for it clears the vision and grows the hair (eyelashes).", reference: "Sunan Ibn Majah 3495" },
  { text: "Whenever anyone complained of a headache to the Prophet, he said: 'Get yourself cupped.' And if anyone complained of pain in his legs, he said: 'Dye them with henna.'", reference: "Sunan Abi Dawud 3858" },
  { text: "The Prophet (saw) used to have himself cupped on the head and between the shoulders.", reference: "Sunan Abi Dawud 3859" },
  { text: "Cupping on the back of the neck is a cure for seventy-two sicknesses.", reference: "Al-Mu'jam al-Kabir" },
  { text: "Do not force your sick to eat or drink, for Allah, the Mighty and Sublime, feeds them and gives them to drink.", reference: "Sunan Ibn Majah 3444" }
];
function setDailyHadith() {
  const today = new Date();
  
  // Calculate the day of the year (1 - 365)
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Modulo operator ensures it seamlessly loops back to the start of the array
  const targetIndex = dayOfYear % hadithDatabase.length;
  const dailyHadith = hadithDatabase[targetIndex];
  
  // Inject into HTML safely
  const textElement = document.getElementById('hadith-text');
  const refElement = document.getElementById('hadith-ref');
  
  if(textElement && refElement) {
    textElement.textContent = `"${dailyHadith.text}"`;
    refElement.textContent = `— ${dailyHadith.reference}`;
  }
}

// Run the Hadith function when the page loads
window.onload = setDailyHadith;
