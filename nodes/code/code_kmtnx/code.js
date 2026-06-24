const end = Date.now() + 4000;

while (Date.now() < end) {
    // busy wait
}

return true;