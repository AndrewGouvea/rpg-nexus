# Usa a imagem oficial do Node.js versão 18
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia apenas os arquivos essenciais primeiro para otimizar o cache do Docker
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do backend para o contêiner
COPY . .

# Compila o código do NestJS
RUN npm run build

# Define a porta que o NestJS usará
EXPOSE 3001

# Comando para rodar o backend
CMD ["node", "dist/main.js"]
