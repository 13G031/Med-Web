# Andiyuan Medical Website

Chinese-first product and company website for 杨凌安帝源生物科技有限公司. The site presents the Emergency Hemostasis Patch, PVF Medical Sponge, regulatory information, clinical evidence, procurement history, academic support, and contact details.

## Technology

- React 19
- Vite 7
- Phosphor Icons
- Native CSS

## Requirements

- Node.js 20.19 or newer, or Node.js 22.12 or newer
- npm

## Local development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, normally:

```text
http://127.0.0.1:5173/
```

## Production build

Create the static production files:

```bash
npm run build
```

The generated website is written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
Med-Web/
├── public/images/          Product, company, and procedure images
├── src/App.jsx             Page content, product data, and React components
├── src/style.css           Main website styles
├── src/code-groups.css     Product codes, procedures, and contact styles
├── src/evidence-summary.css
├── src/main.jsx            React entry point
├── PRODUCT.md              Product and audience context
├── DESIGN.md               Design system and visual rules
├── index.html
└── package.json
```

## Editing content

Most company, product, clinical, and procurement content is stored as data near the top of `src/App.jsx`.

Important sections include:

- `hemostasisDetails` for Emergency Hemostasis Patch information
- `pvfDetails` for PVF Medical Sponge information
- `animalEvidence` and `humanClinicalEvidence` for clinical evidence
- `procurement` for procurement history
- `navItems` for primary navigation

Store website images in `public/images/` and reference them from React with paths beginning with `/images/`.

The Emergency Hemostasis Patch procedure currently contains:

- `Ⅰ型操作步骤` with the three-step procedure image
- `Ⅱ型操作步骤` with two procedure images and the same descriptive steps

The Type II polished second-step asset is:

```text
public/images/hemostasis-type-ii-step-2.png
```

## Forms

The contact and question forms currently validate input and display a success state in the browser. They do not send messages to a server or email address. A backend endpoint or form service must be connected before treating submissions as delivered.

## AWS Lightsail deployment

The current server repository location is expected to be:

```text
/home/ubuntu/med-web
```

Upload changes through Git or Termius SFTP. Do not upload `node_modules/`.

Build on the Lightsail server:

```bash
cd /home/ubuntu/med-web
npm ci
npm run build
```

If Nginx serves the repository's `dist/` directory directly, reload Nginx after the build:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

If Nginx serves `/var/www/html`, copy the build output there first:

```bash
sudo rsync -a dist/ /var/www/html/
sudo nginx -t
sudo systemctl reload nginx
```

To check the active Nginx document root:

```bash
sudo nginx -T | grep -n "root "
```

The production server should expose only ports 22, 80, and 443 as required. Use a static Lightsail IP, point the domain's DNS records to it, and configure HTTPS before public launch.

## Deployment checklist

1. Run `npm ci`.
2. Run `npm run build`.
3. Verify the production site with `npm run preview`.
4. Upload or pull the latest source and image files on Lightsail.
5. Build the site on the server.
6. Confirm the Nginx document root contains the new build.
7. Run `sudo nginx -t`.
8. Reload Nginx.
9. Verify the domain over HTTPS on desktop and mobile.

## Content accuracy

This is a medical-device information website. Do not add or change registration details, clinical results, certifications, procurement claims, product classifications, or safety statements without an approved source.
