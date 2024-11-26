# Jeu de morpion

Notre petit projet est un jeu de morpion classique (jouable à 2) et développé en Angular. 

## Table des Matières
1. [Fonctionnalités](#fonctionnalités)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Structure du Projet](#structure-du-projet)
5. [Technologies](#technologies)
6. [Auteurs](#auteurs)


## Fonctionnalités

- **Créer une partie** : Possibilité de renseigner les pseudonymes des joueurs
- **Jeu de morpion** : Jouer la partie de morpion classique
- **Affichage du vainqueur** : Le vainqueur ou le cas d'égalité sont affichés à l'écran
- **Réinitialiser la partie** : Un bouton est disponible pour recommencer une partie
- **Compteur de score** : Si vous jouez plusieurs parties, vous pouvez suivre la progression du duel
  

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Zboulabagualaaluobmab/Projet_Morpion
   ```
2. Lancez un serveur local et accédez à `http://localhost:4200/` depuis votre navigateur :
   ```bash
   ng serve
   ```


## Utilisation

- **Page d'accueil** (`home`) : Ecran de création d'une nouvelle partie
- **Jouer au morpion** (`board`) : Cliquez sur les cases du morpion pour y jouer (le joueur qui doit jouer est indiqué)


## Structure du Projet

- **app** : Fichiers principaux du projet

#### Vews
- **home** : Page d'acceuil
- **board** : Page de jeu

#### Components
- **square** : Cases du morpion
- **grid** : Grille du morpion


## Technologies

- **Angular**
- **TypeScript** : Gestion de la logique du jeu et des différents composants pour l'affichage
- **HTML** : Affichage des éléments des différentes pages
- **SCSS** : Style des différents éléments


## Auteurs
Développé par Swixos ([Timéo AVI](https://www.instagram.com/timeoavi)), ElieLaj ([Elie LAJOINIE](https://www.instagram.com/elie_lajoinie/)), Titinite ([Thibault LERAY](https://www.instagram.com/titiniteoff)), Maratrom ([Arthur LAGNEAUX](https://www.instagram.com/arthur_lagneaux)) et JudIFruit ([Julien PONS](https://www.instagram.com/_julien.pons_)) en période de cours. Retrouvez plus de détails dans le dépôt [GitHub](https://github.com/Zboulabagualaaluobmab/Projet_Morpion).
