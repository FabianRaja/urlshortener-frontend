# URL SHORTENER - FrontEnd

### [Live Server](https://makeasyurl.netlify.app/)

## Demo Account : 

* Email : demo@gmail.com
* Password : Demo@123

## Packages : 

* Tailwind Css
* DaisyUI
* React Router Dom
* Formik
* Yup
* Copy-to-clipboard
* Sweetalert2

## Features :

* Register
* Login
* Reset Password
* Logout
* Forgot
* Shorten Url
* Redirection
* Copy to Clipboard

## Navigations : 

* Login - to Dashboard Page
* Forgot Password - to Send Reset Link Page
* Reset Password (From Mail) - to Reset Password Page
* Back to Dashboard - Top Right Corner or Bottom in Login/Register/Forgot Password/Reset Password
* Activation - To Login Page
* Dashboard - In Top Left Corner
* Shorten URL - In Bottom in Dashboard Page
* Short Link Now - In Top Bar
* Shortened Link List - In Top Bar
* Login/Register - In Top Bar
* Short Url - Redirects to long Url

## Steps to Use : 

### Register

* In Top Bar, Click <b>Login/Register</b>
* It will navigate the user to the Login Form Page
* Switch to Register Form page by clicking Register button in the login form page
* Enter the firstName,lastname, email address and password and click register button
* If the user is already registered it will not register user and reply as User Email already Registered
* Otherwise it will send email to activate your account
* User is now <b>registered successfully</b>
* Click the Activate link button in the registered email address to activate your account
* It will activate your account and automatically redirect user to the login page
* User is now <b>activated successfully</b>
* Click Login Button in Register form to Login?<b>Login</b> to Login

### Login

* In Top bar, Click <b>Login/Register</b>
* Enter the registered email address and password
* If the email address is not registered it will show as User not registered
* Or the password is not valid it will show as Invalid password
* Or the user is registered and account is not active it will show response and account is not active and send the mail to activate your account
* Otherwise it will login user and navigate the page the dashboard page
* User is now <b>Logged in successfully</b>

### Forgot and Reset Password

* In Top bar, Click <b>Login/Register</b>
* In Login Form Page, Click <b>Forgot Password?</b>
* It will navigate the user to the forgot password page
* In that page, enter the email id and click <b>Forgot password</b>
* If the email address is not registered it will show as User not registered
* Otherwise it will show response as reset link sent to mail
* Now, Check for reset link mail in your gmail from fullstackpurpose@gmail.com sender
* Click Reset Password Button to reset password
* It will navigate the user to the reset password page
* In reset password Page enter the new password,confirm password and enter <b>Reset Password</b> button
* It will show as <b>Password Reset Successfull</b>
* Now user can login with the new password

### Logout

* In the Top Right Corner, user can find the logout button

### Short Link Now

* In the Top bar, click Short Link Now button
* If the user is not logged in it will show alert message and navigate user to the login form page
* After logged in, user can paste the long url in the paste long url field and click shorten button
* It will shorten the url and display it below
* User can copy to clipboard by clicking the Copy to Clipboard button
* Or Can copy it manually too

### Shortened Link Lists

* In the Top bar, click Shortened Link Lists button
* If the user is not logged in it will show alert message and navigate user to the login form page
* After logged in, user can see the list of Shortened Urls and its informations

### Redirection

* Copy the Shortened Url and paste in the website url field
* If the link is valid it will redirect user to the original url
* If it is not valid it will show response as Invalid Url


