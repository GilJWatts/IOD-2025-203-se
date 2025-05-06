const myChart = echarts.init(document.getElementById("main"));

myChart.showLoading();

const options = {
  title: {
    text: "Fake Store Product Categories",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "category",
    data: [],
    axisLabel: {
      interval: 0,
      rotate: 30,
    },
  },
  yAxis: {
    type: "value",
    name: "# of Products",
  },
  series: [
    {
      name: "# Products",
      type: "bar",
      data: [],
      label: {
        show: true,
        position: "top",
      },
    },
  ],
};

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((products) => {
    console.log("Fetched products:", products);

    const categoryCounts = {};
    products.forEach((product) => {
      const category = product.category;
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });

    console.log("Category counts:", categoryCounts);

    const categoryNames = Object.keys(categoryCounts);
    const productCounts = Object.values(categoryCounts);

    options.xAxis.data = categoryNames;
    options.series[0].data = productCounts;

    myChart.hideLoading();
    myChart.setOption(options);
  });
