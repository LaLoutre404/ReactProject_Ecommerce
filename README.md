# ReactProject_Ecommercer

## Planification des tâches : 

### Pour la partie Front :
- Pour réaliser la page Home sans récupérer les produits sur firebase : 3H
- créer les différentes routes. 30min
- Page boutique 2H
- Page détails commande 2H
- Page panier 2H
- mettre les commandes en base de données 2H
- Page authentification client 1H-1H30


### Pour la partie Back-Office : 
- Pour réaliser la page "vitrine" administrateur 3H
- Page vitrine statistiques 3H
- Page produits 3H
- récupérer tout les produits en BDD. 2H
- StoryBook. 1h
- Préparer les différentes routes. 30Min

## Documentation BackOffice : 
* L'application backOffice affiche directement la page de login ("AuthentificationPage.tsx").
L'authetification se fait par firebase. Si le naviguateur a gardé l'utilisateur en mémoire on est directement redirigé vers l'application BackOffice
# Navbar : 
* La navbar en haut de l'écran se trouve dans le composant "Header.tsx". Dans "App.tsx", Le composant **MyHeader** se trouve au dessus des **Routes** pour être présent en permanance. 
* Cependant la navbar ne s'affiche pas quand l'utilisateur n'est pas connecté.
* Les liens composants la navbar sont modulables. Ils dépendants du paramètres **links** du composants. Les propriétés des liens de la navbar ("href" et "nom") son présent dans une variable **linkprops** dans la fonction **App** de "App.tsx".
# Les différentes Pages :