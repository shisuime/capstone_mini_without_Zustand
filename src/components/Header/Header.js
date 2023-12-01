import Button from "../common/Button/Button.component"
import'./Header.scss'
import { useState } from 'react';



function Header(props) {


    const [Value, setValue] = useState('');


    const onchangehandeler = (event) => {
        setValue(event.target.value);
    };




    return (
        <>

        
<div className="wrapper">
    
    
    <div className="main-div main-div3">
      <h1>ROYAL CROWN</h1>
    </div>
  </div>
            

        


       


            <div className='searchBox'>
                <input className='searchInput' type="text" name="" placeholder="Search" onChange={onchangehandeler} value={Value} />
                <Button className="searchButton" href="#">

                    <i className="material-icons">
                        search
                    </i>
                </Button>
            </div>

        </>

    );
}

export default Header