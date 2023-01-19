import React from "react";
import bigLogo from "../../../public/big_logo.png";
import Image from "next/image";

const Start = () => {
	return (
		<div className="carousel-item active d-flex align-items-center">
			<div className="container d-flex  flex-column align-items-center">
				<div className="d-flex p-3 align-items-center">
					<div className="col-lg-6 mb-0 d-flex align-items-center">
						<div className="text-align-left align-self-center">
							<h1 className="h1 text-success">
								<b>Vita</b> Strong
							</h1>
							<h3 className="h2">Welcome to VitaStrong</h3>
							<p>
								Fill out the questionnaire before speaking with the
								nutritionist to help us understand your starting point
								and the goals you want to achieve:
							</p>
						</div>
					</div>
					<div>
						<Image
							src={bigLogo}
							alt="Big logo"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<button className="btn btn-secondary next-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px]">Start</button>
			</div>
		</div>
	)
}

export default Start;