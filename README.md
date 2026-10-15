# Devoir 2 - Rapport système

Cette application node.js permet de récuperer quelques informations sur un ordianteur et les stocker dans un fichier de rapport.

## Informations récupérés :
- La date et l'heure de la collecte
- Le type de platefrme de l'ordinateur (Windows, Linux, MacOs)
- L'architecture du CPU
- Le nombre de CPUs
- La mémoire totale
- La mémoire libre

## Modules utilisés : 
os qui permet de récupérer les informations systèmes
path qui permet de créer le chemin du dossier et du fichier de rapport
fs qui permet de créer le dossier logs (S'il n'existe pas déjà) et de créer et d'écrire dans le fichier de rapport

## Exécution :
Ouvrir un terminal à la racine du projet et entrer la commande suivante :

```bash
node app.js
```

Cela lancera l'éxecution du fichier qui créera la dossier logs si besoin et le fichier system_report.txt avec toutes les informations collectés
