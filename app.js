const os = require('os');
const path = require('path');
const fs = require('fs');

// Récuperation de la date et de l'heure lors de la récuperation des informations systèmes
const dateCollecte = new Date().toLocaleString('fr-FR');

// Récuperation des informations du système
const plateforme = os.platform();
const architecture = os.arch();
const nombreDeCpu = os.cpus().length;

// Mémoire totale passée de octet à Go
let memoireTotale = os.totalmem();
memoireTotale = memoireTotale/10**9

// Mémoire Libre passée de octet à Go
let memoireLibre = os.freemem();
memoireLibre = memoireLibre/10**9

// Mise en forme du rapport
const rapport = `Rapport système

================

Les données ont été colléctes le ${dateCollecte}

Plateforme : ${plateforme}
Architecture du CPU : ${architecture}
Nombre de CPU : ${nombreDeCpu}
Memoire totale : ${memoireTotale} Go
Memoire libre : ${memoireLibre} Go
`;

// Création du doossier logs dans le répertoire courant si nécessaire
const dossierLogs = path.join(process.cwd(), 'logs');
const cheminDuRapport = path.join(dossierLogs, 'system_report.txt');

fs.mkdir(dossierLogs, { recursive: true }, (erreur) => {
  if (erreur) {
    console.error('Erreur lors de la creation du dossier logs :', erreur);
    return;
  }

  // Ecriture du rapport dans system_report.txt
  fs.writeFile(cheminDuRapport, rapport, 'utf8', (erreur) => {
    if (erreur) {
      console.error('Erreur lors de la creation du rapport :', erreur);
      return;
    }

    console.log('Le rapport systeme a ete cree :', cheminDuRapport);
  });
});
