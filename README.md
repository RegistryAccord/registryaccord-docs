# RegistryAccord Documentation

This repository contains the source code for the official documentation website for the RegistryAccord protocol.

The site can be accessed at: [https://registryaccord.github.io/registryaccord-docs/](https://registryaccord.github.io/registryaccord-docs/)

## Overview

This site serves as the public documentation hub for the RegistryAccord project, an open protocol that enables creators to own their work, their audience, and the economics of their business.

Key features of RegistryAccord:
- **Creator Ownership**: Creators retain full ownership of their content, audience, and data
- **Decentralized Identity**: Built on DID (Decentralized Identifiers) for portable identity
- **Open Standards**: Based on open protocols and specifications
- **Interoperability**: Works across different platforms and services

## Recent Updates

The documentation site has been completely overhauled with:
- Comprehensive documentation for all RegistryAccord components
- New sections: About, Getting Started, Contributing
- Blog with welcome posts and technical guides
- Updated styling with brand colors
- GitHub Actions workflows for automated deployment

## Running the Site Locally

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/registryaccord/registryaccord-docs.git
cd registryaccord-docs
```

### 2. Install dependencies
```bash
npm install
```

### 3. (Optional) Generate API documentation
```bash
npm run sync-specs
```

### 4. Run the development server
```bash
npm start
```

### 5. View the site
Open your browser and navigate to http://localhost:3000. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To serve the built site locally:

```bash
npm run serve
```

## Deployment

This site is automatically deployed to GitHub Pages. Every merge to the main branch will trigger a new production deployment via GitHub Actions.

The site is deployed using GitHub Actions workflows defined in `.github/workflows/`:
- `deploy.yml`: Production deployment workflow
- `test-deploy.yml`: Test deployment for pull requests

## API Documentation Generation

This site automatically generates API documentation from OpenAPI specifications:

1. **Sync specifications**: `npm run sync-specs` - Copies the latest OpenAPI specs from the registryaccord-specs repository and generates MDX documentation
2. **Generate API docs**: `npm run gen-all` - Generates MDX documentation from the OpenAPI specs

The `sync-specs` command combines both operations: it copies the specs and then runs `gen-all` to generate the documentation.

## Project Structure

- `docs/`: Documentation pages organized by category
- `blog/`: Blog posts and articles
- `src/`: React components and pages
- `static/`: Static assets like images and icons
- `.github/workflows/`: GitHub Actions workflows

## Contributing

We welcome contributions to improve our documentation! To contribute:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request

All documentation content is written in Markdown (.mdx) and located in the `docs/` and `blog/` directories.

## License

The content and code in this repository are licensed under the MIT License. See the LICENSE file for more details.

## Related Repositories

The RegistryAccord project is organized across multiple repositories:

- [Protocol Specifications](https://github.com/RegistryAccord/registryaccord-specs)
- [Identity Service (Go)](https://github.com/RegistryAccord/registryaccord-identity-go)
- [Creator Data Vault (Go)](https://github.com/RegistryAccord/registryaccord-cdv-go)
- [Gateway Service (Go)](https://github.com/RegistryAccord/registryaccord-gateway-go)
- [Command Line Interface (TypeScript)](https://github.com/RegistryAccord/registryaccord-cli-ts)
- [Development Stack (Docker Compose)](https://github.com/RegistryAccord/registryaccord-devstack)
- [Conformance Suite](https://github.com/RegistryAccord/registryaccord-conformance)
- [Documentation Site](https://github.com/RegistryAccord/registryaccord-docs)
