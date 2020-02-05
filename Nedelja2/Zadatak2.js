//  let cena = 101;
//  let kupac = 100;
//  if(cena < kupac && cena <=kupac || cena ===kupac ){
//      console.log('Uspesno ste kupili prozivod');
//   }else{console.log('Nemate dovoljno novca');}

  let cena  = 101;
  let kupac = 100;
 let promet = function(cena, kupac){
     console.log(kupac - cena);
     
 }
 promet(cena,kupac);
 if( kupac - cena >=0){
     console.log('Uspesno ste kupili proizvod')
 }else{
     console.log('Nemate dovoljno novca')
 }
