# Setup Websites for Sabrina Rinaldi

Open your preferred terminal application. Create your project directory and move into it.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/sabrinarinaldi2.git .
checkout`

Install all the Node packages.

`npm install`

## [https://www.sabrinarinaldi.com/](https://www.sabrinarinaldi.com/)

Start Eleventy.

`npm run dev:en`

Open your browser and visit the local copy of the site.

[http://localhost:8080/](http://localhost:8080/)

For the Italian language site, return to your terminal and press control-c to stop the current site, then start the Italian site.

## [https://www.sabrinarinaldi.it/](https://www.sabrinarinaldi.it/)

`npm run dev:it`

Open your browser and visit the local copy of the site.

[http://localhost:8081/](http://localhost:8081/)


## Build HTML Source Files

To generate the HTML source files for both sites in the `_site/` directory.

`npm run build`

## Deploy HTML to Host via FTP

To generate the HTML source files for both sites and ftp them up to the web host.

`npm run deploy`
