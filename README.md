# Маркетплейс
Проверка гипотезы о возможности создания сложного веб-приложения при помощи ИИ DeepSeek, без профессиональных знаний в области программирования


### Сборка и запуск
 `docker-compose up --build -d` - сборка и запуск\
`docker-compose build --no-cache client` - пересборка клиента\
 `docker-compose up -d` - перезапуск

### Заполнение тестовыми данными
из файла server/scripts/seed.js \
`docker-compose exec server npm run seed`

### Остановка
 `docker-compose down -v`

### Проверка
 `docker ps`\
 `curl http://locadocker-compose exec db psql -U marketplace -c "SELECT * FROM users;"`\
 `curl http://localhost:3000/api/products`

### Приложение доступно:
 Frontend: http://localhost:3001 \
 Backend API: http://localhost:3000/api 

 База данных:
- Хост: localhost
- Порт: 5432
- Пользователь: marketplace
- Пароль: password
- База: marketplace

### Полезные команды Docker
>**Остановка контейнеров**\
docker-compose down
>
>**Перезапуск контейнеров**\
docker-compose restart
>
>**Просмотр работающих контейнеров**\
>docker ps
>
>**Очистка системы Docker**\
>docker system prune -a