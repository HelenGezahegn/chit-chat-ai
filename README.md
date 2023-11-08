<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HelenGezahegn/chit-chat-ai">
    <img src="client/public/logo.png" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">ChitChat</h3>

  <p align="center">
    Chat App with OpenAI Support Bot
    <br />
    <a href="https://github.com/HelenGezahegn/chit-chat-ai"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chit-chat-ai-1.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/HelenGezahegn/chit-chat-ai/issues">Report Bug</a>
    ·
    <a href="https://github.com/HelenGezahegn/chit-chat-ai/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
<img src="https://github.com/HelenGezahegn/chit-chat-ai/assets/23146829/e3cd4693-dd0d-4ca9-85d3-1789b99de3a2" alt="product" style="width:800px">
</div>
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

ChitChat, a chat app that leverages the power of OpenAI's GPT-based technology to provide a unique messaging experience.
With dynamic messaging, attachments, and innovative AI-enhancements, ChitChat offers a versatile platform for personal and professional interactions.
Join us in redefining conversations and download ChitChat today for a more engaging and memorable messaging experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![React Router][React-Router-dev]][React-Router-url]
- [![Redux][Redux-dev]][Redux-url]
- [![Node.js][Node-dev]][Node-url]
- [![Sass][Sass-dev]][Sass-url]
- [![Express][Express-dev]][Express-url]
- [![Vercel][Vercel-dev]][Vercel-url]
- ![Auth0](https://a11ybadges.com/badge?logo=auth0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Built from scratch, this project contains a backend and a frontend denoted by the "server" and "client" folders respectively. To get a local copy up and running, follow these steps.

### Backend

1. [Create an account with OpenAI and obtain a key](https://openai.com/). After sign up, it'll show you your API key, `OPENAI_API_KEY`. Make sure to copy it to your `.env` as they will only show you this key once.

   - The free trial provides you with $5 credit in using their services (which is more than enough). Please know that this credit expires in 3 months.

2. [Sign up for a Chat Engine accout](https://chatengine.io/) to obtain the `PROJECT_ID` and `PRIVATE_KEY`.

3. Clone the repo

   ```sh
   git clone https://github.com/HelenGezahegn/chit-chat-ai.git
   ```

4. Install NPM packages

   ```sh
   cd server
   npm install
   ```

5. Create a `.env` file in the `server` directory. Add the port, OpenAI, and Chat Engine keys.

   ```js
   PORT = 1337;
   OPENAI_API_KEY=...

   # Chat Engine
   PROJECT_ID=...
   PRIVATE_KEY=...

   # SupportBot
   BOT_USER_NAME=...
   BOT_USER_SECRET=...
   ```

6. Run it!

   ```js
   npm run start
   ```

### Frontend

In another terminal:

1. [Sign up for an Auth0 account](https://auth0.com/docs/quickstart/spa/react/01-login) to obtain the `VITE_AUTH0_CLIENT_ID` and `VITE_AUTH0_DOMAIN` and use their universal login screen.

2. Install NPM packages

   ```sh
   cd client
   npm install
   ```

3. Create a `.env.local` file in the `client` directory. Add `VITE_` in front of all keys in order to be read by vite.

   ```js
     VITE_BASE_URL=...

     # Chat Engine
     VITE_PROJECT_ID=...

     # Auth0
     VITE_AUTH0_CLIENT_ID=...
     VITE_AUTH0_DOMAIN=...
   ```

4. Run it! Open [http://localhost:5173](http://localhost:5173) to view it in your browser. This page will reload when you make changes and display lint errors in the console.

   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Demo video coming soon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Update styling
- [x] Add Auth0
  - [ ] Add logout
- [ ] Add calling
- [ ] Automate SupportBot chat creation after signup

See the [open issues](https://github.com/HelenGezahegn/chit-chat-ai/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Helen Gezahegn

[![LinkedIn][linkedin-shield]][linkedin-url]

<gezahegn@ualberta.ca>

Project Link:

- Front-End: [https://chit-chat-ai-1.vercel.app](https://chit-chat-ai-1.vercel.app)
- Back-End: [https://chit-chat-ai-server.vercel.app](https://chit-chat-ai-server.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/HelenGezahegn/chit-chat-ai.svg?style=for-the-badge
[contributors-url]: https://github.com/HelenGezahegn/chit-chat-ai/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HelenGezahegn/chit-chat-ai.svg?style=for-the-badge
[forks-url]: https://github.com/HelenGezahegn/chit-chat-ai/network/members
[stars-shield]: https://img.shields.io/github/stars/HelenGezahegn/chit-chat-ai.svg?style=for-the-badge
[stars-url]: https://github.com/HelenGezahegn/chit-chat-ai/stargazers
[issues-shield]: https://img.shields.io/github/issues/HelenGezahegn/chit-chat-ai.svg?style=for-the-badge
[issues-url]: https://github.com/HelenGezahegn/chit-chat-ai/issues
[license-shield]: https://img.shields.io/github/license/HelenGezahegn/chit-chat-ai.svg?style=for-the-badge
[license-url]: https://github.com/HelenGezahegn/chit-chat-ai/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/HelenGezahegn
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express-dev]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Redux-dev]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://react-redux.js.org/
[React-Router-dev]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/
[Sass-dev]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white

[Sass-url]: [https://mui.com/material-ui/](https://sass-lang.com/)
[Node-dev]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white

[Node-url]: [https://getbootstrap.com](https://nodejs.org/en)
[Vercel-dev]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com
