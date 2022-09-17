
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/logoPayPagamentos.png?raw=true" width="200" />
</p>
<hr/>
<h2>PAY pagamentos is the second evaluative project from DevInHouse</h2>
<h3> Introduction: PAY PAGAMENTOS, a leading company in the Fintech segment, has a new project entitled
PAY, an audacious application focused on paying bills and earning cashback. With this new app, users will be able to pay their bills without leaving home and in addition to accumulating a good cashback value($). With pay points (cashback), the user can acquire coupons and services offered by the most varied establishments.
To develop the project, you will use mobile programming using React Native and a
Fake API with json-server. </h3>
<a href="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/ProjectDetails.pdf">Click here to check the project requirements</a>
<hr/>
<h2> Here are the results with a short exeplanation of its features </h2>
<h3> First screen </h3>
<p> The first screen is located in the file FirstPage.js, the page contains an animation from LottieFiles and two buttons. As soon the user enters this page the applications checks if the user has  already logged in this device before, if so, it checks if the user have selected to keep logged and send him to the home page, without the need to input login information again.</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/firstPage.jpeg?raw=true" width="200" />
</p>
<hr>
<h3> Login screen </h3>
<p> The login is located in the file SignIn.js. This page is made of two input fields, one for the user CPF (A brazilian federal document, with unique nuber for each person) and other for password. Bellow is located a switch that the user can toggle to save the informations on local storage and keep him logged.</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/login.jpeg?raw=true" width="200" />
</p>
<hr>
<h3> Sign up screens </h3>
<p> A new user on the plataform can choose to create a new account on the first page or in the login page. It will redirect the user to the sign up process that consists of 4 screens. SignUp.js that gets personal informations from user, Adress.js that gets the billing adress from user, ChargeDate.js that gets the billing day and finally Policy.js that asks the user for confirmation on the privacy policy. After confirming the last one, user data is sent to our "fake" API server and stored in the database.json file.</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/SignUp.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/adress.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/chargeDate.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/policy.jpeg?raw=true" width="200" />
</p>
<hr>
<h3> Home screen </h3>
<p> Home screen is a Bottom Tab Navigator with 3 screens in it, Scan.js, List.js and Profile.js. The user gets redirected to this page after a successful login</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/scan.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/invoices.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/profile.jpeg?raw=true" width="200" />
</p>
<p> On the scan tab the user can use the phone's camera to "read" barcode bills and pay them, as shown in the image bellow</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/scan.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/scanWorking.jpeg?raw=true" width="200" />
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/invoiceDetails.jpeg?raw=true" width="200" />
</p>
<p> On the list tab the user can see all the payed bills</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/invoices.jpeg?raw=true" width="200" />
</p>
<p> On the profile tab the user can see some of his personal information. At the bottom is located a exit buttom that logout the user and erase all info from local storage</p>
<p align="center">
  <img src="https://github.com/tiagodgy/PAY-PAGAMENTOS/blob/master/src/screens/images/scrennshots/profile.jpeg?raw=true" width="200" />
</p>
  <hr>
  <h3> This is how you can test this application: </h3>
  <p>Note: This was developed using an Iphone SE 2 gen, was not tested with other OS or phone model. Since it was made with React Native it should work with any IOS and Android device, but some native features may differ</p>
  <ol>
  <li>Clone this repository</li>
  <li>Run this command on terminal: npm install</li>
  <li>Run this command on terminal: npm run api</li>
  <li>On a new terminal run this command: npx ngrok http 3333</li>
  <li>Copy the Http adress the you got from the last command</li>
  <li>On API.js inside the services foder, substitute the http adress for the one you got</li>
  <li>On a new terminal run this command: Expo start</li>
  <li>Open Expo Go app in your phone and scan the QrCode that you got from the last command</li>
  </ol>

