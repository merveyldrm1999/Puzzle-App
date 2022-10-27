let count = 1;
let oyunaBaslayan;
let firstPlayer;
let secondPlayer;
let birinciOyuncu = 0;
let ikinciOyuncu = 0;
let ucuncuOyuncu = 0;
let dorduncuOyuncu = 0;
let name1, name2, name3, name4;

function save(event) {
  name1 = document.getElementById("oyuncu1-name").value;
  name2 = document.getElementById("oyuncu2-name").value;
  name3 = document.getElementById("oyuncu3-name").value;
  name4 = document.getElementById("oyuncu4-name").value;
  if (name1 == "") {
    alert("oyuncu 1in adını giriniz");
    return;
  } else if (name2 == "") {
    alert("oyuncu 2nin adını giriniz");
    return;
  } else if (name3 == "") {
    alert("oyuncu 3ün adını giriniz");
    return;
  } else if (name4 == "") {
    alert("oyuncu 4ün adını giriniz");
    return;
  }
  const td = ` 
             
                    <td class="name">${name1}</td>
                    <td class="name">${name2}</td>
                    <td class="name">${name3}</td>
                    <td class="name">${name4}</td>
                  
                    
                
  `;
  //count++;
  const tr = document.createElement("tr");

  tr.innerHTML = td;
  document.getElementById("table-players").innerHTML = td;

  let satir = document.getElementById("select-val").value;
  document.getElementById("table-skor").innerHTML = "";

  if (satir == "bos") {
    alert("oyun elini giriniz");
    return;
  }
  let disabled = "";
  for (let i = 0; i < satir; i++) {
    disabled = "";
    if (i != 0) {
      disabled = "disabled";
    }

    oyunaBaslayan = document.querySelector(
      'input[name = "flexRadioDefault"]:checked'
    ).value;

    const tr = `
    <tr id="${i}">

    <td style="background-color:${
      oyunaBaslayan == 1 && i == 0 ? "red" : ""
    } "> <input  type="number" ${disabled} aria-label="First name" class="form-control"></td>
    <td style="background-color:${
      oyunaBaslayan == 2 && i == 0 ? "red" : ""
    } "> <input  type="number" ${disabled} aria-label="First name" class="form-control"></td>
    <td style="background-color:${
      oyunaBaslayan == 3 && i == 0 ? "red" : ""
    } "> <input  type="number" ${disabled}  aria-label="First name" class="form-control"></td>
    <td style="background-color:${
      oyunaBaslayan == 4 && i == 0 ? "red" : ""
    } "> <input  type="number" ${disabled} aria-label="First name" class="form-control"></td>

   <td> <input id="el-bitti" onclick="handDone(event)"  ${disabled} class="form-check-input"  type="checkbox" value="">
    <label style="color:white" class="form-check-label"  >
      El Bitti
    </label></td>

    
    
    </tr>

    `;

    document.getElementById("table-skor").innerHTML += tr;

    const tdCompare = ` 
    <td scope="col" class="name"></td>        
    <td scope="col" class="name">${name1}</td>
    <td scope="col" class="name">${name2}</td>
    <td scope="col" class="name">${name3}</td>
    <td scope="col" class="name">${name4}</td>

 
`;
    const trCompare = document.createElement("tr");

    trCompare.innerHTML = tdCompare;

    document.getElementById("table-compareplayers").innerHTML = tdCompare;

    const trrCompare = `
 
    <tr scope="row" class="name">
      <td class="border">${name1}</td>
      <td style="background-color:${
        firstPlayer == secondPlayer ? "black" : ""
      } "> 
   </td>
    <td> <input disabled id="01" value="0"  type="text" aria-label="First name" class="form-control"></td>
    <td> <input disabled id="02" value="0"  type="text" aria-label="First name" class="form-control"></td>
    <td> <input disabled id="03" value="0" type="text" aria-label="First name" class="form-control"></td></tr>

    <tr scope="row" class="name">
    <td class="border">${name2}</td>
    <td > <input value="0" disabled id="10" type="text" aria-label="First name" class="form-control"></td>
    <td  style="background-color:${
      firstPlayer == secondPlayer ? "black" : ""
    } "> </td>
    <td> <input value="0" disabled id="12" type="text" aria-label="First name" class="form-control">
    </td><td> <input value="0" disabled id="13"  type="text" aria-label="First name" class="form-control"></td> </tr>

    <tr scope="row" class="name">
    <td class="border">${name3}</td>
    <td> <input disabled value="0" id="20"  type="text" aria-label="First name" class="form-control"></td>
    <td> <input disabled value="0" id="21" type="text" aria-label="First name" class="form-control"></td>
    <td style="background-color:${
      firstPlayer == secondPlayer ? "black" : ""
    } "></td>
    <td> <input disabled value="0" id="23" type="text" aria-label="First name" class="form-control"></td></tr>

    <tr scope="row" class="name">
    <td class="border">${name4}</td>
    <td> <input disabled value="0" id="30" type="text" aria-label="First name" class="form-control"></td>
    <td> <input disabled value="0" id="31" type="text" aria-label="First name" class="form-control"></td>
    <td> <input disabled value="0" id="32" type="text" aria-label="First name" class="form-control"></td>
    <td style="background-color:${
      firstPlayer == secondPlayer ? "black" : ""
    } "></td></tr>
  
`;

    document.getElementById("table-compare").innerHTML = trrCompare;
  } // bunun yeri sıkıntı olabilir

  const element = document.getElementById("rowlari-sil");
  element.remove();
  const element2 = document.getElementById("o-el");
  element2.remove();
}
function handDone(event) {
  let tr = event.target.closest("tr");
  const elements = tr.querySelectorAll("input");

  if (
    elements[0].value == "" ||
    elements[1].value == "" ||
    elements[2].value == "" ||
    elements[3].value == ""
  ) {
    alert("Boş gecmeyin");
    elements[4].checked = false;
    return;
  }

  birinciOyuncu = birinciOyuncu + parseInt(elements[0].value);
  ikinciOyuncu = ikinciOyuncu + parseInt(elements[1].value);
  ucuncuOyuncu = ucuncuOyuncu + parseInt(elements[2].value);
  dorduncuOyuncu = dorduncuOyuncu + parseInt(elements[3].value);

  //Asagıdaki yaptıklarının kısa yazım hali
  let islem1 = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i != j) {
        islem1 =
          elements[i].value -
          elements[j].value +
          parseInt(document.getElementById(i.toString() + j.toString()).value);
        document.getElementById(i.toString() + j.toString()).value = islem1;
        if (islem1 > 0) {
          document
            .getElementById(i.toString() + j.toString())
            .closest("td").style.background = "green";
        } else if (islem1 <= 0) {
          document
            .getElementById(i.toString() + j.toString())
            .closest("td").style.background = "red";
        }
      }
    }
  }

  // islem1 =
  //   elements[0].value -
  //   elements[1].value +
  //   parseInt(document.getElementById("01").value);
  // document.getElementById("01").value = parseInt(islem1);
  // if (islem1 > 0) {
  //   document.getElementById("01").closest("td").style.background = "green";
  // } else if (islem1 < 0) {
  //   document.getElementById("01").closest("td").style.background = "red";
  // }

  // islem1 = elements[0].value - elements[2].value;
  // document.getElementById("02").value = islem1;

  // islem1 = elements[0].value - elements[3].value;
  // document.getElementById("03").value = islem1;

  // islem1 = elements[1].value - elements[0].value;
  // document.getElementById("10").value = islem1;

  // islem1 = elements[1].value - elements[2].value;
  // document.getElementById("12").value = islem1;

  // islem1 = elements[1].value - elements[3].value;
  // document.getElementById("13").value = islem1;

  // islem1 = elements[2].value - elements[0].value;
  // document.getElementById("20").value = islem1;

  // islem1 = elements[2].value - elements[1].value;
  // document.getElementById("21").value = islem1;

  // islem1 = elements[2].value - elements[3].value;
  // document.getElementById("23").value = islem1;

  // islem1 = elements[3].value - elements[0].value;
  // document.getElementById("30").value = islem1;

  // islem1 = elements[3].value - elements[1].value;
  // document.getElementById("31").value = islem1;

  // islem1 = elements[3].value - elements[2].value;
  // document.getElementById("32").value = islem1;

  let oyuncuSayisi;
  if (0 == oyunaBaslayan % 4) {
    oyunaBaslayan = 1;
  } else {
    oyunaBaslayan++;
  }

  //oyunaBaslayan++;
  //document.getElementById("1").style.background = red;

  // oyuncu sayısı ve 4 mod oyuncu sayısına eşit bire geç

  let i = tr.id;
  if (document.getElementById(parseInt(i) + 1) == null) {
    const td = ` 
             <tr>
                    <td class="name">${name1}</td>
                    <td class="name">${name2}</td>
                    <td class="name">${name3}</td>
                    <td class="name">${name4}</td>
                </tr>
                    
                
  `;
    //count++;

    document.getElementById("table-compare-player").innerHTML = td;

    const scorTr = `
<tr>
    <td style="background-color:${
      birinciOyuncu < ikinciOyuncu &&
      birinciOyuncu < ucuncuOyuncu &&
      birinciOyuncu < dorduncuOyuncu
        ? "green"
        : ""
    } " class="name">${birinciOyuncu}</td>
    <td style="background-color:${
      ikinciOyuncu < birinciOyuncu &&
      ikinciOyuncu < ucuncuOyuncu &&
      ikinciOyuncu < dorduncuOyuncu
        ? "green"
        : ""
    }"  class="name">${ikinciOyuncu}</td>
    <td style="background-color:${
      ucuncuOyuncu < birinciOyuncu &&
      ucuncuOyuncu < ikinciOyuncu &&
      ucuncuOyuncu < dorduncuOyuncu
        ? "green"
        : ""
    }" class="name">${ucuncuOyuncu}</td>
    <td  style="background-color:${
      dorduncuOyuncu < birinciOyuncu &&
      dorduncuOyuncu < ikinciOyuncu &&
      dorduncuOyuncu < ucuncuOyuncu
    }"  ? "green"
    : ""  class="name">${dorduncuOyuncu}</td>
</tr>
  
    
    
    `;
    if (
      birinciOyuncu < ikinciOyuncu &&
      birinciOyuncu < ucuncuOyuncu &&
      birinciOyuncu < dorduncuOyuncu
    ) {
      document.getElementById("winner-person").innerHTML = name1;
    } else if (
      ikinciOyuncu < birinciOyuncu &&
      ikinciOyuncu < ucuncuOyuncu &&
      ikinciOyuncu < dorduncuOyuncu
    ) {
      document.getElementById("winner-person").innerHTML = name2;
    } else if (
      ucuncuOyuncu < birinciOyuncu &&
      ucuncuOyuncu < ikinciOyuncu &&
      ucuncuOyuncu < dorduncuOyuncu
    ) {
      document.getElementById("winner-person").innerHTML = name3;
    } else if (
      dorduncuOyuncu < birinciOyuncu &&
      dorduncuOyuncu < ikinciOyuncu &&
      dorduncuOyuncu < ucuncuOyuncu
    ) {
      document.getElementById("winner-person").innerHTML = name4;
    }
    document.getElementById("table-skor-compare").innerHTML = scorTr;

    //console.log(birinciOyuncu, ikinciOyuncu, ucuncuOyuncu, dorduncuOyuncu);

    //modalı tanımla aç
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
      keyboard: false,
    });

    myModal.show();

    return;
  }
  document.getElementById(parseInt(i) + 1).children[
    oyunaBaslayan - 1
  ].style.background = "red";
  elements.forEach((el) => {
    el.setAttribute("disabled", "true");
  });
  const element2 = document
    .getElementById(parseInt(i) + 1)
    .querySelectorAll("input");
  element2.forEach((el) => {
    el.removeAttribute("disabled");
    // console.log(el);
  });
  // for (let i = 0; i < satir; i++) {
  //   disabled = "";
  //   if (i != 0) {
  //     disabled = "disabled";
  //   }
  // }
  const element3 = document
    .getElementById("el-bitti")
    .querySelectorAll("input");
  element3.forEach((el) => {
    el.removeAttribute("disabled");
  });
}

//function turnBlack() {
//var myPara = document.getElementById("changeText");
// myPara.style.color = "black";
//}

// //lements.forEach((el) => {
//   el.setAttribute("disabled", "true");
// });
// elements.forEach((el) => {
//   el.setAttribute("disabled", "false");
// });
