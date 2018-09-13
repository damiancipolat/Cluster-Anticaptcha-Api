# Anticatpcha Api platform
This project is an Api Rest platform to use the https://anti-captcha.com services.

![N|Solid](https://github.com/damiancipolat/Cluster-Anticaptcha-Api/blob/master/doc/anticaptcha_hero.png?raw=true)


Actually, there are only two endpoints:
- **Image captcha solver**: 

  Receive as POST body parameter a base64 coded image and return the captcha text.

- **Recaptcha solver**: 

   Receive an URL and the recaptcha.com token from a website and return the captcha text.

### Feature:
The most important feature is that the server uses the Node.js 'cluster module', to use in each anticaptcha request into one worker process.

### Configuration:
To get a proxy/port url you can get one from internet. I have used one proxy from this website: https://free-proxy-list.net/anonymous-proxy.html, and you can check wich proxy is online use this tool: http://www.checker.freeproxy.ru/checker/

```sh
{
  "server":{
    "ip"   : "127.0.0.1",
    "port" : 9080
  },
  "workers" : {
    "number"    : 4,
    "planifier" : "random"
  },
  "library":{
  	"anticaptcha":{
  		"key"       : "ANTICAPTCHA KEY",
      "proxyUrl"  : "179.185.199.195",
      "proxyPort" : 8080
  	}
  }
}
```
