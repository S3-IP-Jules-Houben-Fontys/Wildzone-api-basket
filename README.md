# Wildzone-api-basket
[![Upload docker-image on successfully passing tests on main](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/upload-docker-image.yml/badge.svg)](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/upload-docker-image.yml)
[![Test code for development](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/development-testing.yml/badge.svg)](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/development-testing.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=S3-IP-Jules-Houben-Fontys_Wildzone-api-basket&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=S3-IP-Jules-Houben-Fontys_Wildzone-api-basket)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=S3-IP-Jules-Houben-Fontys_Wildzone-api-basket&metric=coverage)](https://sonarcloud.io/summary/new_code?id=S3-IP-Jules-Houben-Fontys_Wildzone-api-basket)

The basket API ensures that Wildzone customers' shopping cart is kept up to date. So, as soon as a Wildzone customer adds an item in the front-end, it is passed on to the Wildzone-api-basket to be processed and stored. In this API, no rows are deleted, just archived. In this way the data is preserved, but the Wildzone customer in principle does not notice anything. The Wildzone-api-basket is a microservice of the (demo) Wildzone webshop & admin panel. For detailed info regarding choices in this project, reference is made to the <a href="https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-documentation">Wildzone documentation (in Dutch)</a>.

### Userstory

In this repository, a part of the userstory <a href="https://dev.azure.com/461249/S3%20IP%20Jules%20Houben/_backlogs/backlog/S3%20IP%20Jules%20Houben%20Team/Backlog%20items/?workitem=83">US-05: As a customer of Wildzone I want to be able to add products to a basket, so that I don't have to pay for each product separately.</a> is made.

<h2 id="start">Getting started</h2>

If you are not familiar with this API, it's recommended that you first read the <a href="#https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/blob/development/OpenAPI.yml">OpenAPI 3.0 specification</a>, or you can read <a href="https://documenter.getpostman.com/view/17792690/UVXjLc2y">the generated documentation by Postman here</a> to get the hang of how this API works. 

There are two ways to run this API seperately from the entire Wildzone project:

<ul>
    <li><a href="#run">How to run API locally</a></li>
    <li><a href="#docker">How to run API in Docker</a></li>
</ul>


<h2 id="run">How to run API locally</h2>

Make sure you have cloned this repository, depending on what branch you pull, you might have varying experiences. Check the section <a href="#branches">branches</a> to see which branch suits your purpose.

<ol>
<li>Go to the root of the project you just pulled and execute the following command:</li>

`npm i`

This will install all the required packages to run this API.

<li>Clone the sample.env and change the name to be just '.env'. Fill in the empty values with your preferred settings.</li>

<li>Make sure you have <a href="https://www.docker.com/get-started">Docker installed</a> and running on your machine.</li>
<li>Start up the MySQL database with the following command in the root folder:</li>

`docker-compose up` <br>
You can also run this in detached mode if you want to re-use the console:<br>
`docker-compose up -d`

<li>Finally start the API with the following command:</li>

`npm run devStart`

</ol>

The application should start up and listen to <a href="localhost:3005/api">localhost:3005/api</a>

<h2 id="docker">How to run API in Docker</h2>

[![Upload docker-image on successfully passing tests on main](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/upload-docker-image.yml/badge.svg)](https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/actions/workflows/upload-docker-image.yml)

This is only possible if the application is working and pushed to Docker hub. You can test this yourself by checking out <a href="https://hub.docker.com/r/jjuless/wildzone-api-basket">jjuless' Docker Hub</a> to see if there is an image or check out the badge just below the subtitle. If the badge states 'passing', then you can use this method.

<ol>
<li>Pull the latest image from <a href="https://hub.docker.com/r/jjuless/wildzone-api-basket">this docker hub page</a> with the following command:</li>

`docker pull jjuless/wildzone-api-basket` 

<li>Start up a MySQL container which you can connect to.</li>

<li>Duplicate the <a href="https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-api-basket/blob/main/sample.env">sample.env</a> file from the repository and fill in the empty values with your preferred settings to connect to the database from the last step.</li>

<li>Now run the follwing command to create the API container:</li>

`docker run --env-file .env jjuless/wildzone-api-basket`

make sure the .env file is in the same folder as where this command gets executed.

</ol>

The application should start up and listen to <a href="localhost:3005/api">localhost:3005/api</a>

<h2 id="tests">Tests</h2>
To test wether the application is working correctly or not, integration tests get run when pushed to development and main. The tests can also be run when the API is <a href="#run">run locally</a>. This can be done with the following command:

`npm test`

Since the API is part of a bigger project it's important to test the integration and simulate how a real API call gets processed. Unit tests are at time of writing this README not important as there are no significant algoritms that need to be tested, so for now only integration tests (Endpoint tests) are made and run.

<h2 id="branches">Branhces</h2>

![Wildzone-Software Branches drawio](https://user-images.githubusercontent.com/73841047/143588680-91d9ee14-e0ad-4790-bcad-021cdfcdaf89.png)

The main branch is protected, so you can only create a pull request for it, which when approved merges with main. New finished code gets merged into development, also with a pull request but development is not protected. On the branch userstory or to be more precise "US-XX" where XX is the number/id of the userstory the new feature gets developed. 

Commits need to be descriptive to get a quick overview what has been added. When needed the description can add further information about the commit. 

