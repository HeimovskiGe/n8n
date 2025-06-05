# n8n template

This template deploys a self-hosted version of [n8n](https://n8n.io/). Internally it uses a PostgreSQL database to store the data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/EfkjX2?referralCode=lJoDnn)

## ✨ Features

- n8n
- PostgreSQL

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the required environment variables
- Deploy

## 📝 Notes

- Source image: https://hub.docker.com/r/n8nio/n8n
- Docs: https://docs.n8n.io/

## Fill spreadsheet example

This repository now includes a simple Node.js script to create and populate an Excel file. After installing dependencies with `npm install`, run `npm run fill` to generate `dados.xlsx` containing example data.

## MEI NFS-e integration guide

See [NFS_e_guide.md](./NFS_e_guide.md) for a quick reference on integrating a React Native app with the Emissor Nacional de NFS-e using Supabase and Axios.
