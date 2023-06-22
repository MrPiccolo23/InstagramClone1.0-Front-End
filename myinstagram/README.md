

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

And that's it! You have now successfully set up a MySQL database and connected it to your Java application. Remember to keep your MySQL Server password secure and don't share it with anyone.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
