import Button from "../common/Button/Button.component"
import'./Hader.scss'
import { useState } from 'react';


function Hader(props) {


    const [Value, setValue] = useState('');


    const onchangehandeler = (event) => {
        setValue(event.target.value);
    };



    return (
        <>

       


            <div className='searchBox'>
                <input className='searchInput' type="text" name="" placeholder="Search" onChange={onchangehandeler} value={Value} />
                <Button className="searchButton" href="#">

                    <i class="material-icons">
                        search
                    </i>
                </Button>
            </div>

        </>

    );
}

export default Hader