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
* La page de Dashboard permet à l'administrateur de visualiser toutes les commandes passées, qui sont dans la base de données Firebase. Le composant de la page est **CommandList** dans *CommandDashBoard.tsx* permet de créer la page pour visualiser toute les commandes. Le composant **GetCommandeList** issue *FirebaseCommandeList.tsx* est utilisé pour se connecter à firebase à l'aide *firebaseconfig.tsx* et récupèrer la liste de toutes les commandes de la collection **Commandes**. On crée ensuite un tableau pour afficher dynamiquement toutes les commandes présentes en base de données. Le bouton *supprimer* à droite des lignes permet de supprimer les document représentant les commandes en BDD. 
* La page Liste Produit reprend exactement le même principe. Le composant de la page est **ProductList** dans *ProductList.tsx* permet de créer la page pour visualiser tout les produits. Le composant **GetProductList** issue *FirebaseProductList.tsx* est utilisé pour se connecter à firebase à l'aide *firebaseconfig.tsx* et récupèrer la liste de tout les produit de la collection **Porduit**. Elle permet à l'administrateur de visualiser tout les produits dans une grille de trois colonne qui s'affiche dynamiquement en fonction du nombre de document de la liste récupérée. Une checkbox permet rendre dynamiquement un produit disponible ou non en boutique. 
* La page des statistique à été supprimée par manque de temps 
* Le backoffice est deployé sur **Vercel** sur ce lien : https://backofficedeploy-ckrz91bvh-laloutre404.vercel.app/dashboard
(malheuresement en utilisant ce lien, après m'être authentifié j'arrive bien sur la page de dashboard mais à chaque rafraichissement, le site me renvoie une erreur 404. Je n'ai pas réussi à regler le problème.)

## Documention Front-End :

* L'application Front-end commence par afficher la page Home qui présente notre produit, toute la page peut être retrouvée dans le composant *Home.tsx*. 
* La navbar en haut de l'écran que l'on peut retrouver dans le composant *Header.tsx* est afficher sur toute les pages du site et nous permet de naviguer dans tout le site. C'est également dans cette navbar qu'on peut retrouver un bouton panier qui est une modal disponible dans n'importe qu'elle page
 ### Les Différentes pages du site :
 * La page "Boutique" permet a l'utilisateur de visualiser toutes les montres disponibles à l'achat, stockés dans la base de données Firebase. Le composant de base est *Shop.tsx* et utilise le composant *GetProductList.tsx* qui se connecte a firebase et récupère la liste de tous les produits disponibles dans la collection *Produit*
 * Il est également possible de sélectionner un produit en cliquant dessus pour accéder à une nouvelle page. Le composant *Product.tsx* va exécuter une requête a la base de données Firebase en fonction de l'article sélectionner pour acceder aux détails.
 * La page Commande utilise le composant *Commande.tsx* qui comme la page *Shop* utilise un autre composant pour se connecter a firebase (*GetOrderList.tsx*). Cette page affiche donc une liste de toutes les commandes de la base de données.
 * La page Login utilise le composant *Authentification.tsx* l'authentification se fait avec firebase et nous redirige vers la page *Home*
