"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="bg-[#181716] text-[#DAC5A7]">
            <section className="box-border py-8 sm:py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col mb-8">
                        {/* Logo */}
                        <div className="mb-6 flex justify-center sm:justify-start">
                            <Image src={logo} alt="logo" className="w-[40px] h-[60px] sm:w-[60px] sm:h-[80px]" />
                        </div>

                        {/* 4 Rows with Lists */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {/* Social Media Links */}
                            <div className=''>
                            <div className="flex flex-col items-center sm:items-center">
                                <ul className="space-y-2">
                                    <li className="flex items-center justify-center gap-2">
                                        <div className="rounded-full bg-[#DAC5A726] p-2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-instagram"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </div>
                                        <a href="https://www.instagram.com/design_with_seeam" className="hover:text-blue-500 uppercase">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-start gap-2">
                                        <div className="rounded-full bg-[#DAC5A726] p-2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-linkedin"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </div>
                                        <a href="https://www.linkedin.com/in/seeamahmod/" className="hover:text-blue-500 uppercase">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-start gap-2">
                                        <div className="rounded-full bg-[#DAC5A726] p-2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-twitter"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </div>
                                        <a href="https://x.com/seeam_ahmod" className="hover:text-blue-500 uppercase">
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-start gap-2">
                                        <div className="rounded-full bg-[#DAC5A726] p-2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-behance"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                                            </svg>
                                        </div>
                                        <a href="https://www.behance.net/seeamahmod" className="hover:text-blue-500 uppercase">
                                            Behance
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-start gap-2">
                                        <div className="rounded-full bg-[#DAC5A726] p-2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-dribbble"
                                                viewBox="0 0 16 16"
                                            >
                                                <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837z" />
                                            </svg>
                                        </div>
                                        <a href="https://www.linkedin.com/in/seeamahmod/" className="hover:text-blue-500 uppercase">
                                            Dribbble
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col items-center sm:items-center">
                                <ul className="space-y-2 text-center sm:text-left">
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Contact Me
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Additional Links 1 */}
                            <div className="flex flex-col items-center sm:items-center">
                                <ul className="space-y-2 text-center sm:text-left">
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Experience
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Additional Links 2 */}
                            <div className="flex flex-col items-center sm:items-center">
                                <ul className="space-y-2 text-center sm:text-left">
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Poduct Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Graphc Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-blue-500 uppercase">
                                            Sayings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0">


                        <a
                            href="https://wa.me/8801306409978"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-[#DAC5A70D] backdrop-filter backdrop-blur-sm text-primary px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-[#DAC5A726] transition duration-300 flex items-center justify-center space-x-2 border border-[#DAC5A733] text-sm sm:text-base"
                        >
                            <div className="rounded-full bg-[#DAC5A726] p-1 sm:p-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-whatsapp"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </div>
                            <span className="hidden sm:inline">{isHovered ? "+880 1306-409978" : "Direct Message"}</span>
                            <span className="sm:hidden"> Direct Message</span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center pt-4">
                        <p className=" text-sm sm:text-base">&copy; SEEAM AHMOD 2024 ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </section>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 backdrop-filter backdrop-blur-sm bg-[#DAC5A70D] hover:bg-[#C5B190] text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg border border-[#DAC5A733]"
                    aria-label="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </footer>
    );
};

export default Footer;