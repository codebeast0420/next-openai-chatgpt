import React, { FC, useState } from "react";
import Image from "next/image";
import Female from '../../../public/female.png';
import Male from '../../../public/male.png';
import HoverMale from '../../../public/male-hover.png'
import HoverFemale from '../../../public/female-hover.png';

const Gender: FC = () => {

	const [gender, setGender] = useState('');

	return (
		<div className="carousel-item active d-flex align-items-center flex-column justify-content-center">
			<div className="container d-flex flex-column align-items-center mb-20">
				<div className="fs-4">Gender</div>
				<div className="d-flex">
					{gender == 'man' ? (
						<Image src={HoverMale} alt="gender-male" width={341} height={398} onClick={() => setGender('')} />
					) : (
						<Image src={Male} alt="gender-male" width={341} height={398} onClick={() => setGender('man')} />
					)}
					{gender == 'woman' ? (
						<Image src={HoverFemale} alt="gender-female" width={263} height={398} />
					) : (
						<Image src={Female} alt="gender-female" width={263} height={398} onClick={() => setGender('woman')} />
					)}
				</div>
			</div>
			<div className="d-flex">
				<button className="btn btn-secondary prev-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px]">
					Prev
				</button>
				<button className="btn btn-secondary next-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px] ml-20">
					Next
				</button>
			</div>
		</div>
	)
}

export default Gender;