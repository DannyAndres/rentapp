import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full pt-12 flex flex-row justify-start items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 sm:text-center lg:text-left">
          <h1 className="tracking-tight font-extrabold">
            <span
              className="
              text-2xl
              sm:text-4xl
              md:text-6xl
              text-green-900
              dark:text-gray-50
              block
              xl:inline
              w-full
            "
            >
              Hey! Nice to see you.
            </span>
            <span className="text-xl sm:text-3xl md:text-5xl block text-green-700 w-full">
              I&apos;m Danny, Fullstack developer
            </span>
          </h1>
          <p
            className="
            mt-3
            text-base text-gray-500
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:mx-0
            inline-flex
            items-center
          "
          >
            Currently remote coding from <b className="ml-1">Santiago, Chile</b>
            .
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
            <div className="rounded-md shadow">
              <button
                className="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-gray-50
                bg-green-600
                hover:bg-green-700
                md:py-4 md:text-lg md:px-10
              "
              >
                Get started
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="mailto:danny.aguilar@usach.cl"
                className="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-green-700
                bg-green-100
                hover:bg-green-200
                md:py-4 md:text-lg md:px-10
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email me
              </a>
            </div>
          </div>
          <div className="flex mt-5 sm:mt-8 justify-center lg:justify-start">
            <a
              href="https://github.com/dannyandres"
              className="dark:border dark:border-gray-800 rounded-md md:ml-0 mx-2 overflow-hidden"
            >
              <img
                alt="Github"
                className="w-full"
                src="https://camo.githubusercontent.com/297212f5cfd71f14f1a774a22bfd24b24bfa996aa72f4d941f790c8606ca8f0d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d2532333132313030452e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d476974687562266c6f676f436f6c6f723d7768697465"
                data-canonical-src="https://img.shields.io/badge/GitHub-%2312100E.svg?&amp;style=for-the-badge&amp;logo=Github&amp;logoColor=white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/danny-andres/"
              className="rounded-md md:mr-0 mx-2 overflow-hidden"
              rel="nofollow"
            >
              <img
                alt="LinkedIn"
                className="w-full"
                src="https://camo.githubusercontent.com/a493f6833f99fb3c85788d6d9305e6b7a42b838e5ee5d138fd9a8214a7e77472/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"
                data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white"
              />
            </a>
          </div>
        </div>
        <div
          className="
          order-first
          flex flex-row
          justify-center
          py-4
          md:py-0 md:justify-end
          sm:text-center
          lg:text-left
        "
        >
          <div
            className="
            overflow-hidden
            flex
            justify-center
            items-center
            w-1/2
            md:w-full
            rounded-full
            md:rounded-md
            bg-green-900
            border
            border-4
            border-green-900
          "
          >
            <img
              className="h-full w-full object-cover object-center"
              src="https://avatars.githubusercontent.com/u/19177489?v=4"
              alt="Danny"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
