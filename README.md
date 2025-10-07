# RegistryAccord Documentation

This repository contains the source code for the official documentation website for the RegistryAccord protocol, available at **[https://www.registryaccord.com](https://www.google.com/search?q=https://www.registryaccord.com)**.

-----

### Overview

This site serves as the public home for the RegistryAccord project. It hosts our litepaper, architectural decision records (ADRs), and other key project documents.

The site is built using **Nextra**, a documentation generator built on top of Next.js and React.

### Running the Site Locally

To run a local copy of the documentation site for development or preview purposes, follow these steps.

**Prerequisites:**

  * Node.js (version 18 or higher)
  * pnpm (recommended), npm, or yarn

**1. Clone the repository:**

```bash
git clone https://github.com/registryaccord/registryaccord-docs.git
cd registryaccord-docs
```

**2. Install dependencies:**

```bash
pnpm install
```

**3. Run the development server:**

```bash
pnpm dev
```

**4. View the site:**
Open your browser and navigate to **http://localhost:3000**. The site will automatically reload as you make changes to the source files.

-----

### Contributing to the Documentation

We welcome contributions to improve our documentation\! Fixing typos, clarifying confusing sentences, or adding examples are all valuable ways to help the project.

Our general contribution process is outlined in the main protocol [CONTRIBUTING.md file](https://github.com/registryaccord/registryaccord-specs/blob/main/CONTRIBUTING.md).

All documentation content is written in Markdown (`.mdx`) and located in the `/pages` directory of this repository. Simply find the file you wish to edit and submit a pull request with your changes.

### Deployment

This site is automatically deployed via **Vercel**. Every merge to the `main` branch will trigger a new production deployment.

### License

The content and code in this repository are licensed under the MIT License. See the `LICENSE` file for more details.
