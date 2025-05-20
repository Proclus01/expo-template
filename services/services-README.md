Nothing in services should import react at all. 

fetch URLs are in ~/constants/urls or in .env

Services exports context, data to ~/features/ to be consumed by the UI in /app from /features.

