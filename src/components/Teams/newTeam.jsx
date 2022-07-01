import react from 'react';
import { createClient } from '@supabase/supabase-js'
import { useUserSession } from '../../context/AuthContext';
import './newTeam.css';
import { useContext } from 'react';
const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhbXhsbWJ5cWF2aGttaWJ1Z3NiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjQyNzM1MSwiZXhwIjoxOTcyMDAzMzUxfQ._itCzzPwvH5TyELByNBIB1gTJ5yLnv-IS9svyIafsKs'
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);


// export default async function Posts() {

//     const { user } = useUserSession();
//     console.log(user.id);


//     return (<>
//         <h1>Hello</h1>
//     </>);

//         // <div className='container'>

//         //     <div className="product-details">
//         //         <h1>CHRISTMAS TREE</h1>
//         //         <p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
//         //         <div className="control">
//         //             <button className="btn">
//         //                 <span className="price">$250</span>
//         //                 <span className="shopping-cart"></span>
//         //                 <span className="buy">Get now</span>
//         //             </button>
//         //         </div>

//         //     </div>

//         //     <div className="product-image">

//         //         <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


//         //         <div className="info">
//         //             <h2> Description</h2>
//         //             <ul>
//         //                 <li><strong>Height : </strong>5 Ft </li>
//         //                 <li><strong>Shade : </strong>Olive green</li>
//         //                 <li><strong>Decoration: </strong>balls and bells</li>
//         //                 <li><strong>Material: </strong>Eco-Friendly</li>

//         //             </ul>


//         //         </div>
//         //     </div>

//         // </div>




// }

export default async function Posts() {

    // const { user } = useUserSession();


    // try {
    //     const { data, error } = await supabase
    //         .from('team_users')
    //         .select('team')
    //         .eq('user', user);

    //    if(error){
    //     console.log(error);
    //    }
    //    else{
    //     console.log(data);
    //    }
    // }catch(error){
    //     console.log(error);
    // }











    return (
        <>
            <h1> Hello</h1>
        </>
    )
}