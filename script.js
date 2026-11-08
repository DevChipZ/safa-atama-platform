// Local Database of Medical Hadiths
const hadithDatabase = [
  {
    text: "There is healing in black cumin for all diseases except death.",
    reference: "Sahih al-Bukhari 5688"
  },
  {
    text: "Healing is in three things: A gulp of honey, cupping (hijama), and branding with fire, but I forbid my followers to use branding with fire.",
    reference: "Sahih al-Bukhari 5680"
  },
  {
    text: "Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it, with the exception of one disease, namely old age.",
    reference: "Sunan Abi Dawud 3855"
  },
  {
    text: "If there is any healing in your medicines, then it is in cupping, a gulp of honey or branding with fire that suits the ailment.",
    reference: "Sahih al-Bukhari 5683"
  }
];

function setDailyHadith() {
  // Use the day of the year to pick a static index
  const today = new Date();
  
  // Calculate the day of the year (1 - 365)
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Ensure the index loops back around if you have fewer Hadiths than days in the year
  const targetIndex = dayOfYear % hadithDatabase.length;
  
  const dailyHadith = hadithDatabase[targetIndex];
  
  // Inject into HTML
  document.getElementById('hadith-text').textContent = `"${dailyHadith.text}"`;
  document.getElementById('hadith-ref').textContent = `— ${dailyHadith.reference}`;
}

// Run the function when the page loads
window.onload = setDailyHadith;
