import { WrappedComponent } from '../WrappedComponent/WrappedComponent'

import React from 'react'


export function ImageCard({img, title, text}) {

    return (
        <WrappedComponent>
          <div className="card" style={{width: '18rem'}}>
          {img && (
                    <img
                        src={img}
                        className="card-img-top"
                        style={{
                            minHeight: '200px',
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Image cap"
                    />
                )}
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </WrappedComponent>
   
    )
}