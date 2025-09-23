import { WrappedComponent } from '../WrappedComponent/WrappedComponent'


export function Card() {
 
    return(
        <WrappedComponent>
                  <div className="card" style={{width: '18rem'}}>
                   <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                  </div>
        </WrappedComponent>
    )
}