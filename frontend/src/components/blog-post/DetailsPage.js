import { Link } from "react-router-dom";



export function DetailsPage () {
    return ( 
        <div className="details">

            <h3> Title title title long title very long long Title title title long title very long</h3>
            <section>
                <p> Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
                Lorem ipsum balsbajlsbaljsbafnsvfcjhszrfcvhfgj xhjjegdjgfr.
     
                </p>
            </section>

            <ul>
                <li>
                <Link to='/rating'>Like</Link>
                </li>
                <li>
                <Link to='/edit'>Edit</Link>
                </li> 
                <li>
                <Link to='/delete'>Delete</Link>
                </li>
            </ul>
            


        </div>
    
    )
}