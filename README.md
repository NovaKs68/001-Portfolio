# 001-Portfolio

Ce projet consiste à développer un portfolio.

Il a plusieurs buts :
 * Apprendre à initialiser un projet avec une grosse architecture
 * Approfondir mes connaissances en Angular, en NodeJs/Express, Docker et en BDD.
 * Apprendre l'hébergement (auto-hébergé)
 * Avoir un site de démonstration
 * Découvrir beaucoup de nouveaux concepts
 
 L'application web sera composée en plusieurs parties.
 
 ### 1-Accueil
 
 Au niveau de l'accueil on trouvera un header animé.
 Il contiendra le menu : Biographie - Projets - Connexion - Me contacter
 
 ### 2-Projets
 
 On y retrouvera une présentation du projet en question. Avec des images et un résumé à la fin.
 On pourra également poster des commentaires et en liker d'autres.
 Les commentaires ne devront pas contenir de mots sensibles.
 
 ### 3-Connexion
 
 Ce sera un page simple avec un formulaire de connexion comprenant : Nom - Prénom - Pseudo affiché - Mail - Mot de passe
 Il y aura deux types d'utilisateurs : Les users et les admins.
 Les visiteurs non connectés pourront voir les projets et me contacter.
 Les users pourront commenter, liker et me contacter.
 Les admins pourront en plus de tout ça, ajouter du contenu.
 
 ### 4-Messagerie
 
 Ce sera une pop-up qui permettra à n'importe qui, d'envoyer des messages à l'unique compte admin.
 Ils pourront également choisir de communiquer par mail.
 
 ### 5-Administration
 
 La page d'administration permettra de bloquer des utilisateurs et de supprimer des commentaires.
 
 ### 6-Ajout de projet
 
 Ce n'est pas sûr que cette page verrait le jour.
 
 ## Installation
 
 ### Dev
 
 Pour le développement il faut taper :  
 `sudo docker-compose -f docker-compose-dev.yml up --build`  
 Suite à ça le back, le front et la BDD vont se lancer.
 >Warning : Une erreur peut se produire lors du lancement du projet au niveau
>de la bdd. Si vous avez déjà lancé le projet en mode prod, alors il faudra se placer
>dans le dossier 'BDD'. Puis taper `sudo rm -rd data/`.
>Suite à ça vous pourrez relancer la commande de lancement sans erreur.
 
 ### Prod

Pour la production il faut taper :  
`sudo docker-compose up --build`

## Technologies 

Tout le projet est conteneurisé avec Docker.  
Ils sont tous reliés par Docker-compose.

##### Le Back
Le Backend est fait en NodeJs. Avec comme template Express.

##### Le Front
Le Frontend est fait avec Angular. 

##### La BDD
La base de données est faite avec mariadb. Et comme exploiteur graphique, adminer.
