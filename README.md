# SERVE-FILES

Servidor para guardar los backups y servirlos por un puerto específico

## Instalation

clonar el repositorio

`git clone https://github.com/D4ITON/serve-files/`

Instalar los paquetes:
`yarn install` o `npm install`

## Instalation with Docker

`docker run -dp 3000:3000 dalthonmh/serve-files`

## Usage

hacer consultas http a la ruta:
`curl "http://ip:port/backup?file=backup.zip --output backup.zip`

<i>@dalthonmh</i>
