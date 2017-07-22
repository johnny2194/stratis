import React from 'react'

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
        <ul>
          <li>Menu</li>
          <li>Men</li>
          <li>Women</li>
          <li>Snow</li>
          <li>Surf</li>
        </ul>
        
        <div>Stratis</div>
        
        <ul>
          <li>Login</li>
          <li>Search</li>
          <li>Bag 0</li>
        </ul>
      </div>
		)
	}
}

export default Navigation