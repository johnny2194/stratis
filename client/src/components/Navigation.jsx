import React from 'react'

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
        <ul>
          <li className="menu fa fa-bars fa-4x"></li>
          <li>Men</li>
          <li>Women</li>
          <li>Board</li>
          <li className="ski">Ski</li>
        </ul>
        
        <div>
          <span></span>
        </div>
        
        <ul className="right-nav">
          <li>Login</li>
          <li>Search</li>
          <li>Bag 0</li>
        </ul>
      </div>
		)
	}
}

export default Navigation