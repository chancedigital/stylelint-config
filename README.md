# Chance Digital stylelint Config

Shareable configuration for [stylelint](https://stylelint.io/) following Chance Digital Coding Standards.

## Installation

You should install this configuration along with its `peerDependencies` as `devDependencies` in your project:

```shell
yarn add -D @chancedigital/stylelint-config stylelint
```

If you're planning to use the SCSS superset of rules, you should also install `stylelint-scss`:

```shell
yarn add -D stylelint-scss
```

## Usage

Extend the configuration from your project's [stylelint configuration](https://stylelint.io/user-guide/configuration/):

```json
{
  "extends": "@chancedigital/stylelint-config"
}
```

Or, if your project uses SCSS and you want to opt in to additional SCSS-specific rules, extend the `scss` superset:

```json
{
  "extends": "@chancedigital/stylelint-config/scss"
}
```

If you are working on a WordPress project, extend the `wp` superset:

```json
{
  "extends": "@chancedigital/stylelint-config/wp"
}
```

## Extending the configuration
Add a "rules" key to your config file, then add your overrides and additions there.

```json
{
  "extends": "@chancedigital/stylelint-config/scss",
  "rules": {
    "at-rule-no-unknown": true,
  }
}
```
