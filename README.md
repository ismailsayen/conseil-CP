
# Gestion de Stock de Conseil Provincial
---
<img src="https://github.com/ismailsayen/conseil-CP/assets/118174610/714ffbbc-62da-48e7-8cae-0e46608925f6" width=150 />
<p>
  Cette application est conçue pour aider le conseil provincial à gérer son stock de manière efficace. Elle offre une interface utilisateur conviviale pour ajouter, modifier, supprimer et consulter les éléments du stock, ainsi que pour suivre les niveaux de stock en temps réel.
</p>


## Technologies Utilisées

- **Frontend**:
    <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width=55 />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" width=55 />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width=55 />
    </div>
          
- **Backend**:
  <div>
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width=55 />
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" width=55 />
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width=55 />
    
  </div>
- **Base de Données**:
  <div>
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width=55 />
  </div>

## Fonctionnalités

- Système de CRUD (Affichage , ajout, modification et suppression des éléments du stock avec leurs détails.
- Recherche et filtres pour trouver rapidement des éléments spécifiques.
- Authentification des utilisateurs pour un accès sécurisé.

## Installation

1. Cloner le dépôt depuis GitHub :

```
git clone https://github.com/ismailsayen/conseil-CP.git
```

2. Installer les dépendances pour le frontend et le backend :

```
cd conseil-CP
cd client
npm i -force
```
```
cd server
npm i
```

3. Configurer la base de données PostgreSQL :

   - Créer une base de données nommée `votre_nom_de_db`.
   - Assurez-vous que les informations de connexion à la base de données sont correctement configurées dans `server/.env`.

4. Lancer le frontend (Client) et le backend (Server) :

```
cd client
npm run dev
```

```
cd server
npm start
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173).

## Configuration

- **Frontend**: Aucune configuration nécessaire.
- **Backend**: Assurez-vous de configurer les variables d'environnement dans `backend/.env` pour la connexion à la base de données.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Auteurs

- [Ismail Sayen](https://github.com/ismailsayen/)
- [Youssef Jabri](https://github.com/youssefjabri)
- [Mohamed Ghdour](https://github.com/mohamedghdour)
- [Oussama Boulakhbar](https://github.com/Oussama1975)
- [Ahmed Baid](https://github.com/ahmedbaid37)

## Licence

Ce projet est sous licence [MIT](LICENSE).
