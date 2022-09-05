# SERVE-FILES

Servidor para guardar los backups y servirlos por un puerto específico

## Instalation

clonar el repositorio

```bash
git clone https://github.com/D4ITON/serve-files
```

Instalar los paquetes:
`yarn install` o `npm install`

## Instalation with Docker

creamos el volumen
docker volume create storage

````bash
docker run -dp 3000:3000 --name serve-files -v $(pwd)/storage:/app/storage -e NODE_ENV=production dalthonmh/serve-files

```bash
docker run -dp 3000:3000 dalthonmh/serve-files
````

## Usage

hacer consultas http a la ruta:

```bash
curl "http://ip:port/backup?file=backup.zip --output backup.zip
```

<i>@dalthonmh</i>
