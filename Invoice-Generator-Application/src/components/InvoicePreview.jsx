import React, { forwardRef } from 'react'
import { formatInvoiceData } from '../Utils/formatInvoiceData'
import { templateComponents } from '../Utils/invoiceTemplates';



const InvoicePreview =forwardRef (({invoiceData,template},ref) => {

  const formatedData=formatInvoiceData(invoiceData)
   const SelectedTemplate =
      templateComponents[template] || templateComponents["template1"];
  
  return (
    <div ref={ref} className='invoice-preview container px-2 py-2 overflow-x-auto'>
       <SelectedTemplate data={formatedData} />
      
    </div>
  )
})

export default InvoicePreview
