function notaFinal() {
    var elementoResultado = document.getElementById("resultado");
    var nomeAlunos = document.getElementById("nomeAluno").value;
    var notas1 = parseFloat(document.getElementById("nota1").value);
    var notas2 = parseFloat(document.getElementById("nota2").value);
    var notas3 = parseFloat(document.getElementById("nota3").value);
    var notas4 = parseFloat(document.getElementById("nota4").value);
    var finalBimestre = parseFloat((notas1 + notas2 + notas3 + notas4) / 4).toFixed(1);
  
    if (finalBimestre >= 6) {
      elementoResultado.innerHTML =
        "O(A) aluno(a), " +
        nomeAlunos +
        " foi aprovado(a) com a nota final de " +
        finalBimestre;
    } else {
      elementoResultado.innerHTML =
        "Infelizmente o(a) aluno(a), " +
        nomeAlunos +
        " foi reprovado(a), com a nota final de " +
        finalBimestre;
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  