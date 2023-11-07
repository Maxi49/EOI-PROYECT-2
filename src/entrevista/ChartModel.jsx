import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Box } from "@mui/system";

const ChartModel = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const initChart = () => {
      if (chartRef.current) {
        // Limpia la instancia del gráfico si ya existe
        if (chartInstanceRef.current !== null) {
          chartInstanceRef.current.dispose();
        }

        chartInstanceRef.current = echarts.init(chartRef.current);

        const option = {
          tooltip: {
            show:false
          },
          legend: {
            show:false,
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 81.1, name: "Las consumo por gusto propio" },
                { value: 8.1, name: "Las consumo porque otros la usan" },
                { value: 2.7, name: "por trabajo" },
                {
                  value: 2.7,
                  name: "porque es una buena fuente de info y me sirve para estudiar",
                },
                { value: 2.7, name: "por entretenimiento" },
                { value: 2.7, name: "Me parece una herramienta útil para" },
                { value: 2.7, name: "diversos ambitos" },
              ],
            },
          ],
        };

        chartInstanceRef.current.setOption(option);
      }
    };

    if (document.readyState === "complete") {
      initChart();
    } else {
      window.onload = initChart;
    }
  }, []);

  return <Box ref={chartRef} sx={{ width:'90vw', height: "600px" }} />;
};

export default ChartModel;
