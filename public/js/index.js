const KelembabanColor = "#2ED573";
const KecepatanColor = "#1E90FF";
const BBColor = "#3742FA";
const SuhuColor = "#FF4757";
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "10.00 WIB",
      "11.00 WIB",
      "12.00 WIB",
      "13.00 WIB",
      "14.00 WIB",
      "15.00 WIB",
    ],
    datasets: [
      {
        label: "Kelembaban",
        data: [6, 5, 7, 6, 7, 6],
        backgroundColor: [
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
        ],
        borderColor: [
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
          KelembabanColor,
        ],
        borderWidth: 1,
      },
      {
        label: "Kecepatan Rotasi",
        data: [2, 1, 1.5, 2, 1, 1.25],
        backgroundColor: [
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
        ],
        borderColor: [
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
          KecepatanColor,
        ],
        borderWidth: 1,
      },
      {
        label: "Bahan Bakar",
        data: [10, 13, 10.78, 11, 11.5, 11.25],
        backgroundColor: [BBColor, BBColor, BBColor, BBColor, BBColor, BBColor],
        borderColor: [BBColor, BBColor, BBColor, BBColor, BBColor, BBColor],
        borderWidth: 1,
      },
      {
        label: "Suhu",
        data: [12, 19, 13, 15, 12, 20],
        backgroundColor: [
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
        ],
        borderColor: [
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
          SuhuColor,
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
