//Part 1: Refactoring Old Code
//Part 3: Feeling Loopy
const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

function parseCSV(csvString) {
    const rows = csvString.split('\n'); // Split the CSV string into rows using the newline character "\n"

    for (const row of rows) {
        const cells = row.split(','); // Split the row into cells using the comma ","
        const rowData = [];

        for (const cell of cells) {
            rowData.push(cell); // Store each cell in the rowData array
        }

        console.log(rowData); // Log the entire row data array
    }
}

console.log("\nExample String:");
parseCSV(csvString);


//Part 2: Expanding Functionality
const testString2 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// Split the CSV string into rows using the newline character "\n"
const dataArray2 = testString2.split('\n');

// Loop through each row and replace it with an array of cells
for (let i = 0; i < dataArray2.length; i++) {
    dataArray2[i] = dataArray2[i].split(',');
}

console.log(dataArray2);


//Part 3: Transforming Data
const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csvString1.split('\n');
const headings = rows.shift().split(',');

const objectsArray = [];
for (const row of rows) {
    const values = row.split(',');
    const object = {};
    for (let i = 0; i < headings.length; i++) {
        object[headings[i].toLowerCase()] = values[i];
    }
    objectsArray.push(object);
}

console.log(objectsArray);


// Part 4: Sorting and Manipulating Data

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Remove the last element
data.pop();

// Insert object at index 1
data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add an object to the end
data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Calculate the average age
let totalAge = 0;
for (const obj of data) {
    totalAge += parseInt(obj.age);
}

const averageAge = totalAge / data.length;

console.log("Updated Data:");
console.log(data);
console.log("Average Age:", averageAge);


//Part 5: Full Circle
let csvData = "";
for (const obj of data) {
    const row = Object.values(obj).join(',');
    csvData += row + '\n';
}

console.log("CSV Format:");
console.log(csvData);

