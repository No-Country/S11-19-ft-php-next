FROM richarvey/nginx-php-fpm:1.7.2

FROM php:8.1-fpm-alpine

RUN curl -sS [https://getcomposer.org/installer](https://getcomposer.org/installer) | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer self-update --2

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]