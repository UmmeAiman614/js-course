const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby", 
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut of ${myObject[key]}`);
}

//for in on array
const programming= ["js", "python", "cpp", "rb"]
for (const key in programming) {
    console.log(key);
}

//cant do forin iteration on map