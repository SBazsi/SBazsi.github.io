
document.getElementById("randomkor").innerHTML +=
  Math.floor(Math.random() * (5 - 1 + 1) + 1);

document.getElementById("randomismetles").innerHTML +=
  Math.floor(Math.random() * (25 - 10 + 1) + 10);

let gyakorlatok = ["Goblet guggolás", "Egylábas dobozra guggolás", "Bolgár guggolás", "Teljes testes homorítás",
  "Mellúszás", "Gyémánt fekvőtámasz", "Lassított fekvőtámasz", "Fekvőtámasz dobozon",
  "Side Plank csípőemeléssel", "Egylábas csípőemelés", "Egylábas sarokemelés",
  "Hegymászó, lábak keresztbe húzva dobozon", "Hernyó + fekvőtámasz", "Íjász fekvőtámasz",
  "Gyémánt fekvőtámasz", "Ollózás", "V-sit tartás", "Lábemelés tartás", "Spiderman + fekvőtámasz",
  "Páros lábemelés és ráfordítás", "Fordított hasprés", "Saját testsúlyos guggolás",
  "Kitörés hátra", "Mellúszás", "Pillangó úszás", "Robbanó fekvőtámasz", "Fekvőtámasz dobozon",
  "Plank", "Side Plank csípőemeléssel", "Csípőemelés", "Sarokemelés", "Hegymászó, lábak keresztbe húzva", "Hernyó",
  "Íjász fekvőtámasz, térdelve", "Fekvőtámasz",
  "Páros lábemelés", "Hasprés"];


for (let index = 0; index < 10; index++) {

  const randomElement = gyakorlatok[Math.floor(Math.random() * gyakorlatok.length)];
  document.getElementById('randomgyak').innerHTML += randomElement + "<br>";


}

function sajatedzes() {
  let name = $('#name').val();
  let email = $('#email').val();
  let message = $('#area').val();
  let heti = $('#heti').val();
  let hol = $('#hol').val();
  let gyakorlatok = $('#gyakorlatok').val();
  let gyakorlatoknem = $('#gyakorlatoknem').val();
  if (name !== "" && email !== "" && message !== "" && hol !== "" && heti <= 7) {
    window.location.href = 'mailto:balazs.seres86@gmail.com?subject=Saját%20edzésterv&body=%0D%0ANév:%20' + name + '%20%0D%0AEmail:%20' + email +
      '%0D%0AHeti%20edzésnapszám:%20' + heti
      + '%0D%0AHol%20fogsz%20edzeni:%20' + hol
      + '%0D%0AMilyen%20gyakorlatok%20legyenek%20benne:%20' + gyakorlatok
      + '%0D%0AMik%20ne%20legyenek%20benne:%20' + gyakorlatoknem
      + '%20%0D%0AEszközlista:%20' + message;
  } else {
    alert("Valami még hiányzik!");
  }
}

function ellenorzes() {
  let name = $('#ellname').val();
  let email = $('#ellemail').val();
  if (name !== "" && email !== "") {
    window.location.href = 'mailto:balazs.seres86@gmail.com?subject=Edzéstervem%20ellenőrzése%20' + name
  } else {
    alert("Valami még hiányzik!");
  }

}



