function pie_chart(valor1, valor2) {

  var pieChartContent = document.getElementById('grafico');
  pieChartContent.innerHTML = '&nbsp;';

  $('#grafico').append('<canvas id="pieChartDemo"><canvas>');

  data = {
    datasets: [{
      data: [valor1, valor2],
      backgroundColor: ["#2c80b9", "#ddeaf6"]

    }],
    labels: [
      '% Porcentaje de captura',
      '% No capturado',
    ]

  };

  var ctxp = $("#pieChartDemo").get(0).getContext("2d");
  var pieChart = new Chart(ctxp, {
    type: 'pie',
    data: data,
    options: {
      tooltips: {
          // Disable the on-canvas tooltip
          enabled: true,
         
        }
        }
  });

}


function graficoVendedores(array_vendedores, arrayCotizacion) {
  console.error(arrayCotizacion);
  var pieChartContent = document.getElementById('graficoBarras');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficoBarras').append('<canvas id="barChartDemo"><canvas>');


  var data = {
    labels: array_vendedores,
    datasets: [
      {
        label: "Ventas Realizadas",
        data: arrayCotizacion,
        backgroundColor: "#32CC53",

      },    
      
    ]
  };

  var ctxb = $("#barChartDemo").get(0).getContext("2d");
  // var barChart = new Chart(ctxb).Bar(data);

  var barChart = new Chart(ctxb, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        xAxes: [{ stacked: true, 
          ticks: {
            min: 0,
            stepSize: 1
          }
        
        }],
        yAxes: [{ stacked: true }]
      },

    }

  });

}

//*-grafico vendedores 
function bar_chartVendedores(nombresClientes, arrayCotizacion) {

  var pieChartContent = document.getElementById('graficoBarrasClientes');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficoBarrasClientes').append('<canvas id="barChartVendedor"><canvas>');
  arrayColores = ["#c6e3b1", "#275f5a", "#f21450", "#881f50", "#ada4c6", "#37802a", "#9c82d4", "#4b0e0e", "#af44ab", "#b7793c"];
  var data = {
    labels: nombresClientes,
    datasets: [
      {
        label: "Nota pedido",
        data: arrayCotizacion,
        backgroundColor: arrayColores
      },
    ],

  };

  var ctxb = $("#barChartVendedor").get(0).getContext("2d");
  //  var barChart = new Chart(ctxb).Bar(data);
  var barChart = new Chart(ctxb, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            min: 0,
            stepSize: 1
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
          }
        }]
      },
    }
  });

}
//*-graficos de productos mas verndidos 
function graficoProductosMasVendidos(nombresProductos, productosVendidos) {

  var pieChartContent = document.getElementById('graficoBarrasProductosVendidos');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficoBarrasProductosVendidos').append('<canvas id="barChartProductos"><canvas>');
  arrayColores = ["#c6e3b1", "#275f5a", "#f21450", "#881f50", "#ada4c6", "#37802a", "#9c82d4", "#4b0e0e", "#af44ab", "#b7793c", "#998900", "#00093c", "#10a93c", "#aaa939", "#80a93c"];
  var data = {
    labels: nombresProductos,
    color: "#c6e3b1",
    datasets: [
      {
        label: "Producto mas vendidos",
        data: productosVendidos,
        backgroundColor: arrayColores,
      },
    ],
  };

  var ctxb = $("#barChartProductos").get(0).getContext("2d");

  var barChart = new Chart(ctxb, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            min: 0,
            stepSize: 1
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
          }
        }]
      },
    }
  });


}
/*-Ventas mensuales----------------------------------------------------*/
function areaVentasMensual(arrayMeses, arrayVentasMensual) {
  /*-limpiar el canvas---------------------------------------------------*/
  var pieChartContent = document.getElementById('graficoVentasMensual');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficoVentasMensual').append('<canvas id="areaVentasMensual"><canvas>');

  var data = {
    labels: arrayMeses,
    datasets: [
      {
        label: "Ventas en este mes",
        data: arrayVentasMensual,
        backgroundColor: "#009587",
        fill: 'start',
        borderWidth: 2,
        borderColor: "#009587",

      },
    ],

  };
  //*-creacion de grafico
  var ctxb = $("#areaVentasMensual").get(0).getContext("2d");
  
  var myLineChart = new Chart(ctxb, {
    type: 'line',
    data: data,
    options: {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{
          stacked: true,
          ticks: {
            min: 0
          }
        }],

      }
    }
  });
}

//*-graficos de productos mas verndidos 
function bar_chartRentabilidad(nombresProductos, arrayRentabilidad) {

  var pieChartContent = document.getElementById('graficoRentabilidad');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficoRentabilidad').append('<canvas id="rentabilidad"><canvas>');
  arrayColores = ["#c6e3b1", "#275f5a", "#f21450", "#881f50", "#ada4c6", "#37802a", "#9c82d4", "#4b0e0e", "#af44ab", "#b7793c", "#998900", "#00093c", "#10a93c", "#aaa939", "#80a93c"];

  var data = {
    labels: nombresProductos,
    color: "#c6e3b1",
    datasets: [
      {
        label: "Mayor rentabilidad",
        data: arrayRentabilidad,
        backgroundColor: arrayColores,
      },
    ],
  };

  var ctxb = $("#rentabilidad").get(0).getContext("2d");

  var barChart = new Chart(ctxb, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            min: 0,

          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
          }
        }]
      },
    }
  });


}

//*-graficos rentabilidad promedio nota de pedido 
function bar_RentabilidadNotaPedido(promedioVenta,promedioGanancia) {
  console.log(promedioGanancia);
  var pieChartContent = document.getElementById('graficorRentabilidadNota');
  pieChartContent.innerHTML = '&nbsp;';
  $('#graficorRentabilidadNota').append('<canvas id="rentabilidadNota"><canvas>');
  //*-colores
  arrayColores = ["#009588", "#00a1b6"];
  arrayNombre=["Ganancia Promedio","Venta Promedio"];
  datos =[promedioGanancia,promedioVenta];
  var data = {
    labels: arrayNombre,
    color: "#c6e3b1",
    datasets: [
      {
        label: "Valores promedio",
        data: datos,
        backgroundColor: arrayColores,
      },
    ],
  };

  var ctxb = $("#rentabilidadNota").get(0).getContext("2d");

  var barChart = new Chart(ctxb, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            min: 0,

          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
          }
        }]
      },
    }
  });
}

