import React from 'react';
import { GridComponent, ColumnDirective, Search, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { ColumnsDirective } from '@syncfusion/ej2-react-charts';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-slate-300 rounded-3xl'>
      <Header title="Employees" category="Page"/>
      <GridComponent
        width="auto"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Toolbar, Search, Page ]} />
      </GridComponent>
    </div>
  )
}

export default Employees