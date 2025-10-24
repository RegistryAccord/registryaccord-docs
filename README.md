# RegistryAccord Documentation

This repository contains the source code for the official documentation website for the RegistryAccord protocol, available at https://www.registryaccord.com.

The site can be accessed at: [https://registryaccord.github.io/registryaccord-docs/](https://registryaccord.github.io/registryaccord-docs/docs)

## Overview

This site serves as the public home for the RegistryAccord project. It hosts our litepaper, architectural decision records (ADRs), and other key project documents.

The site is built using Docusaurus, a documentation generator.

In addition to this website repository, the broader documentation ecosystem includes:
- Protocol specifications: https://github.com/RegistryAccord/registryaccord-specs
- Documentation site source: https://github.com/RegistryAccord/registryaccord-docs
- Service repositories and example implementations:
  - Identity (Go): https://github.com/RegistryAccord/registryaccord-identity-go
  - CDV (Go): https://github.com/RegistryAccord/registryaccord-cdv-go
  - Gateway (Go): https://github.com/RegistryAccord/registryaccord-gateway-go
  - CLI (TypeScript): https://github.com/RegistryAccord/registryaccord-cli-ts
  - Devstack (Docker Compose): https://github.com/RegistryAccord/registryaccord-devstack
  - Conformance: https://github.com/RegistryAccord/registryaccord-conformance
  - Terraform Modules: https://github.com/RegistryAccord/registryaccord-terraform-modules

## Running the Site Locally

To run a local copy of the documentation site for development or preview purposes, follow these steps.

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended), npm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/registryaccord/registryaccord-docs.git
cd registryaccord-docs
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Run the development server
```bash
pnpm dev
```

### 4. View the site
Open your browser and navigate to http://localhost:3000. The site will automatically reload as you make changes to the source files.

## Running with Docker

You can also run the documentation site using Docker for a consistent environment.

### Prerequisites
- Docker
- Docker Compose

### Run with Docker Compose
```bash
docker-compose up
```

This will start the documentation site on http://localhost:3000.

### Run in Development Mode with Docker
```bash
docker-compose -f docker-compose.dev.yml up
```

This will start the development server with hot reloading on http://localhost:3000.

### Build and Run Docker Image Manually
```bash
docker build -t registryaccord-docs .
docker run -p 3000:3000 registryaccord-docs
```

## Contributing to the Documentation

We welcome contributions to improve our documentation! Fixing typos, clarifying confusing sentences, or adding examples are all valuable ways to help the project.

Our general contribution process is outlined in the main protocol CONTRIBUTING.md file.

All documentation content is written in Markdown (.mdx) and located in the /pages directory of this repository. Simply find the file you wish to edit and submit a pull request with your changes.

## Deployment

This site is automatically deployed to GitHub Pages. Every merge to the main branch will trigger a new production deployment via GitHub Actions.

### GitHub Pages Deployment

The site is deployed using a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The workflow:

1. Builds the static site using Nextra
2. Copies `docs.html` to `index.html` to ensure the documentation is the root page
3. Deploys the static files to GitHub Pages

The site can be accessed at: [https://registryaccord.github.io/registryaccord-docs/](https://registryaccord.github.io/registryaccord-docs/docs)

### Manual Deployment

To manually deploy the site:

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory

3. Deploy the contents of the `out` directory to your preferred hosting platform

### Docker Deployment

The site can also be deployed using Docker:

1. Build the Docker image:
   ```bash
   docker build -t registryaccord-docs .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 registryaccord-docs
   ```

The site will be available at http://localhost:3000

## License

The content and code in this repository are licensed under the MIT License. See the LICENSE file for more details.

[1](https://github.com/RegistryAccord/registryaccord-docs)

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
