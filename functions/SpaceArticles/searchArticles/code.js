// Отправляем запрос, чтобы получить статьи по термину
return Http.get({
url: "https://api.spaceflightnewsapi.net/v4/articles/",
params: {
    // Передаем в API-запрос параметр query
    search: query,
    ordering: "-published_at"
},
headers: {}
})
