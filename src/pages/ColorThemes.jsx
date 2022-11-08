import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';


const currentColorSelection = (args) =>{
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorThemes = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-slate-300 rounded-3xl'>
      <Header title="Color Themes" category="Page"/>
      <div className="text-center">
        <div id="preview"/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={currentColorSelection}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Selector</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={currentColorSelection}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorThemes