const end = Date.now() + 3000;

while (Date.now() < end) {
    // busy wait
}

return true;