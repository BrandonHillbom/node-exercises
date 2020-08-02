const hour = 13;
if (5 <= hour <= 12) {
    console.log("Good morning!");
}
else if (12 <= hour <= 18) {
    console.log("Good Afternoon!");
}
else if (18 <= hour <= 22) {
    console.log("Good Evening!");
}
else if (22 <= hour <= 24 || 0 <= hour <= 5) {
    console.log("Good Night!");
}