// Получаем дату и время, которые были день назад в формате ISO
var oneDayAgoISO = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

// Отправляем запрос, чтобы получить статьи, опубликованные за последний день
return Http.get({
url: "https://api.spaceflightnewsapi.net/v4/articles/",
params: {
    // Передаем в API-запрос параметр query
    search: query,
    ordering: "-published_at"
},
headers: {}
})