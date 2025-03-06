# Usa a imagem do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do package.json e package-lock.json
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Compila o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta
EXPOSE 3001

# Inicia o servidor
CMD ["node", "dist/main.js"]
