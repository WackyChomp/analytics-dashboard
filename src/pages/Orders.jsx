import React from 'react';
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, ContextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { ColumnsDirective } from '@syncfusion/ej2-react-charts';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-slate-300 rounded-3xl'>
      <Header title="Orders" category="Page"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default Orders