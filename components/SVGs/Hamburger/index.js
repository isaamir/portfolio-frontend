import React from 'react'
import PropTypes from 'prop-types'
// import Image from 'next/image'


const Hamburger = props => {
	return (
		<svg {...props} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
		xmlnsXlink="http://www.w3.org/1999/xlink" 
		x="0px" y="0px"
			viewBox="0 0 512 512" 
			// style="enable-background:new 0 0 512 512;" 
			xmlSpace="preserve"
			>
			<g>
				<path d="M36.57,73.14h182.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57
	   C16.39,146.29,0,129.89,0,109.71C0,89.5,16.39,73.14,36.57,73.14z M292.57,365.71h182.86c20.21,0,36.57,16.36,36.57,36.57
	   c0,20.18-16.36,36.57-36.57,36.57H292.57c-20.18,0-36.57-16.39-36.57-36.57C256,382.07,272.39,365.71,292.57,365.71z M36.57,219.43
	   h438.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57C16.39,292.57,0,276.18,0,256
	   C0,235.79,16.39,219.43,36.57,219.43z"/>
			</g>
		</svg>

	)
}

Hamburger.propTypes = {}

export default Hamburger