# API de Gestion Immobilière

Une API RESTful complète pour la gestion location immobilière, construite avec NestJS, MySQL et Sequelize.

## 🚀 Fonctionnalités

- 🔐 Authentification JWT avec refresh token
- 👥 Gestion des administrateurs
- 🏠 Gestion des biens immobiliers
- 👨‍👩‍👧‍👦 Gestion des propriétaires et locataires
- 📄 Gestion des baux
- 💰 Gestion des paiements
- 📑 Gestion des documents
- 📊 Relevés mensuels
- 🔔 Système de notifications

## 🛠️ Technologies Utilisées

- [NestJS](https://nestjs.com/) - Framework Node.js progressif
- [MySQL](https://www.mysql.com/) - Base de données relationnelle
- [Sequelize](https://sequelize.org/) - ORM pour Node.js
- [JWT](https://jwt.io/) - JSON Web Tokens pour l'authentification
- [Swagger](https://swagger.io/) - Documentation API

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- MySQL
- npm ou yarn

## ⚙️ Installation

1. Cloner le repository :
```bash
git clone [url-du-repo]
cd [nom-du-repo]
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env
```
Puis modifiez le fichier `.env` avec vos configurations :
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=''
DB_NAME=gli_dev
JWT_ACCESS_SECRET=votre_secret_key
JWT_REFRESH_SECRET=votre_refresh_secret_key
```

4. Lancer l'application :
```bash
npm run start:dev
```

## 📚 Documentation API

La documentation Swagger est disponible à l'adresse :
```
http://localhost:3000/api
```

## 🔑 Endpoints Principaux

### Auth
- POST `/auth/register` - Inscription administrateur
- POST `/auth/login` - Connexion
- POST `/auth/refresh` - Rafraîchir le token

### Biens
- GET `/biens` - Liste des biens
- POST `/biens` - Créer un bien
- GET `/biens/:id` - Détails d'un bien
- PATCH `/biens/:id` - Modifier un bien
- DELETE `/biens/:id` - Supprimer un bien

### Propriétaires
- GET `/proprietaires` - Liste des propriétaires
- POST `/proprietaires` - Créer un propriétaire
- GET `/proprietaires/:id` - Détails d'un propriétaire
- PATCH `/proprietaires/:id` - Modifier un propriétaire
- DELETE `/proprietaires/:id` - Supprimer un propriétaire

### Locataires
- GET `/locataires` - Liste des locataires
- POST `/locataires` - Créer un locataire
- GET `/locataires/:id` - Détails d'un locataire
- PATCH `/locataires/:id` - Modifier un locataire
- DELETE `/locataires/:id` - Supprimer un locataire

### Baux
- GET `/baux` - Liste des baux
- POST `/baux` - Créer un bail
- GET `/baux/:id` - Détails d'un bail
- PATCH `/baux/:id` - Modifier un bail
- DELETE `/baux/:id` - Supprimer un bail

### Paiements
- GET `/paiements` - Liste des paiements
- POST `/paiements` - Créer un paiement
- GET `/paiements/:id` - Détails d'un paiement
- PATCH `/paiements/:id` - Modifier un paiement
- DELETE `/paiements/:id` - Supprimer un paiement

## 🔒 Sécurité

- Authentification JWT
- Refresh tokens
- Hachage des mots de passe avec bcrypt
- Validation des données avec class-validator

## 📝 Modèles de Données

### Administrateur
- ID (UUID)
- Nom
- Prénom
- Email (unique)
- Mot de passe (haché)
- Rôle
- Dernier login
- Dates de création/modification

### Bien
- ID (UUID)
- Type
- Adresse
- Description
- Surface
- Nombre de pièces
- État
- Prix estimatif
- Propriétaire (relation)
- Dates de création/modification

### Bail
- ID (UUID)
- Bien (relation)
- Locataire (relation)
- Propriétaire (relation)
- Dates début/fin
- Montant loyer
- Dépôt de garantie
- Commission agence
- Statut
- Document
- Dates de création/modification

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

[MIT](LICENSE)