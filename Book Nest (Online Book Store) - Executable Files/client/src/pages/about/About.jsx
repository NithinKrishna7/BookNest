import React from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className="mt-20">
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-xl font-alata font-bold leading-7 text-logotextcolor mb-8 mt-0">
                  About Us
                </p>
                <h1 className="mt-2 font-alata text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Welcome to Book Nest!
                </h1>
                <p className="mt-6 font-hamone text-base text-justify leading-8 text-gray-700">
                  At <span className="font-bold">Book Nest</span>, we believe
                  that books are more than just words on a page—they are
                  gateways to new worlds, sources of knowledge, and companions
                  in life's journey. Our mission is to foster a love for reading
                  by providing a diverse range of books that cater to every
                  reader's taste and preference.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-60 mr-8 p-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-x-hidden">
            <img
              className="w-[48rem] max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://png.pngtree.com/background/20231030/original/pngtree-virtual-bookstore-3d-illustration-of-online-shopping-for-books-on-a-picture-image_5787307.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h3 className="mt-2 text-lg font-alata font-bold tracking-tight text-gray-900 sm:text-2xl mb-5">
                  Our Story
                </h3>
                <p className="text-justify font-hamone">
                  <span className="font-bold">Book Nest</span> was founded with
                  a passion for literature and a desire to make books accessible
                  to everyone. We started as a small online store with a curated
                  selection of books, and over time, we have grown into a
                  comprehensive online bookstore offering thousands of titles
                  across various genres. Our journey has been fueled by the love
                  and support of our readers, and we are committed to continuing
                  to provide an exceptional book-buying experience.
                </p>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl mb-5 font-alata">
                  What We Offer
                </h3>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="font-hamone text-justify">
                      <span className="font-bold">Wide Range of Genres</span>:
                      Whether you are a fan of fiction, non-fiction, mystery,
                      romance, science fiction, fantasy, or self-help, you will
                      find a book that captures your interest at Book Nest.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-hamone">
                      <span className="font-bold font-hamone">Curated Collections</span>:
                      Our team carefully selects books to ensure we offer a
                      diverse and high-quality collection. From bestsellers to
                      hidden gems, we have something for every reader.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-hamone">
                      <span className="font-bold font-hamone">
                        Easy Shopping Experience
                      </span>
                      : Our user-friendly website makes it easy to browse,
                      search, and purchase books. With detailed descriptions,
                      reviews, and recommendations, you can make informed
                      choices.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-5 text-lg font-alata font-bold tracking-tight text-gray-900 sm:text-2xl mb-5">
                  Our Commitment
                </h3>

                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="font-hamone text-justify">
                      <span className="font-bold">Quality Service</span>:
                      Providing excellent customer service and support to ensure
                      a smooth shopping experience.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-hamone">
                      <span className="font-bold font-hamone ">Reader Community</span>:
                      Building a community of book lovers where readers can
                      share their thoughts, reviews, and recommendations.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-hamone">
                      <span className="font-bold  text-justify">Sustainability</span>
                      :Promoting environmentally friendly practices by offering
                      e-books and supporting initiatives that reduce our carbon
                      footprint.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-16 text-2xl font-alata font-bold tracking-tight text-gray-900">
                  Join Our Community
                </h3>
                <p className="mt-6 font-hamone text-justify">
                  We invite you to join the Book Nest community and embark on a
                  literary adventure with us. Follow us on social media,
                  subscribe to our newsletter, and participate in our online
                  forums to stay updated on the latest book releases, author
                  interviews, and reading events. Thank you for choosing Book
                  Nest as your go-to online bookstore.<span className="font-bold">Happy reading!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
