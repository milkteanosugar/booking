import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import Book from '../book/Book'
import Navbar from '../navbar';

const = Demo =>{
    return (



    )


}


class Homepage extends Component {
    render() {
    return (
    <div>
        <Navbar/>
        <p>hello home</p>
    </div>
    );
  }
}

export default withRouter(Homepage);
