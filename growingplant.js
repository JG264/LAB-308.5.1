const PI = 3.1415;

function calculateArea(radius) {
    return PI * radius * radius;
}

function plantGrowth(initialPlants, weeks) {
    const maxCapacity = calculateArea(5) / 0.8;
    const plantCount = initialPlants * Math.pow(2, weeks);

    if (plantCount > 0.8 * maxCapacity) {
        return "Prune";
    } else if (plantCount >= 0.5 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
        return "Monitor";
    } else {
        return "Plant";
    }
}


function plantGrowth(initialPlants, weeks) {
    const maxCapacity = calculateArea(5) / 0.8;
    const plantCount = initialPlants * Math.pow(2, weeks);

    if (plantCount > 0.8 * maxCapacity) {
        return "Prune";
    } else if (plantCount >= 0.5 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
        return "Monitor";
    } else {
        return "Plant";
    }
}

function calculateExpandedGarden(initialPlants, weeks) {
    const maxCapacity = calculateArea(5) / 0.8;
    const finalPlantCount = initialPlants * Math.pow(2, weeks);

    if (finalPlantCount > 0.8 * maxCapacity) {
        const additionalSpaceRequired = (finalPlantCount - 0.8 * maxCapacity) * 0.8;
        const expandedRadius = Math.sqrt((0.8 * maxCapacity + additionalSpaceRequired) / PI);
        return [additionalSpaceRequired, expandedRadius];
    } else {
        return [0, 5];  // No additional space required if pruning is done
    }
}

function main() {
    try {
        for (let weeks of [1, 2, 3]) {
            const result = plantGrowth(20, weeks);
            console.log(`After ${weeks} weeks: ${result}`);
        }

        const [additionalSpace, expandedRadius] = calculateExpandedGarden(100, 10);
        console.log(`\nAdditional space required after 10 weeks with 100 plants: ${additionalSpace} square meters`);
        console.log(`Radius of the expanded garden: ${expandedRadius} meters`);

        // Simulate scientists not listening to recommendations
        const initialPlants = 100;
        const finalPlantCount = initialPlants * Math.pow(2, 10);  // 10 weeks of growth
        if (finalPlantCount > calculateArea(5) / 0.8) {
            throw new Error("Error: Insufficient space to accommodate the plant growth.");
        }
    } catch (error) {
        console.error(error.message);
    }
}

main();
