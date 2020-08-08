# VuePress Blog Boilerplate (Deprecated)

![Status: Deprecated](https://img.shields.io/badge/status-deprecated-orange) [![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/bencodezen/vuepress-blog-boilerplate/blob/master/CHANGELOG.md) [![Netlify Status](https://api.netlify.com/api/v1/badges/de71217a-c091-4908-a913-d6415815c92d/deploy-status)](https://app.netlify.com/sites/vuepress-blog-boilerplate/deploys)

This is a **deprecated** opinionated architecture that uses [VuePress v1.0.0-alpha](https://vuepress.vuejs.org) to power a blogging platform.

## Purpose

To provide a blueprint of how blogging is possible with [VuePress v1.0.0-alpha](https://vuepress.vuejs.org/) and empower you with enough boilerplate so you feel comfortable customizing it to your liking.

## Why is it deprecated?

As my work with OSS expands, I wanted the flexibility to switch tech stacks as the requirements for my own blog / site requirements increase. As a result, I do not have the time to maintain this one since it would be a separate effort from my current OSS work.

To follow the latest, you can follow the new repo at [Ben's Blog Boilerplate](https://github.com/bencodezen/bens-blog-boilerplate).

## Features

- Write posts in Markdown
- Basic pagination sorted by most recent posts
- Ability to search for posts via headings within the post
- Archived posts page
- Basic scheduling for future publishing
- Basic tagging for posts
- Automatic RSS feed generation
- Easily integrate Google Analytics

## Getting Started

### Prerequisites

- [NodeJS 12](https://nodejs.org/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/) (Recommended)
- Basic knowledge of navigating the terminal

### Installation

> If your plan is follow the tutorial all the way through to deployment, make sure you fork this project instead of simply cloning it!

In your terminal, navigate to the desired directory where you want this project to live.

```bash
# Clone the repo for local development
git clone https://github.com/bencodezen/vuepress-blog-boilerplate.git

# Change directory into project
cd vuepress-blog-boilerplate

# Install dependencies
yarn

# Run local server
yarn dev
```

You should now be able to visit [http://localhost:8080](http://localhost:8080)!

## Documentation

To check out the tutorial and docs, check out [the guide](https://vuepress-blog-boilerplate.bencodezen.io/).

## Examples

- [VuePress Blog Boilerplate Demo](https://vigorous-lovelace-5c861d.netlify.com/)
- [BenCodeZen Blog](https://www.bencodezen.io)

## Hat Tip

For those familiar with the [Vue.js](https://www.vuejs.org) ecosystem, you might be reminded of [Chris Fritz's](https://www.twitter.com/chrisvfritz) [Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) and you would be absolutely right. I thought the concept was brilliant and wanted to do something similar for the [VuePress](https://vuepress.vuejs.org) ecosystem since blogging is something that still requires a fair amount of configuration and knowledge in order to get started.

And in case you didn't know, Chris Fritz is one of the core contributors to the incredible [Vue.js docs](https://vuejs.org/v2/guide/) that we all love so much. So if you would like to help support him so he can spend more time on creating awesome content for the Vue.js community, please support him by [becoming a sponsor on Patreon](https://www.patreon.com/chrisvuefritz).
