import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul id="list-group" className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}

							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
								// Check to see if the background is orange, if so, display the message
								item.background === "orange" ? (
									<p style={{ color: item.initial }}>
										Check store/flux.js scroll to the actions to see the code
									</p>
								) : null}
							<button id="btn-nav" className="btn text-white" onClick={() => actions.changeColor(index, "orange")}>
								<b>Change Color</b>
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button id="btn-nav" className="btn text-white "><b>Back home</b></button>
			</Link>
		</div>
	);
};
