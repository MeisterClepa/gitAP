  const response = await axios.default.get(url);
    Reactions.sendText({
    text: JSON.stringify(response.data, null, 2)
  });
  return response.data;
