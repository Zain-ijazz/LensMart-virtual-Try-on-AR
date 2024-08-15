import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


const stories = [
	{
		title: "Our Goal",
		description:
			"At Lens Mart, we understand the challenges of buying glasses online. That's why we've developed a state-of-the-art virtual try-on feature that allows you to see how different frames look on your face before making a purchase. Say goodbye to uncertainty and hello to confidence as you explore our curated collection of stylish eyewear from the comfort of your home.",
		image: "/images/2.png",
	},
	{
		title: "Thank You",
		description:
			"Thank you for choosing Lens Mart for all your eyewear needs. Join us on this exciting journey as we redefine the future of online shopping, one pair of glasses at a time.",
		image: "/images/3.png",
	},
];

const StoryItem = ({ item, index }) => {
	const { title, description, image } = item;
	return (
		<>
			<div
				className={`col-span-12 md:col-span-5 ${
					index % 2 === 0
						? "order-1 md:order-2 md:col-start-7"
						: "order-2 md:order-1 md:col-start-2"
				}`}
			>
				<div
					className={`flex flex-col justify-center ${
						index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
					}`}
				>
					<h4 className="font-bold mb-4 text-6xl">{title}</h4>
					<p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
						{description}
					</p>
				</div>
			</div>
			<div
				className={`${
					index % 2 === 0
						? "order-1 md:col-start-2"
						: "order-1 md:order-2 md:col-start-7"
				} col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
			>
				<div>
					<img
						src={image}
						alt={title}
						className="max-w-full h-auto rounded-2xl"
					/>
				</div>
			</div>
		</>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const AboutUs = () => {


	return (
		<>
		<Navbar/>
		<section className="ezy__about6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-center text-center mb-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						<h2 className="text-6xl leading-snug md:text-5xl md:leading-snug font-extrabold mb-6">
							Our Story
						</h2>
						<p className="text-2xl opacity-80 mb-4">
						Our journey began with a simple yet powerful idea: to create an e-commerce platform that not only offers a wide range of high-quality eyewear but also incorporates cutting-edge technology to enhance your shopping experience. With our collective efforts in computer science and a shared vision for innovation, we decided to bring you the future of online eyewear shopping.

						</p>
					</div>
				</div>

				{stories.map((item, i) => (
					<div
						className="grid grid-cols-12 justify-center items-center mt-12"
						key={i}
					>
						<StoryItem item={item} index={i + 1} />
					</div>
				))}
			</div>
		</section>
		<Footer />
		</>
	);
};


export default AboutUs;