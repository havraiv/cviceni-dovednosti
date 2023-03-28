console.log('funguju!');

// Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

const htmlSkill = Number(prompt('Zadejte vaše dovednosti v HTML od 0 - 100.'));
const cssSkill = Number(prompt('Zadejte vaše dovednosti v CSS od 0 - 100.'));
const jsSkill = Number(
  prompt('Zadejte vaše dovednosti v JavaScriptu od 0 - 100.'),
);

const htmlSkillElm = document.querySelector('.skill__value');
htmlSkillElm.innerHTML = `${htmlSkill} / 100`;
const htmlProgressElm = document.querySelector('.skill__progress');
htmlProgressElm.style.width = `${htmlSkill}%`;

const cssSkillIdElm = document.getElementById('skill2');
const cssSkillElm = cssSkillIdElm.querySelector('.skill__value');
cssSkillElm.innerHTML = `${cssSkill} / 100`;
const cssProgressElm = cssSkillIdElm.querySelector('.skill__progress');
cssProgressElm.style.width = `${cssSkill}%`;

const jsSkillIdElm = document.getElementById('skill3');
const jsSkillElm = jsSkillIdElm.querySelector('.skill__value');
jsSkillElm.innerHTML = `${jsSkill} / 100`;
const jsProgressElm = jsSkillIdElm.querySelector('.skill__progress');
jsProgressElm.style.width = `${jsSkill}%`;
