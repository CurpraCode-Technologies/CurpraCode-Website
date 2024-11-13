import React from "react";
import styles from "../../app/home.module.css";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiSwift,
  SiExpo,
  SiAndroid,
  SiAwsamplify,
  SiNestjs,
} from "react-icons/si";

const icons = [
  {
    icon: SiJavascript,
    color: "#F7DF1E",
    background: "#1e1e1e",
    size: 30,
    label: "JavaScript",
  },
  {
    icon: SiReact,
    color: "#61DAFB",
    background: "#1e1e1e",
    size: 30,
    label: "React",
  },
  {
    icon: SiNextdotjs,
    color: "#ffffff",
    background: "#1e1e1e",
    size: 30,
    label: "Nextjs",
  },
  {
    icon: SiExpo,
    color: "#3178C6",
    background: "#1e1e1e",
    size: 30,
    label: "Expo",
  },
  {
    icon: SiSwift,
    color: "#FD2020",
    background: "#1e1e1e",
    size: 30,
    label: "Swift",
  },

  {
    icon: SiHtml5,
    color: "#E34F26",
    background: "#1e1e1e",
    size: 30,
    label: "HTML5",
  },
  {
    icon: SiCss3,
    color: "#1572B6",
    background: "#1e1e1e",
    size: 30,
    label: "CSS3",
  },
  {
    icon: SiNodedotjs,
    color: "#339933",
    background: "#1e1e1e",
    size: 30,
    label: "Node.js",
  },
  {
    icon: SiNestjs,
    color: "#FD2020",
    background: "#1e1e1e",
    size: 30,
    label: "Nest.js",
  },
  {
    icon: SiAndroid,
    color: "#339933",
    background: "#1e1e1e",
    size: 30,
    label: "Android",
  },
  {
    icon: SiAwsamplify,
    color: "#FD2020",
    background: "#1e1e1e",
    size: 30,
    label: "AWS",
  },
  {
    icon: SiPython,
    color: "#3776AB",
    background: "#1e1e1e",
    size: 30,
    label: "Python",
  },
  {
    icon: SiTypescript,
    color: "#3178C6",
    background: "#1e1e1e",
    size: 30,
    label: "TypeScript",
  },
  {
    icon: SiGit,
    color: "#F05032",
    background: "#1e1e1e",
    size: 30,
    label: "Git",
  },
  {
    icon: SiDocker,
    color: "#2496ED",
    background: "#1e1e1e",
    size: 30,
    label: "Docker",
  },
];

const ToolComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 space-y-8">
      <h2
        className={`${styles.heading} lg:mx-80 text-3xl md:text-4xl lg:text-6xl  font-bold text-center mb-8`}
      >
        Industry Standard Tools and Technologies We Use
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: item.background }}
              title={item.label}
            >
              <item.icon color={item.color} size={item.size} />
            </div>
            <p className="text-xs md:text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center space-y-4 md:space-y-o  space-x-2 bg-gray-900 pt-8">
        <div className="flex items-center justify-center w-24 h-24 border-2 rounded-full bg-[#2151A6] text-white">
          <svg
            width="70"
            height="71"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_63_10286)">
              <path
                opacity="0.3"
                d="M80.0417 50.3371L73.6667 49.8787L72.4167 43.6287C71.3987 38.4307 68.6064 33.7478 64.5174 30.3809C60.4285 27.0139 55.2968 25.1721 50 25.1704C41.4167 25.1704 33.6667 29.9204 29.6667 37.5037L27.5834 41.4621L23.125 41.9204C19.0479 42.3727 15.282 44.3164 12.5515 47.3777C9.82098 50.439 8.31862 54.4017 8.33336 58.5037C8.33336 67.7121 15.7917 75.1704 25 75.1704H79.1667C86.0417 75.1704 91.6667 69.5454 91.6667 62.6704C91.6667 56.2121 86.5834 50.7537 80.0417 50.3371Z"
                fill="#F4F1EA"
              />
              <path
                d="M80.625 42.0036C79.2254 34.9107 75.4067 28.5238 69.8211 23.9338C64.2355 19.3437 57.2296 16.8353 50 16.8369C37.9583 16.8369 27.5 23.6702 22.2917 33.6702C16.1676 34.332 10.5042 37.2336 6.38954 41.8174C2.27488 46.4012 -0.000715424 52.3439 1.6872e-07 58.5036C1.6872e-07 72.2952 11.2083 83.5036 25 83.5036H79.1667C90.6667 83.5036 100 74.1702 100 62.6702C100 51.6702 91.4583 42.7536 80.625 42.0036ZM79.1667 75.1702H25C15.7917 75.1702 8.33333 67.7119 8.33333 58.5036C8.33333 49.9619 14.7083 42.8369 23.1667 41.9619L27.625 41.5036L29.7083 37.5452C31.6249 33.8155 34.5332 30.6867 38.1134 28.5033C41.6935 26.32 45.8066 25.1666 50 25.1702C60.9167 25.1702 70.3333 32.9202 72.4583 43.6286L73.7083 49.8786L80.0833 50.3369C83.2156 50.5476 86.1517 51.9369 88.3009 54.2252C90.4501 56.5135 91.6527 59.531 91.6667 62.6702C91.6667 69.5452 86.0417 75.1702 79.1667 75.1702Z"
                fill="#F4F1EA"
              />
            </g>
            <defs>
              <clipPath id="clip0_63_10286">
                <rect
                  width="100"
                  height="100"
                  fill="white"
                  transform="translate(0 0.17041)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center border-2 h-24 rounded-full bg-[#2151A6] text-white px-8 py-8 md:px-16 md:py-10">
          <h2 className="text-4xl font-bold">22</h2>
          <p className="text-xs md:text-md text-center">
            Technology stacks we leverage for creating <br /> your digital
            solutions
          </p>
        </div>

        {/* Code Icon */}
        <div className="flex items-center justify-center  border-2 w-24 h-24 rounded-full bg-[#2151A6] text-white">
          <svg
            width="70"
            height="71"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3333 75.1704L8.33333 50.1704L33.3333 25.1704L39.2708 31.1079L20.1042 50.2746L39.1667 69.3371L33.3333 75.1704ZM66.6667 75.1704L60.7292 69.2329L79.8958 50.0662L60.8333 31.0037L66.6667 25.1704L91.6667 50.1704L66.6667 75.1704Z"
              fill="#F4F1EA"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end space-y-4 md:space-y-o space-x-2 bg-gray-900 p-4">
        <div className="flex flex-col items-center border-2  justify-center h-24 rounded-full bg-[#2151A6] text-white px-16 py-10">
          <h2 className="text-3xl font-bold">110+</h2>
          <p className="text-xs md:text-sm text-center">
            Managed and mantained codebase <br /> for digital product
          </p>
        </div>

        <div className="flex flex-col items-center justify-center border-2  h-24 rounded-full bg-[#2151A6] text-white px-16 py-10">
          <h2 className="text-3xl font-bold">100%</h2>
          <p className="text-xs md:text-sm text-center">
            Expertise across all boards and <br /> use of digital tools.
          </p>
        </div>

        <div className="flex items-center justify-center w-24 h-24 border-2 rounded-full bg-[#2151A6] text-white">
          <svg
            width="70"
            height="71"
            viewBox="0 0 150 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="75.1704" r="75" fill="#131722" />
            <line
              x1="74"
              y1="0.17041"
              x2="74"
              y2="150.17"
              stroke="#2151A6"
              stroke-width="2"
            />
            <line
              y1="94.1704"
              x2="150"
              y2="94.1704"
              stroke="#2151A6"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ToolComponent;
