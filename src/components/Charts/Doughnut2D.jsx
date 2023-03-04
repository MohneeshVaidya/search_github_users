import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    height: "300",
    width: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        theme: "candy",
        doughnutRadius: "40%",
        decimals: 0,
        showPercentValues: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
