
document.getElementById("randomkor").innerHTML +=
Math.floor(Math.random() * (5-1+1)+1);

document.getElementById("randomismetles").innerHTML +=
Math.floor(Math.random() * (25-10+1)+10);

let gyakorlatok = ["Goblet guggolás", "Egylábas dobozra guggolás", "Bolgár guggolás", "Teljes testes homorítás", 
"Mellúszás",  "Gyémánt fekvőtámasz", "Lassított fekvőtámasz", "Fekvőtámasz dobozon", 
 "Side Plank csípőemeléssel", "Egylábas csípőemelés", "Egylábas sarokemelés", 
"Hegymászó, lábak keresztbe húzva dobozon", "Hernyó + fekvőtámasz", "Íjász fekvőtámasz", 
"Gyémánt fekvőtámasz", "Ollózás", "V-sit tartás", "Lábemelés tartás", "Spiderman + fekvőtámasz",
 "Páros lábemelés és ráfordítás", "Fordított hasprés", "Saját testsúlyos guggolás",
 "Kitörés hátra",  "Mellúszás", "Pillangó úszás",  "Robbanó fekvőtámasz", "Fekvőtámasz dobozon",
  "Plank", "Side Plank csípőemeléssel", "Csípőemelés", "Sarokemelés", "Hegymászó, lábak keresztbe húzva", "Hernyó",
   "Íjász fekvőtámasz, térdelve",  "Fekvőtámasz", 
     "Páros lábemelés", "Hasprés"];


  for (let index = 0; index < 10; index++) {
   
    const randomElement = gyakorlatok[Math.floor(Math.random() * gyakorlatok.length)];
     document.getElementById('randomgyak').innerHTML += randomElement + "<br>";
    
   
  } 
 
 