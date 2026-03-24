const URL = "<your amo crm URL>/api/v4/companies"
const TOKEN = "<your amo crm access token>"

return Http.post({
    url: URL,
    params: {},
    headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
    },
    body: [ 
        { 
            "name": name,
            "_embedded": { "tags": [{ "name": "New client" }] }
        }
    ]
})
.then(function (response) {
    return response;
})
.catch(function (err) {
    return "Error adding company to CRM " + err;
});