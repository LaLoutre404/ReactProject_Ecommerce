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
### Authentification
* L'application backOffice affiche directement la page de login *AuthentificationPage.tsx*.
L'authetification se fait par firebase. Si le naviguateur a gardé l'utilisateur en mémoire on est directement redirigé vers l'application BackOffice
* Les composants de la fonction **App** dans *App.tsx* sont englobés d'un composant **AuthentificationProvider**. Ce composant permet de partager es informations d'authentification avec tout les composants en enfant de celui-ci. Cela permet donc à des composants comme la navbar de s'afficher si il y a un utilisateur connecté.  
### Navbar : 
* La navbar en haut de l'écran se trouve dans le composant "Header.tsx". Dans *App.tsx*, Le composant **MyHeader** se trouve au dessus des **Routes** pour être présent en permanance. 
* Cependant la navbar ne s'affiche pas quand l'utilisateur n'est pas connecté.
* Les liens composants la navbar sont modulables. Ils dépendants du paramètres **links** du composants. Les propriétés des liens de la navbar (*href* et *nom*) son présent dans une variable **linkprops** dans la fonction **App** de *App.tsx*.
### Les différentes Pages :
* La page de Dashboard permet à l'administrateur de visualiser toutes les commandes passées, qui sont dans la base de données Firebase. Le composant de la page est **CommandList** dans *CommandDashBoard.tsx*. Il met en page un composant **GetCommandeList** dans *FirebaseCommandeList.tsx*.
Ce composant se connecte à firebase à l'aide *firebaseconfig.tsx* et récupère à les liste de toutes les commandes de la collection **Commandes**.
On crée ensuite un table pour afficher dynamiquement toutes les commandes présentes en base de données. 
* La page Liste Produit reprend exactement le même principe. Elle permet à l'administrateur de visualiser tout les produits présents dans la collection **Produit** dans firebase. 