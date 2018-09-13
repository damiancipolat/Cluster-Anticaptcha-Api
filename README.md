# Anticatpcha Api platform
This project is an Api Rest platform to use the https://anti-captcha.com services.

Actually, there are only two endpoints:
- **Image captcha solver**: 
  Receive as POST body parameter a base64 coded image and return the captcha text.

- **Recaptcha solver**: 

   Receive an URL and the recaptcha.com token from a website and return the captcha text.
