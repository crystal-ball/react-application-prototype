<h1 align="right">
  <img height=75 src="./docs/assets/readme-header.png" alt="React application prototype">
</h1>

<div align="right">
<!-- prettier-ignore-start -->
  <!-- <a href="https://www.npmjs.com/package/react-application-prototype" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/react-application-prototype.svg" alt="current version" valign="text-top"/>
  </a> -->
  <a href="https://github.com/crystal-ball/react-application-prototype/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/react-application-prototype/workflows/CI%2FCD/badge.svg" alt="Build status" valign="text-top" />
  </a>
  <a href="https://dashboard.cypress.io/#/projects/v3cpt4/runs">
    <img src="https://img.shields.io/badge/cypress-dashboard-brightgreen.svg" alt="Cypress Dashboard" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/react-application-prototype/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/3b4b227366911cc055e0/maintainability" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/react-application-prototype/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/3b4b227366911cc055e0/test_coverage" valign="text-top" />
  </a>
  <a href="https://snyk.io/test/github/crystal-ball/react-app-prototype?targetFile=package.json">
    <img
      src="https://snyk.io/test/github/crystal-ball/react-app-prototype/badge.svg?targetFile=package.json"
      alt="Known Vulnerabilities"
      data-canonical-src="https://snyk.io/test/github/crystal-ball/react-app-prototype?targetFile=package.json"
      valign="text-top"
    />
  </a>
  <code>:status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>

  <br />
  <a href="https://renovatebot.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="dependencies managed by Renovate" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/react-application-prototype#zenhub" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Shipping_faster_with-ZenHub-5e60ba.svg?style=flat-square" alt="ZenHub" valign="text-top" />
  </a>
  <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Prettier" valign="text-top" />
  </a>
  <a href="https://percy.io/Crystal-Ball/react-application-prototype" target="_blank" rel="noopener noreferrer">
    <img src="https://percy.io/static/images/percy-badge.svg" alt="This project is using Percy.io for visual regression testing" valign="text-top" />
  </a>
  <!-- <a href="https://semantic-release.gitbook.io/semantic-release/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="managed by semantic release" valign="text-top"/>
  </a> -->
  <code>:integrations</code>

  <br />
  <a href="https://github.com/crystal-ball" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" valign="text-top"/>
  </a>
  <a href="https://github.com/crystal-ball/react-application-prototype" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" valign="text-top"/>
  </a>
  <code>:flair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
<!-- prettier-ignore-end -->
</div>

<h4 align="center">
  <em>Prototypical React application for Crystal Ball Projects</em>
</h4>

- [Setup](#-setup) - Getting started
- [Testing](#-testing) - Running application test suites
- [Developing](#-developing) - Application development tools and conventions
- [Notes](#-notes) - Conventions and reference documentation

---

## ⚙️ Setup

**1. Install dependencies**

```
npm install
```

## ✅ Testing

The project includes 3 types of testing: static linting, unit testing and
acceptance testing.

**Static linting** uses ESLint with the `eslint-config-eloquence` ruleset.

```
npm run test:lint
```

**Unit testing** uses Jest with `@testing-library/react` and is configured in
`jest.config.js`

```
npm run test:unit
npm run test:watch
```

**Acceptance testing** uses Cypress inside of a Docker Compose environment

```
npm run test:acceptance
```

### Testing patterns

- _React Router_ management requires the addition of a `MemoryRouter` (reference
  the Header component test file)

## 🌱 Development

Start the webpack development server.

```
npm start
```

### Formatting

All JS, JSON, SCSS and markdown files are required to be formatted by Prettier
and can be formatted using the `format` npm command.

## 📝 Notes

_Miscellaneous project notes and explanations_

### Project dependencies

- Jest IntelliSense isn't working unless the `@types/jest` package is installed
  as a project dependency.
