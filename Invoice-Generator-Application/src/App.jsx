import React from 'react'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import DashBoard from './pages/LandingPage/DashBoard';
import MainPage from './pages/LandingPage/MainPage';
import PreviewPage from './pages/LandingPage/PreviewPage';
import Menubar from './components/Menubar';
import { Toaster } from 'react-hot-toast';
import UserSyncHandler from './components/UserSyncHandler';
import { RedirectToSignIn } from '@clerk/clerk-react';
import { SignedIn,SignedOut} from "@clerk/clerk-react";


function App() {
  return (
  <>
  <BrowserRouter>
   <Toaster/>
   <UserSyncHandler />
  <Menubar/>
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/dashboard" element={
    <>
      <SignedIn>
        <DashBoard/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
    }/>
    <Route path="/generate" element={
      <>
      <SignedIn>
         <MainPage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
    }/>
    <Route path="/preview" element={
      <>
      <SignedIn>
        <PreviewPage/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
    }/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

