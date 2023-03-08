# Título del proyecto
podcast-app

## Descripción del proyecto
Este proyecto es una aplicación web que utiliza la API de ITUNES para mostrar los 100 mejores podcasts de la actualidad. Al iniciar la aplicación, se muestran los 100 podcasts y cuando se hace click en la imagen de cada podcast, se dirige a una página creada dinámicamente que muestra la información del podcast y los episodios relacionados. La url será generada siempre a partir de la id del própio podcast.

 Al hacer clic en los episodios, se genera otra página dinámica donde se puede reproducir el episodio y ver más información del podcast. La url será generada siempre a partir de la id del própio episodio.

## Características principales
Utiliza la API de ITUNES para obtener información de los podcasts y episodios
Muestra los 100 mejores podcasts de la actualidad.
Página dinámica para cada podcast que muestra información detallada y episodios relacionados
Página dinámica para cada episodio que permite la reproducción y muestra información detallada del podcast

## Tecnologías utilizadas
NextJs 13
ReactJs 18
Tailwindcss
API de ITUNES 
[toppodcasts: https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1320/json]
[episodeInfo: https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20]

## Instalación
Para ejecutar el proyecto en su computadora, siga los siguientes pasos:

Clone este repositorio utilizando el siguiente comando:`

````
git clone https://github.com/danielmateu/podcast-app.git`
````

Ingrese al directorio del proyecto:
```
cd podcasts-app
```

Instale las dependencias del proyecto:
````
npm install
````

Inicie la aplicación:
````
npm run dev
````