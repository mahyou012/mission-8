function bloc0() {
    let test = prompt("Merci d'inscrire une chaîne de caractères ?");
    document.body.innerHTML = test;
}

function bloc1() {
    let a = 42;
    let b = 10;
    let result = a + b;
    alert(result);
}

function bloc2() {
    let noteMaths = 11;
    let noteFrancais = 9;
    let noteHG = 16;
    let moyenne = (noteMaths + noteFrancais + noteHG) / 3;
    alert("La moyenne est de " + moyenne);
}

function bloc3() {
    let budget = 1553.89;
    let achats = 1554.75;

    if (budget + 43 >= achats) {
        alert('Le budget permet de payer tous les achats.');
    } else {
        alert('Le budget ne permet pas de payer tous les achats.');
    }
}

function bloc4() {
    let ht = prompt("Montant HT ?");
    let ttc = parseFloat(ht) * 1.2;
    document.body.innerText = ttc;
}

function bloc5() {
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux de TVA ?");
    let taux_tva_calcul = (parseFloat(taux_tva) / 100) + 1;
    let ttc = ht * taux_tva_calcul;
    document.body.innerText = ttc;
}

function bloc6() {
    let ht = prompt("Montant HT ?");
    let taux_tva = prompt("Taux de TVA ?");
    let ttc = ht * (parseFloat(taux_tva) / 100 + 1);

    if (ttc > 100) {
        document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
    } else {
        document.body.innerHTML = '<h1 style="color: green;">' + ttc + '</h1>';
    }
}

function bloc8() {
    for (let i = 10; i <= 1000; i += 10) {
        console.log(i);
    }
}

function bloc9(){
    let age = prompt('Quel est votre âge ?');
if(age >= 18) {
   alert('Vous êtes majeur !');
} else {
   alert('Vous êtes mineur !');
}
}


function bloc10() {
  let cp = 77000;
  while (cp <= 77999) {
    console.log(cp);
    cp++;
  }
}

function bloc11() {
  let n = 5;
  let html = " ";
  for (let i = 1; i <= 10; i++) {
    let multiplication_5 = n + "X" + i + "=" + n * i + "<br>";
    html += multiplication_5;
    console.log(multiplication_5);
  }
  document.write(html);
}

function bloc12() {
    let html = " ";
    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            html = html + i;
        }
        html = html + "<br/>";
    }
    document.body.innerHTML = html;
}

function bloc13() {
    let html = " ";
    let nbre = 0;
    let k = 0;

    while (nbre <= 20) {
        html = html + k + "<br/>";
        nbre = nbre + 2;
        k = k + 2; 
    }

    document.body.innerHTML = html;
}

function bloc14() {
    let tableau = '<table>';
    let lignes = 5;
    let colonnes = 3;

    for (let i = 1; i <= lignes; i++) {
        tableau = tableau + '<tr>';
        for (let k = 1; k <= colonnes; k++) {
            tableau = tableau + '<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }

    tableau = tableau + '</table>';
    document.body.innerHTML = tableau;
}

function bloc15() {
    let lignes = prompt("Nombre de lignes ?");
    let colonnes = prompt("Nombre de colonnes ?");
    lignes = parseInt(lignes);
    colonnes = parseInt(colonnes);

    let tableau = '<table>';

    for (let i = 1; i <= lignes; i++) {
        tableau = tableau + '<tr>';
        for (let k = 1; k <= colonnes; k++) {
            tableau = tableau + '<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }

    tableau = tableau + '</table>';
    document.body.innerHTML = tableau;
}

function bloc16() {
    let html = "<ul>";
    for (let i = 0; i < 11; i++) {
        html = html + "<li>" + Math.floor(Math.random() * 100) + "</li>";
    }
    html = html + "</ul>";
    document.body.innerHTML = html;
}

function bloc17() {
    let html = '<ul>';
    let nalea = 10;
    for (let i = 0; i < nalea; i++) {
        let tmp = Math.floor(Math.random() * 11);
        if (tmp === 10) {
            console.log('Le nombre 10 fait partie du tirage.');
        }
        html = html + '<li>' + tmp + '</li>';
    }
    html = html + '</ul>';
    document.body.innerHTML = html;
}

function bloc18() {
    let html = ['<ul>'];
    let nalea = 10;
    let nalea10 = 0;

    for (let i = 0; i < nalea; i++) {
        let tmp = Math.floor(Math.random() * 11);
        if (tmp === 10) {
            nalea10++;
        }
        html.push('<li>' + tmp + '</li>');
    }

    html.push('</ul>');
    html.push('<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>');
    document.body.innerHTML = html.join('');
}

function bloc19() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = color;
}
