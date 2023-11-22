# API

## Technologies
[![PHP](https://img.shields.io/badge/PHP-8.2-7A86B8?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/) [![Laravel](https://img.shields.io/badge/Laravel-10.30-F9322C?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/) [![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) [![Fly.io](https://img.shields.io/badge/Fly.io-8F32E8?style=for-the-badge)](https://fly.io/) [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/) 

## Installation

Before you begin, make sure you have Docker installed on your operating system. You can download it from [Docker](https://www.docker.com/)'s official website.

### Start with laravel sail

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/No-Country/S11-19-ft-php-next.git
    ```

2. Navigate to the project folder:
    ```bash
    cd server
    ```

3. Add the .env file with the necessary environments:
    - `DB_CONNECTION` Database type, e.g. mysql
    - `DB_HOST` Database Host, e.g. mysql
    - `DB_PORT` Connection Port, e.g. 3306
    - `DB_DATABASE` Database name, e.g. example_app
    - `DB_USERNAME` User, e.g. sail
    - `DB_PASSWORD` Password, e.g. password

4. Installing composer dependencies for existing applications:
    ```bash
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php82-composer:latest \
        composer install --ignore-platform-reqs
    ```

5. Launch docker containers in the background:
    ```bash
    sail up -d
    ```

6. Generate a key for the application:
    ```bash
    sail artisan key:generate
    ```

7. Install node dependencies:
    ```bash
    sail npm i
    ```

8. Insert migrations:
    ```bash
    sail artisan migrate --seed
    ```

## Endpoints

**User**

| TYPE   | DETAIL  | ROUTE                              | SEND                                      |
| ------ | ------- | ---------------------------------- | ----------------------------------------- |
| POST  | Login | http://localhost:PORT/api/login      | body: email, password user               |
| POST  | Register | http://localhost:PORT/api/register | body: accept all user schema            |
| POST  | Logout | http://localhost:PORT/api/logout     | headers:token      |
| GET   | Get user | http://localhost:PORT/api/profile/user  | headers:token |
| PUT | Update | http://localhost:PORT/api/profile/update  | body: accept all user schema, headers:token  |
| PUT | Update | http://localhost:PORT/api/profile/update/password  | body: password, headers:token |

**Plant**

| TYPE   | DETAIL  | ROUTE                              | SEND                                      |
| ------ | ------- | ---------------------------------- | ----------------------------------------- |
| POST | Create | http://localhost:PORT/api/plants/create | body: accept all plant schema, headers:token |
| GET  | Get plant | http://localhost:PORT/api/plants | headers:token        |
| GET  | Get One | http://localhost:PORT/api/plants/{id}  | params: id, headers:token |
| PUT  | Update | http://localhost:PORT/api/plants/update/{id} | params: id, body: accept all plant schema, headers:token |
| DELETE | Delete | http://localhost:PORT/api/plants/delete/{id} | params: id, headers:token |

**Notification**

| TYPE   | DETAIL  | ROUTE                              | SEND                                      |
| ------ | ------- | ---------------------------------- | ----------------------------------------- |
| GET | Get all | http://localhost:PORT/api/notifications  | headers:token |
| GET | Get all | http://localhost:PORT/api/notifications/channel | headers:token  |
| PUT | Update | http://localhost:PORT/api/notifications/{id} | params: id, body: accept all plant schema, headers:token |

**Reminder**

| TYPE   | DETAIL  | ROUTE                              | SEND                                      |
| ------ | ------- | ---------------------------------- | ----------------------------------------- |
| POST | Create | http://localhost:PORT/api/reminder    | body: accept all reminder schema, headers:token   |
| GET | Get all | http://localhost:PORT/api/reminder | headers:token |
| GET | Get One | http://localhost:PORT/api/reminder/{id}  | params: id, headers:token |
| PUT | Update | http://localhost:PORT/api/reminder/{id} | params: id, body: accept all reminder Schema, headers:token |
| DELETE | Delete | http://localhost:PORT/api/reminder/{id}  | params: id, headers:token |