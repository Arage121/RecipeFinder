import React, {Component} from 'react';
import './css/Header.css';
import Typography from '@material-ui/core/Typography';


class Header extends Component{         /*Created for the purpose of reusability in case we decide to make more pages */
    render(){
        return(
            <div>
                <div className = "heading">
                    <Typography style={{fontFamily: "fantasy", fontSize: 20, fontWeight: "bold", letterSpacing: 2}}>Recipe Finder</Typography>        {/*Added a Bold title at the top of the web page as asked */}
                </div>

            </div>
        )
    }
}

export default Header;
