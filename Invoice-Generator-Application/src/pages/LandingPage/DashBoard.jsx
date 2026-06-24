import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { getAllInvoices } from '../../service/InvoiceService';
import toast from "react-hot-toast";
import { Plus } from 'lucide-react';
import { AppContext, initialInvoiceData } from '../../context/AppContext';
import { formatDate } from '../../Utils/formatInvoiceData';
import { useNavigate } from "react-router-dom";
import { useAuth } from '@clerk/clerk-react';




function DashBoard() {
  const[invoices,setInvoices]=useState([]);
  const{baseURL,setInvoiceData,setSelectedTemplate,setInvoiceTitle}=useContext(AppContext);
  const navigate=useNavigate();
  const {getToken}=useAuth();

  useEffect(()=>{
    const fetchInvoices=async()=>{
      try{
        const token=await getToken();
        const response=await getAllInvoices(baseURL,token);
        setInvoices(response.data);
      }
      catch(error){
        toast.error("Failed to load the invoices",error)
      }
    }
    fetchInvoices();
  },[baseURL])

  const handleViewClick=(invoice)=>{
    setInvoiceData(invoice);
    setSelectedTemplate(invoice.template || "template1");
    setInvoiceTitle(invoice.title || "New Invoice");
    navigate("/preview");
  }

  const handleCreateNew =()=>{
    setInvoiceTitle("New Invoice");
    setSelectedTemplate("template1");
    setInvoiceData(initialInvoiceData);
    navigate("/generate")
  }

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        <div className="col">
          <div  className="card h-100 shadow-sm"
              style={{ cursor: "pointer", minHeight: "270px" }} onClick={handleCreateNew}>
                <Plus size={48}/>
                <p className="mt-3 fw-medium">Create New Invoice</p>

          </div>
        </div>
      
        {
  invoices.map((invoice, idx) => {
  

    return (
      <div className='col' key={idx}>
        <div
          className="card h-100 shadow-sm"
          style={{ cursor: "pointer", minHeight: "270px" }}
          onClick={() => handleViewClick(invoice)}
        >
          {invoice.thumbnail && (
            <img
              src={invoice.thumbnail}
              className="card-img-top"
              alt="Invoice Thumbnail"
              style={{ height: "200px", objectFit: "cover" }}
            />
          )}

          <div className="card-body">
            <h6 className="card-title mb-1">{invoice.title}</h6>
          </div>
        </div>
      </div>
    );
  })
}

      </div>
    </div>
  )
}

export default DashBoard
