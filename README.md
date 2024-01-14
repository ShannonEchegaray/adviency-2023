# This is the Adviency 2023

This is an application where we can register gifts to give in a nearly future.

## Deploy

[Deploy en FL0](https://adviency-2023-dev-cqnx.2.us-1.fl0.io)

## Instalation

Use your **Package Manager** to install the dependencies

## Usage

Use the following scripts to run the application

```bash
# Run your application for prod
npm run start

# Run your application in dev mode
npm run dev
```

## Docker

Create the image with the following command in the root project

```bash
docker build --tag adviency-2023 .
```

Then, run the image

```bash
docker run -p 8080:3000 adviency-2023
```