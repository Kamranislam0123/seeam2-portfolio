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
        <section className="box-border py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center pb-10 sm:pb-16 md:pb-20 text-center">
                   
                    <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-solenoidal font-bold leading-tight">
                    CLIENTS FEEDBACK
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="border border-solid border-[rgba(218,197,167,0.25)] bg-[rgba(218,197,167,0.05)] flex flex-col justify-between p-6 sm:p-8 h-full"
                        >
                            <div>
                                <h2 className="text-base sm:text-lg font-solenoidal text-[#DAC5A7] font-bold ">{review.name}</h2>
                                <p className="text-sm sm:text-base text-[#DAC5A7] font-light">{review.designation}</p>
                                <p className="text-sm sm:text-base text-[#DAC5A7] font-light mt-4">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
