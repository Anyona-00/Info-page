import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from "./Header"

import MainContent from "./MainContent"

import Footer from "./Footer"
    

function Page() {
    return (
        <div className='page'>
            <Header />
           
            <MainContent />

            <Footer />
        </div>
    )
} 

/*ReactDOM.render(<Page />,document.getElementById("root"))*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
