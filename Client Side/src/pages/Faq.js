import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const faqList = [
	{
		isActive: true,
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I get a refund if I cancel my subscription?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I use Easy Frontend designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		isActive: false,
		question: "Can I buy Easy Frontend extended license?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
      
        
		<div className={`${isOpen && "active"} rounded-lg mt-6`}>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} p-4 lg:p-6 bg-white shadow dark:shadow-none dark:bg-[#1E2735] rounded-xl`}
			>
				<p className="opacity-50">{faq.answer}</p>
			</div>
		</div>
      
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq = () => {

	return (
        <>
        <Navbar />
		<section className="ezy__faq4 light py-14 md:py-24 bg-[#fffffe] dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
							Frequently Asked Questions
						</h2>
						<p className="">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						{faqList.slice(0, 5).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>

        <Footer />
        </>
	);
};


export default Faq;