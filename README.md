# HackYeah 2019
Project for HackYeah 2019 - Team K3MP-B

## Members
* Mathias Åsberg - [@Mindgames](https://github.com/Mindgames)
* Maciej Baranek - [@MAC3R](https://github.com/MAC3R)
* Marta Basznianin - [@Mbasz](https://github.com/mbasz)
* Koppány Kondricz - [@kondricz](https://github.com/kondricz)
* Paweł Lubczyński - [@lubek1983](https://github.com/lubek1983)
* Bence Szegvári - [@bencesz](https://github.com/bencesz)

## Technology
### Frontend
* Angular

### Backend

##### Quiz provider microservice

- Express JS
- Node JS
- Typescript (optional)

Backend service which handles providing quiz question, and the interactions around them. Main responsabilities:

1. Provide a list of quiz questions when game starts based on categories and other query parameters

2. Handle incoming POST requests from users, when they are marking answers in questions (1v1 VS aggregate)

3. Replying to users if they have had the correct answers. Upon missed / hit answers trigger PUBSUB or google functions which are updating other, connected databases.

4. Handling a game close.






### Other
* Google Cloud Platform
* GitHub
