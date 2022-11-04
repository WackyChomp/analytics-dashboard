import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Filter, Sort, Selection, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-slate-300 rounded-3xl'>
      <Header title="Customers" category="Page"/>
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{
          allowEditing: true,
          allowDeleting: true
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Toolbar, Edit, Filter, Sort, Selection, Page ]} />
      </GridComponent>
    </div>
  )
}

export default Customer