<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cpro-iot">
    <img src="https://www.cpro-iot.de/wp-content/uploads/Logo-mit-Claim_weiss-1920x204.png" alt="Logo" width="480" height="60">
  </a>
  
<h3 align="center">OpenUI5 Typescript template</h3>

  <p align="center">
  An opinionated Typescript template for developing (Open)UI5 apps. 
    <br />
    <br />
  </p>
</div>

## About the project

UI5 is an great framework to develop enterprise grad web applications. It comes with a lot of functionality out of the box. This repository aims to capture the best of these and provide an entry point for web developers striding to deliver the UI5 feeling to their web applications.

### Basic Features:

- `BaseModel`, an extended `JSONModel` with HTTP methods \*
- `ConfigModel`, an interface that provides controlled access the the SAP UI5 `Core` class
- `BaseController`, an extended `Controller` for reusable handler methods
- UI5 Typescript types
- Three fragment presets with example code in the `BaseController`

### On top features

- Recommended VSCode plugins for DX
- Babel, NPM scripts & UI5 middleware for development
- A [dockerfile for local development](./client.dev.dockerfile) with NPM + Babel + ui5/cli
- A [dockerfile for productive usage](client.prod.dockerfile) with nginx as a static server, see [nginx.conf](./nginx.conf)

### Demo features

- UI5 built-in form validation (TBD)
- Table export using [Xlsx](https://www.npmjs.com/package/xlsx)
- Set Fiori theme to dark mode + change languages in a dedicated `Settings` - Fragment
- A message - manager for user feedback

<p align="right">(<a href="#top">back to top</a>)</p>

### Developed with

- [OpenUI5](https://openui5.org/), Template generated from [this repository](https://github.com/SAP/openui5-basic-template-app)
- Docker & Docker Compose
- VSCode

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Requirements

- Docker & Docker compose plugin
- [UI5-CLI](https://sap.github.io/ui5-tooling/pages/CLI/) installed globally

### Installation

- Clone this repos
- Install the recommended VSCode plugins
- Run `npm install`
- Run `npm run dev`

You can use the two `dockerfiles` for a more sophisticated setup.

## Local development

- Clone this repos
- Run `npm run dev`

If you're running on docker-compose, add the following to your docker-compose.yaml to run this setup in development mode.

```yaml
client:
  build:
    context: ./client
    dockerfile: ./client.dev.dockerfile
  volumes:
    - ./client:/client
  ports:
    - "8080:8080"
  expose:
    - "8080"
```

## Deployment

- Run `npm run build`

If you're running on `docker-compose`, add the following to your `docker-compose.yaml` to run this setup in production mode.

The app will be served by an instance of Nginx.

```yaml
client:
  build:
    context: ./client
    dockerfile: ./client.prod.dockerfile
  ports:
    - "80:80"
  expose:
    - "80"
```

## Screenshots

### Fiori 3 Light & Darkmode

![fiori three light and darkmode](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/.github/assets/screenshot-demo-theming.png?raw=true)

### Message manager and settings menu

![message manager and settings menu](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/.github/assets/screenshot-demo-settings-message-manager.png?raw=true)

## Sources

Language flags: Wikimedia Commons: Flags: https://commons.wikimedia.org/w/index.php?search=flags&title=Special:MediaSearch&go=Go&type=image

\* Note: SAP recommends NOT to extend the JSONModel, I did it for the convenience
