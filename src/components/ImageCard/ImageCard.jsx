import { WrappedComponent } from '../WrappedComponent/WrappedComponent'

import React from 'react'


export function ImageCard() {

    return (
        <WrappedComponent>
          <div className="card" style={{width: '18rem'}}>
          <img src='...' className="card-img-top" style={{
              minHeight: '200px',
              width: '100%',     
              height: 'auto',
            }} alt="Image cap" />
           <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build 
              on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
          </div>
        </WrappedComponent>
    )
}