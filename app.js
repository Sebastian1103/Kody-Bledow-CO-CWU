const kodInput = document.getElementById("kod");
const markaSelect = document.getElementById("marka");
const wynikiDiv = document.getElementById("wyniki");

const marki = [...new Set(dane.map(d => d.marka))];
marki.forEach(m => {
  let opt = document.createElement("option");
  opt.value = m;
  opt.textContent = m;
  markaSelect.appendChild(opt);
});

function szukaj() {
  const kod = kodInput.value.toLowerCase();
  const marka = markaSelect.value;

  const wyniki = dane.filter(d =>
    (kod === "" || d.kod.toLowerCase().includes(kod) || d.znaczenie.toLowerCase().includes(kod)) &&
    (marka === "" || d.marka === marka)
  );

  wynikiDiv.innerHTML = "";

  wyniki.forEach(w => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <b>${w.kod} – ${w.marka}</b><br>
      ${w.znaczenie}<br>
      🔧 ${w.sprawdz}
    `;
    wynikiDiv.appendChild(div);
  });
}

function quick(txt){
  kodInput.value = txt;
  szukaj();
}

kodInput.addEventListener("input", szukaj);
markaSelect.addEventListener("change", szukaj);
