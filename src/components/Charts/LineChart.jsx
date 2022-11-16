import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, LineSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
    id="line-chart"
    height= "500px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border: { width:0 }}}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ? '#0c0c0c' : '#fff'}
    >
      <Inject services={[DateTime, Legend, LineSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart