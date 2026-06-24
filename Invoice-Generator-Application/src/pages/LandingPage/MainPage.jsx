import { Pencil } from 'lucide-react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import InvoiceForm from '../../components/InvoiceForm'
import TemplateGrid from '../../components/TemplateGrid'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'


function MainPage() {
  const[isEditableText,setIsEditableText]=useState(false)
  const {invoiceTitle,setInvoiceTitle,invoiceData,setInvoiceData,setSelectedTemplate}=useContext(AppContext)

  const navigate=useNavigate();

  const handleTemplateClick = (templateId) => {
     const hasInvalidItem = invoiceData.items.some(
       (item) =>!item.qty || !item.amount
     );
 
     if (hasInvalidItem) {
       toast.error("Please enter quantity and amount for all items.");
       return;
     }
     setSelectedTemplate(templateId);
     navigate("/preview")
   
   };

  const handleTitleChange=(e)=>{
     const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
    setInvoiceData((prev)=>({
      ...prev,
      title:newTitle,
    }))

  }
  const handleTitleEdit=()=>{
    setIsEditableText(true);
  }
  const handleTitleBlur=()=>{
    setIsEditableText(false)
  }
   return (
    <div className="mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items center">
           {isEditableText?(
            <input type="text" className='form-control me-2' autofocus  onBlur={handleTitleBlur} onChange={handleTitleChange}  value={invoiceTitle}/>
           ):(
            <>
            <h5 className="mb-0 m3-2">{invoiceTitle}</h5>
            <button className='btn btn-sm p-0 border-0 bg-transaprent' onClick={handleTitleEdit}>
               <Pencil className='text-primary' size={20}/>
            </button>
            </>
           )}
          </div>
        </div>
       
       <div className="row g-4 align-items-stretch">
        <div className="col-12 col-lg-6 d-flex">
          <div className="bg-white border rounded shadow-sm p-4 w-100">
        <InvoiceForm/>
          </div>
        </div>

         <div className="col-12 col-lg-6 d-flex">
          <div className="bg-white border rounded shadow-sm p-4 w-100">
            <TemplateGrid onTemplateClick={handleTemplateClick}/>
          </div>
        </div>
       </div>

      </div>
    </div>
  )
}

export default MainPage
