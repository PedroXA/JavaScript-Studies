const Paragrafos = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;

for (p in Paragrafos) {
    Paragrafos.item(p).style.backgroundColor = backgroundColor;
    Paragrafos.item(p).style.color = 'White';
} 

// RESOLUÇÃO DO PROFESSOR
// for (p of Paragrafos) {
//     p.style.backgroundColor = backgroundColor;
//     p.style.color = 'White';
// } 