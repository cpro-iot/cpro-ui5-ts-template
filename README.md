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

  <p>Based on the  <a href="https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md">official SAP UI5 guidelines to create a UI5 TS app</a></p>
</div>

## About the project

UI5 is an great framework to develop enterprise grad web applications. It comes with a lot of functionality out of the box. This repository aims to capture the best of these and provide an entry point for web developers striding to deliver the UI5 feeling to their web applications.

### Why another template?

There already is stuff like Yeoman & other UI5 templates on the www. Especially with the rise of web components, developing UI5 apps in React is a good alternative to the conventional approach.

So you should use this template if you

- prefer working closer to the core project
- would like to use (or keep using) all the base resources UI5 offers, such as
  - out of the box i18n support
  - built-in routing and form validation
  - [samples](https://ui5.sap.com/#/controls) and a [full API reference](https://ui5.sap.com/#/api)
  - other useful [core packages & tooling](https://ui5.sap.com/#/tools)
- work in a bigger team and prefer using Typescript over JS
- would like to build a prototype that can be quickly extended

You should **not** use this template if you

- are new to UI5 development (in this case, a Yeoman generator can provide more guidance)
- prefer [UI5 Web Components](https://sap.github.io/ui5-webcomponents-react/?path=/story/getting-started--page)
- prefer using Javascript
- need just a quick throwaway - prototype
- use primarily OData (feature is yet to be implemented)

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

- UI5 built-in form validation - See [Code Controller](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/controller/TodoForm.controller.ts#L42), [View Form Template](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/view/TodoForm.view.xml#L23), [Manifest Configuration](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/manifest.json#L34) `"handleValidation": true` under `sap-ui5`
- Table export using [Xlsx](https://www.npmjs.com/package/xlsx) - See [Todo Model](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/model/Todo.model.ts#L83)
- Set Fiori theme to dark mode + change languages in a dedicated `Settings` - Fragment - See [Config Model](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/model/Config.model.ts) and [Settings Fragment](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/view/Fragments/Settings.fragment.xml)
- A message - manager for user feedback - See [Message Model](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/model/Message.model.ts) and [Messages Fragment](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/view/Fragments/Messages.fragment.xml). See also [Todo Form Controller](https://github.com/cpro-iot/cpro-ui5-ts-template/blob/master/src/controller/TodoForm.controller.ts) for implementation example

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

\* Note: SAP recommends NOT to extend the JSONModel. Then again, this is an opinionated template
