import Chart from "chart.js/auto";

// BAR-CHART REPRESENTATION
const getData = async function () {
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  const data = await response.json();
  console.log(data);

  length = data.data.length;
  console.log(length);

  labels = [];
  values = [];
  for (i = 0; i < length; i++) {
    labels.push(data.data[i].Year);
    values.push(data.data[i].Population);
  }

  // const yearCollection = data.data.map((cur) => {
  //   return cur.Year;
  // });
  // console.log(yearCollection);

  const barColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "purple",
  ];

  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "The United States Population (in millions) in a Bar Chart",
          backgroundColor: barColors,
          data: values,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "US Population",
      },
    },
  });
};
getData();

// PIE-CHART REPRESENTATION
const xValues = ["Canada", "Russia", "London", "Germany", "Australia", "Italy"];
const yValues = [45, 22, 70, 90, 10, 35];
const pieColors = ["red", "orange", "yellow", "green", "blue", "indigo"];

new Chart(document.getElementById("pie-chart"), {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "A Pie-Chart Representation of Data",
        backgroundColor: pieColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});

// DOUGHNUT REPRESENTATION
new Chart(document.getElementById("doughnut"), {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "A Pie-Chart Representation of Data",
        backgroundColor: pieColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});

// LINE-CHART REPRESENTATION
const x2Values = [200, 400, 600, 800, 1000, 1200, 1400, 1600];
new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: x2Values,
    datasets: [
      {
        data: [400, 1000, 1500, 600, 1100, 1350, 2000, 1400],
        label: "Farming",
        borderColor: "pink",
        fill: false,
      },
      {
        data: [500, 1250, 2000, 900, 1450, 200, 1500, 700],
        label: "Medicine",
        borderColor: "blue",
        fill: false,
      },
      {
        data: [1700, 850, 700, 970, 1480, 1210, 1000, 1800],
        label: "Programming",
        borderColor: "brown",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

// LINEAR-GRAPH REPRESENTATION
const xLinear = [];
const yLinear = [];

const dataGeneration = function (value, i1, i2, cur = 1) {
  for (let x = i1; x <= i2; x += cur) {
    yLinear.push(eval(value));
    xLinear.push(x);
    console.log(value);
  }
};
dataGeneration("Math.cos(x)", 0, 20, 1);

new Chart(document.getElementById("linear-graph"), {
  type: "line",
  data: {
    labels: xLinear,
    datasets: [
      {
        pointRadius: 1,
        borderColor: "red",
        label: "Math.cos(x)",
        fill: false,
        data: yLinear,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Math.cos()",
      fontSize: 16,
    },
  },
});
