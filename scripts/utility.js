function generateNums() {
    var input = document.getElementById('num-input').innerText;
    var max = parseInt(input) || 5;
    var num1 = Math.floor(Math.random() * max) + 1;
    var num2;
    do {
        num2 = Math.floor(Math.random() * max) + 1;
    } while(num1 === num2);
    document.getElementById('num-output1').innerText = num1;
    document.getElementById('num-output2').innerText = num2;
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

function getValFromId(id) {
    let element = document.getElementById(id);
    return element.innerText;
}

async function readJsonFromFile(jsonFile, tags) {
    return fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // If no tags are specified, return all data
            if (!tags || tags.length === 0) {
                return data;
            }
            // Otherwise, filter data to only include elements with at least one of the specified tags
            return data.filter(item => item.tags.some(tag => tags.includes(tag)));
        })
        .catch(error => console.error('Error:', error));
}

function blackoutElement(id) {
    let element = document.getElementById(id);
    var originalColor = element.style.backgroundColor;
    element.style.backgroundColor = 'var(--black)';
    setTimeout(function() {
        element.style.backgroundColor = originalColor;
    }, 200);
}

function getSeason() {
    const today = new Date();
    const month = today.getMonth();

    if (month < 3 || month === 12) {
        return "winter";
    } else if (month < 5) {
        return "spring";
    } else if (month < 8) {
        return "summer";
    } else {
        return "autumn";
    }
}

function getRandomElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}