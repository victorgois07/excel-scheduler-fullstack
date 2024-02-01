FROM php:7.4-fpm
COPY --from=composer /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
COPY . .
RUN composer install
