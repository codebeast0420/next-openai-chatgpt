import React, { useState } from "react";

export const ChatBox = () => {

	const [msgs, setMsgs] = useState(['What do you want to know? Please feel free to ask me!']);
	const [value, setValue] = useState("");

	const handleInput = React.useCallback(
		(e) => {
			setValue(e.target.value);
		},
		[]
	);

	const handleClick = async () => {
		setMsgs([...msgs, value]);
		console.log("val", value);
		const response = await fetch("/api/hello", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: value }),
		});
		const data = await response.json();
		setValue("");
		setMsgs([...msgs, data.result.choices[0].text]);
		console.log("msg", msgs)
	}

	const handleKeyDown =  (e) => {
		if (e.key === 'Enter')
		{
			handleClick();
		}
	}

	return (
		<div className="flex justify-center mt-[100px] h-[82vh]">
			<div id="frame">
				<div className="chat-content h-[75vh] bg-[#7e7c7c]">
					<div className="contact-profile">
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<p>Harvey Specter</p>
						<div className="social-media">
							<i className="fa fa-facebook" aria-hidden="true"></i>
							<i className="fa fa-twitter" aria-hidden="true"></i>
							<i className="fa fa-instagram" aria-hidden="true"></i>
						</div>
					</div>
					<div className="messages">
						<ul>
							{msgs.map((msg, index) => (
								<li className={index % 2 ? "replies" : "sent"} key={index}>
									<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
									<p>{msg}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="message-input">
						<div className="wrap flex justify-around">
							<input type="text" placeholder="Write your message..." value={value || ""} onKeyDown={handleKeyDown} onChange={handleInput} />
							<i className="fa fa-paperclip attachment" aria-hidden="true"></i>
							<button className="submit" onClick={handleClick}>Send</button>
						</div>
					</div>
				</div>
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'row-reverse',
				marginTop: '15px'
			}}>
			</div>
		</div>
	)
}