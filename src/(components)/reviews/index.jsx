const ClientReviews = () => {

    const reviews = [
        { name: "Muhammed Yaseen", designation: "Lecturer, Southeast University", review: "The service was exceptional and far exceeded our expectations. Highly recommended!" },
        { name: "MD HASAN", designation: "PRODUCT DESIGNER, CREATIVE IT INSTITUTE", review: "Seeam’s design thinking was critical in improving user engagement, and we’ve seen a significant increase in customer satisfaction since the redesign." },
        { name: "Novojit Das", designation: "Software Engineer ,Bangal group", review: "I was blown away by Seeam’s creativity and expertise. Not only did they design a stunning product, but they also streamlined the user journey, resulting in higher conversion rates." },
        { name: "Kamranul Islam", designation: "Software Engineer, Quillqraft", review: "Working with Seeam was a fantastic experience. His eye for detail and ability to create intuitive, user-friendly designs exceeded my expectations. Highly recommend him for any UI/UX projects!" },
        { name: "Tonmoy", designation: "UI/UX Designer, Quillqraft", review: "The service was exceptional and far exceeded our expectations. Highly recommended!" },
        { name: "Mizanur Rahman", designation: "Software Engineer, K53 Technology Solution", review: "The service was exceptional and far exceeded our expectations. Highly recommended!" },


    ];

    return (
        <section className="box-border py-12">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center pb-20">
                    <h1 className="text-3xl font-bold">Happy Clients</h1>
                    <p className="text-8xl font-bold">
                        CLIENTS SAYINGS
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 px-9 py-9">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="border border-solid border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] flex w-full md:w-[47%] h-[290px] px-9 flex-col justify-evenly items-start"
                        >
                            <div>
                                <h2 className="text-[18px] text-[#DAC5A7] font-bold pb-2">{review.name}</h2>
                                <p className="text-[18px] text-[#DAC5A7] font-light">{review.designation}</p>
                                <p className="text-[18px] text-[#DAC5A7] font-light mt-4">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
