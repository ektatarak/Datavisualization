
const rawData = [
    { date: '4/10/2022', age: '15-25', gender: 'male', A: 789, B: 527, C: 21, D: 575, E: 672, F: 597},
    { date: '4/10/2022', age: '>25', gender: 'male', A: 413, B: 191, C: 190, D: 687, E: 160, F: 843 },
    { date: '4/10/2022', age: '15-25', gender: 'female', A: 324, B: 615, C: 910, D: 8, E: 230, F: 877 },
    { date: '4/10/2022', age: '>25', gender: 'female', A: 367, B: 263, C: 545, D: 214, E: 822, F: 843 },
    { date: '5/10/2022', age: '15-25', gender: 'male', A: 803, B: 929, C: 861, D: 144, E: 745, F: 580 },
    { date: '5/10/2022', age: '>25', gender: 'male', A: 903, B: 194, C: 765, D: 574, E: 402, F: 2 },
    { date: '5/10/2022', age: '15-25', gender: 'female', A: 506, B: 112, C: 312, D: 46, E: 320, F: 467 },
    { date: '5/10/2022', age: '>25', gender: 'female', A: 234, B: 529, C: 410, D: 115, E: 180, F: 121 },
    { date: '6/10/2022', age: '15-25', gender: 'male', A: 367, B: 849, C: 56, D: 453, E: 22, F: 320 },
    { date: '6/10/2022', age: '>25', gender: 'male', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '6/10/2022', age: '15-25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '6/10/2022', age: '>25', gender: 'female', A: 324, B: 615, C: 910, D: 8, E: 230, F: 877 },
    { date: '7/10/2022', age: '15-25', gender: 'male', A: 367, B: 263, C: 545, D: 214, E: 822, F: 843 },
    { date: '7/10/2022', age: '>25', gender: 'male', A: 803, B: 929, C: 861, D: 144, E: 745, F: 580 },
    { date: '7/10/2022', age: '15-25', gender: 'female', A: 903, B: 194, C: 765, D: 574, E: 402, F: 2 },
    { date: '7/10/2022', age: '>25', gender: 'female', A: 506, B: 112, C: 312, D: 46, E: 320, F: 467 },
    { date: '8/10/2022', age: '15-25', gender: 'male', A: 234, B: 529, C: 410, D: 115, E: 180, F: 121 },
    { date: '8/10/2022', age: '>25', gender: 'male', A: 367, B: 849, C: 56, D: 453, E: 22, F: 320 },
    { date: '8/10/2022', age: '15-25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '8/10/2022', age: '>25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '9/10/2022', age: '15-25', gender: 'male', A: 324, B: 615, C: 910, D: 8, E: 230, F: 877 },
    { date: '9/10/2022', age: '>25', gender: 'male', A: 367, B: 263, C: 545, D: 214, E: 822, F: 843 },
    { date: '9/10/2022', age: '15-25', gender: 'female', A: 803, B: 929, C: 861, D: 144, E: 745, F: 580 },
    { date: '9/10/2022', age: '>25', gender: 'female', A: 903, B: 194, C: 765, D: 574, E: 402, F: 2 },
    { date: '10/10/2022', age: '15-25', gender: 'male', A: 506, B: 112, C: 312, D: 46, E: 320, F: 467 },
    { date: '10/10/2022', age: '>25', gender: 'male', A: 234, B: 529, C: 410, D: 115, E: 180, F: 121 },
    { date: '10/10/2022', age: '15-25', gender: 'female', A: 367, B: 849, C: 56, D: 453, E: 22, F: 320 },
    { date: '10/10/2022', age: '>25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '11/10/2022', age: '15-25', gender: 'male', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '11/10/2022', age: '>25', gender: 'male', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '11/10/2022', age: '15-25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '11/10/2022', age: '>25', gender: 'female', A: 113, B: 438, C: 222, D: 154, E: 655, F: 923 },
    { date: '12/10/2022', age: '15-25', gender: 'male', A: 376, B: 901, C: 956, D: 753, E: 621, F: 105 },
    { date: '12/10/2022', age: '>25', gender: 'male', A: 685, B: 211, C: 23, D: 387, E: 70, F: 998 },
    { date: '12/10/2022', age: '15-25', gender: 'female', A: 500, B: 171, C: 511, D: 803, E: 645, F: 362 },
    { date: '12/10/2022', age: '>25', gender: 'female', A: 12, B: 263, C: 956, D: 177, E: 78, F: 347 },
    { date: '13/10/2022', age: '15-25', gender: 'male', A: 255, B: 110, C: 220, D: 805, E: 586, F: 90 },
    { date: '13/10/2022', age: '>25', gender: 'male', A: 393, B: 566, C: 746, D: 613, E: 667, F: 95 },
    { date: '13/10/2022', age: '15-25', gender: 'female', A: 272, B: 949, C: 845, D: 917, E: 672, F: 497 },
    { date: '13/10/2022', age: '>25', gender: 'female', A: 576, B: 414, C: 269, D: 862, E: 833, F: 412 },
    { date: '14/10/2022', age: '15-25', gender: 'male', A: 408, B: 940, C: 602, D: 413, E: 393, F: 418 },
    { date: '14/10/2022', age: '>25', gender: 'male', A: 733, B: 336, C: 648, D: 601, E: 968, F: 376 },
    { date: '14/10/2022', age: '15-25', gender: 'female', A: 951, B: 738, C: 792, D: 567, E: 978, F: 456 },
    { date: '14/10/2022', age: '>25', gender: 'female', A: 422, B: 600, C: 716, D: 945, E: 865, F: 820 },
    { date: '15/10/2022', age: '15-25', gender: 'male', A: 140, B: 989, C: 982, D: 688, E: 903, F: 551 },
    { date: '15/10/2022', age: '>25', gender: 'male', A: 304, B: 510, C: 97, D: 421, E: 872, F: 362 },
    { date: '15/10/2022', age: '15-25', gender: 'female', A: 670, B: 474, C: 699, D: 60, E: 431, F: 88 },
    { date: '15/10/2022', age: '>25', gender: 'female', A: 735, B: 829, C: 951, D: 35, E: 313, F: 781 },
    { date: '16/10/2022', age: '15-25', gender: 'male', A: 834, B: 584, C: 133, D: 933, E: 324, F: 191 },
    { date: '16/10/2022', age: '>25', gender: 'male', A: 264, B: 415, C: 384, D: 49, E: 920, F: 837 },
    { date: '16/10/2022', age: '15-25', gender: 'female', A: 823, B: 337, C: 398, D: 485, E: 222, F: 935 },
    { date: '16/10/2022', age: '>25', gender: 'female', A: 598, B: 543, C: 435, D: 95, E: 743, F: 894 }, 
    { date: '17/10/2022', age: '15-25', gender: 'male', A: 526, B: 638, C: 383, D: 299, E: 328, F: 18 },
    { date: '17/10/2022', age: '>25', gender: 'male', A: 914, B: 898, C: 94, D: 821, E: 516, F: 815 },
    { date: '17/10/2022', age: '15-25', gender: 'female', A: 227, B: 105, C: 842, D: 85, E: 288, F: 361 },
    { date: '17/10/2022', age: '>25', gender: 'female', A: 535, B: 160, C: 774, D: 279, E: 614, F: 286 },
    { date: '18/10/2022', age: '15-25', gender: 'male', A: 685, B: 48, C: 610, D: 386, E: 669, F: 778 },
    { date: '18/10/2022', age: '>25', gender: 'male', A: 795, B: 754, C: 398, D: 635, E: 156, F: 412 },
    { date: '18/10/2022', age: '15-25', gender: 'female', A: 369, B: 163, C: 557, D: 422, E: 557, F: 863 },
    { date: '18/10/2022', age: '>25', gender: 'female', A: 730, B: 126, C: 877, D: 650, E: 636, F: 871 },
    { date: '19/10/2022', age: '15-25', gender: 'male', A: 423, B: 333, C: 934, D: 818, E: 258, F: 636 },
    { date: '19/10/2022', age: '>25', gender: 'male', A: 795, B: 187, C: 404, D: 558, E: 889, F: 609 },
    { date: '19/10/2022', age: '15-25', gender: 'female', A: 570, B: 654, C: 145, D: 452, E: 158, F: 826 },
    { date: '19/10/2022', age: '>25', gender: 'female', A: 515, B: 747, C: 997, D: 687, E: 964, F: 830 }



    // Add more data for both genders as required
];

let barChart, lineChart;

function renderBarChart(data) {
    const ctx = document.getElementById('workChart').getContext('2d');
    if (barChart) barChart.destroy(); // Destroy existing chart
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data[0]).slice(3), // Dynamic labels
            datasets: data.map((item, index) => ({
                label: `Dataset ${index}`,
                data: Object.values(item).slice(3),
                backgroundColor: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.6)`,
            })),
        },
        options: { responsive: true },
    });
}

function renderLineChart(data) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    if (lineChart) lineChart.destroy(); // Destroy existing chart
    lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data[0]).slice(3), // Dynamic labels
            datasets: data.map((item, index) => ({
                label: `Dataset ${index}`,
                data: Object.values(item).slice(3),
                borderColor: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 1)`,
                fill: false,
            })),
        },
        options: { responsive: true },
    });
}

function applyFilters() {
    const date = document.getElementById('date').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    let filteredData = rawData.filter(item => {
        return (date === 'all' || item.date === date) &&
               (age === 'all' || item.age === age) &&
               (gender === 'all' || item.gender === gender);
    });

    renderBarChart(filteredData);
    renderLineChart(filteredData);
}

// Initialize with all data
applyFilters();
