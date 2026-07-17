# Frontend of Money Saver

This repository contains the frontend implementation for the Money Saver project.

It was generated using [Angular CLI](https://github.com/angular/angular-cli) version **21.2.19**.

## Setup

This project uses a `git submodule` for the shared API types (`src/app/shared`), so clone with submodules:

```bash
git clone --recurse-submodules git@github.com:idenisovs/money-saver-frontend.git
```

If you already cloned without `--recurse-submodules`, initialize the submodule:

```bash
git submodule update --init --recursive
```

Then install the dependencies:

```bash
npm install
```

## Run

This assumes that the [backend](https://github.com/idenisovs/money-saver-backend) is already **up and running**.

### Development

For the **development** version, just run the `npm start` command, then open http://localhost:4200/.

### Persistent

For the **persistent** version of the frontend, first build the files with the `npm run build` command.

Then, copy the contents of the `dist/money-saver/browser` directory to the `backend/target/web` directory.

At this stage you should see the UI at http://localhost:9001/ (by default).

The default login is `user1` and password is `demo1`.
