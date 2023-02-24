## Minify-URL

###### Figma Design Link: [Figma Design Screen](https://www.figma.com/file/2o3RGdQC9JmHKjbPdQmQ1R/Minifying-URL?node-id=0%3A1&t=JUnkQU7cgpLtjG9p-0)

###### Node.js Application
This repository contains the source code for a Node.js application.

###### Installation
To install this application, follow these steps:

```
Clone the repository to your local machine.
Run *npm install* to install the required dependencies.
```

###### Usage
To start the application, run npm start from the command line. The application will start and can be accessed by visiting http://localhost:3000 in your web browser.

A sample client side code is in the following repository
> [ravitejalakkoju/minify-url-client](https://www.github.com/ravitejalakkoju/minify-url-client/)

###### API Endpoints

The base URL for the API is [https://mini7fy.herokuapp.com/api/url].

###### Endpoints
This API provides the following endpoints:

POST /:code: [Redirects to the long url]

POST /shorten: [Create a shortcode for a long URL.]

Request Payload:
```
{
    "url": "https://www.example.com/this-is-a-long-url-that-needs-to-be-shortened"
}
```

###### Request and Response Formats
This API accepts and returns data in JSON format. Requests to the /shorten endpoint should include a Content-Type header with a value of application/json, and responses will include a Content-Type header with the same value.
