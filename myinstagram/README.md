
---

# InstagramClone1.0

This README provides the steps to setup MySQL database and connect it to your Java application. It also provides steps to setup Firebase and run this project locally.

## MySQL Setup

1. **Download and Install MySQL Server and Workbench**: The first step involves downloading the MySQL server and Workbench on your machine. You can download these tools from the MySQL website. Once you've downloaded the installer, follow the on-screen instructions to install both MySQL Server and MySQL Workbench.

2. **Set Up Password and Login**: Once you've installed MySQL Server, you need to set up your password during the installation process. The default password is often 'password', but you should change this to something more secure.

3. **Login to the MySQL Server**: After setting up the password, open the terminal and log in to the MySQL server using the following command:

   ```
   mysql -u root -p
   ```

   This will prompt you for your password. Enter the password you set up during the installation.

4. **Create a Database**: Once you're in the MySQL server, you can create a new database for your application. Let's call this 'instagramclonedb'. You can create the database using the following command:

   ```
   create database instagramclonedb;
   ```

5. **Verify the Database Creation**: To check if your database was created successfully, run the following command:

   ```
   show databases;
   ```

   You should see 'instagramclonedb' in the list of databases.

6. **Setup the Connection to the MySQL Database in your Java Application**: Now, you need to set up the connection to your 'instagramclonedb' database from your Java application. Open the 'application.properties' file in your Java project and add the following lines:

   ```
   spring.jpa.hibernate.ddl-auto=update
   spring.datasource.url=jdbc:mysql://localhost:3306/instagramclonedb?sessionVariables=sql_mode='NO_ENGINE_SUBSTITUTION'&jdbcCompliantTruncation=false
   spring.datasource.username=root
   spring.datasource.password=YourPassword
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   ```

   Replace 'YourPassword' with the password you set up for MySQL server.

## Firebase Setup

1. Create a new Firebase account or log in to your existing account.
2. Click on the "Get started" button.
3. Click on "Add project" or "Create project".
4. Name the project (for instance, "instaclone") and click "Continue".
5. Do not enable Google Analytics for this project.
6. Click "Create Project" and wait for the project to be initialized.
7. Navigate to the "Authentication" section and click "Get started".
8. Enable "Email/Password" and "Google" as sign-in methods. For Google sign-in, select "project-supported email" and choose your default Google email.
9. Navigate to the "Storage" section and click "Get started". Start in test mode since this project is only a demo. Click "Next".
10. Choose a Cloud Storage location that's nearest to you (for instance, "nam5 (us-central)" for USA or "eur3 (Europe-west)" for Western Europe). Once you've selected your server, click "Done".
11. Finally, go to the project settings (click on the gear icon, then "Project Settings").
12. Click on the "</>" icon to add a web app. Give the app a nickname "instaclone" and click "Register app".
13. In the "Add Firebase SDK" section, click "Use npm".
14. Replace the `const firebaseConfig` with your own Firebase configuration values in the `.env` file. Make sure to remove any spaces around the equals sign (=).

## Environment Variables

To run this project, you need to add the following environment variables to your `.env` file. Create the `.env` file in the project directory if it does not exist.

```
REACT_APP_FIREBASE_API_KEY=your firebase apiKey
REACT_APP_FIREBASE_AUTH_DOMAIN=your firebase authDomain
REACT_APP_FIREBASE_PROJECT_ID=your firebase projectId
REACT_APP_FIREBASE_STORAGE_BUCKET=your firebase storageBucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your firebase messagingSenderId
REACT_APP_FIREBASE_APP_ID=your firebase appId
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MrPiccolo23/InstagramClone1.0-Front-End.git
```

2. Navigate to the project directory:

```bash
cd [Your Project Folder Name]
```

3. Install the dependencies:

```bash
npm install
```

or if you are using yarn:

```bash
yarn install
```

## Run Locally

To run the project locally:

```bash
npm start
```

---

This should provide a clearer understanding of the installation, setup, and running instructions for your project.