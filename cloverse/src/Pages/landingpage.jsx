// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useNavigate } from "react-router-dom";
// import "./App.css";
// import cloverImage from "/src/assets/cloverse-logo.png";
// import chatImage from "/src/assets/chat.png";
// import collabImage from "/src/assets/collab.png";
// import learnaiImage from "/src/assets/learnai.png";
// import gameImage from "/src/assets/game.png";
// import smartToolsImage from "/src/assets/tools.png";

// function Tagline() {
//   const navigate = useNavigate();
//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <div className="navbar">
//         <img src={cloverImage} alt="Clover Logo" id="logo" />
//         <div className="buttons">
//           {/* Sign Up Button - Add navigation */}
//           <button onClick={() => navigate("/signin")}>Sign Up</button> {/* Navigate to Sign In page */}
//         </div>
//       </div>

//       {/* Tagline Section */}
//       <div className="tagline-container">
//         <h1>
//           A <span>Smarter</span> Way to <span>Work</span>
//         </h1>
//         <h2>
//           A <span>Better</span> Way to <span>Grow</span>
//         </h2>
//         <h3>in</h3>
//         <h1 className="brand">Cloverse</h1>
//       </div>
//     </div>
//   );
// }

// function CloverAnimation() {
//   const [showFeatures, setShowFeatures] = useState(false);

//   const features = [
//     { text: "AI Powered PDF Analysis", x: 0, y: -80 },
//     { text: "Secure File Management", x: -100, y: -20 },
//     { text: "Multi Chat System", x: 100, y: -20 },
//     { text: "AI Based Recommended System", x: -80, y: 80 },
//     { text: "Real-Time Notifications & Collaboration", x: 80, y: 80 }
//   ];

//   return (
//     <div className="relative flex flex-wrap justify-center items-center h-[40vh] sm:h-[30vh] md:h-[25vh] lg:h-[40vh] bg-black px-4">
//       {/* Clover Logo */}
//       <motion.img
//         src={cloverImage}
//         alt="Clover"
//         className="w-40 h-40 cursor-pointer"
//         onClick={() => setShowFeatures(!showFeatures)}
//         initial={{ rotate: 0 }}
//         whileTap={{ rotate: 360, scale: 1.1 }}
//         transition={{ duration: 0.5 }}
//       />

//       {/* Feature Labels */}
//       {features.map((feature, index) => (
//         <motion.div
//           key={index}
//           className="absolute bg-gray-200 px-4 py-2 rounded-xl text-black font-semibold shadow-lg text-sm sm:text-xs max-w-[120px] text-wrap"
//           initial={{ opacity: 0, x: 0, y: 0 }}
//           animate={showFeatures ? { opacity: 1, x: feature.x, y: feature.y } : { opacity: 0, x: 0, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           {feature.text}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function ExploreSolutions() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });
//   return (
//     <div className="explore-section w-full max-w-[90%] mx-auto text-center">
//       <h2 className="explore-heading">Explore Solutions</h2>
//       <p ref={ref} className={`animated-text ${inView ? "slide-in" : ""}`}>
//         Where collaboration meets innovation, and work fuels growth. Unlock smarter workflows, seamless teamwork, and gamified learning—all in one dynamic workspace.
//       </p>

//       {[
//         {
//           title: "Seamless Communication, Effortless Collaboration",
//           text: "Whether it’s a quick message, file sharing, or jumping into a meet, our seamless chat and meet sections keep the conversation flowing.",
//           image: chatImage,
//           icons: ["💬", "📂"],
//           direction: "right",
//         },
//         {
//           title: "Productivity without limits",
//           text: "Stay in sync with live edits, shared files, and smooth collaboration—wherever you work.",
//           image: collabImage,
//           icons: ["📄", "🖥️"],
//           direction: "left",
//         },
//         {
//           title: "Learn Smarter with AI-Powered Insights",
//           text: "Upload files, let AI generate structured notes, and turn content into interactive quizzes. Cloverse makes learning efficient, engaging, and personalized.",
//           image: learnaiImage,
//           icons: ["📚"],
//           direction: "right",
//         },
//         {
//           title: "Gamify Your Growth, Shape the Future",
//           text: "Step into a world where collaboration meets competition. Engage in interactive quizzes, climb the global leaderboard, and challenge your skills—all while working smarter.",
//           image: gameImage,
//           icons: ["🎮"],
//           direction: "left",
//         },
//         {
//           title: "Smart Tools for Smarter Work",
//           text: "Boost productivity with AI-powered tools, smart reminders, and real-time collaboration.",
//           image: smartToolsImage,
//           icons: ["🛠 "],
//           direction: "right",
//         },
//       ].map((section, index) => {
//         const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//         return (
//           <div key={index} ref={ref}>
//             <div className="flex justify-center">
//               <h2 className="relative px-20 py-4 text-white text-2xl md:text-3xl font-normal rounded-full bg-black inline-block shadow-[0_6px_8px_rgba(255,155,0,0.6)] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:border-[3px] before:border-yellow-600 before:rounded-full before:border-t-0 mt-10">
//                 {section.title}
//               </h2>
//             </div>

//             <div className={`flex flex-col ${section.direction === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-10 p-8`}>
//               <motion.div
//                 initial={{ opacity: 0, x: section.direction === "right" ? 100 : -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 className="bg-gray-800 text-green-400 p-6 rounded-xl shadow-lg w-72 text-center flex flex-col items-center"
//               >
//                 <p className="text-lg font-semibold">{section.text}</p>
//                 <div className="mt-3 flex space-x-2">{section.icons.map((icon, i) => <span key={i} className="text-4xl">{icon}</span>)}</div>
//               </motion.div>

//               <motion.img
//                 src={section.image}
//                 alt={section.title}
//                 initial={{ opacity: 0, x: section.direction === "right" ? 100 : -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//                 className="w-1/3 rounded-full"
//               />
//             </div>
//           </div>
//         );
//       })}
//       {/* Join Cloverse Button at the End */}
//       <button className="relative px-20 py-4 text-white text-2xl md:text-3xl font-normal rounded-full bg-black inline-block shadow-[0_6px_8px_rgba(255,155,0,0.6)] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:border-[3px] before:border-yellow-600 before:rounded-full before:border-t-0 mt-10 overflow-hidden">
//         <span className="relative z-10">Join <span className="text-yellow-400">"Cloverse"</span> Now!</span>
//         <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></span>
//       </button>

//     </div>

//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Tagline />
//       <CloverAnimation />
//       <ExploreSolutions />
//     </div>
//   );
// }
// export default App;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook
import "./App.css";
import cloverImage from "/src/assets/cloverse-logo.png";
import chatImage from "/src/assets/chat.png";
import collabImage from "/src/assets/collab.png";
import learnaiImage from "/src/assets/learnai.png";
import gameImage from "/src/assets/game.png";
import smartToolsImage from "/src/assets/tools.png";

function Tagline() {
  const { loginWithRedirect, isAuthenticated } = useAuth0(); // Auth0 login function
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (isAuthenticated) {
      navigate("/chats"); // Redirect to Chats if already logged in
    } else {
      loginWithRedirect(); // Redirect to Auth0 login page
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="navbar">
        <img src={cloverImage} alt="Clover Logo" id="logo" />
        <div className="buttons">
          {/* Sign Up Button with Auth0 */}
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="tagline-container">
        <h1>
          A <span>Smarter</span> Way to <span>Work</span>
        </h1>
        <h2>
          A <span>Better</span> Way to <span>Grow</span>
        </h2>
        <h3>in</h3>
        <h1 className="brand">Cloverse</h1>
      </div>
    </div>
  );
}

function CloverAnimation() {
  const [showFeatures, setShowFeatures] = useState(false);

  const features = [
    { text: "AI Powered PDF Analysis", x: 0, y: -80 },
    { text: "Secure File Management", x: -100, y: -20 },
    { text: "Multi Chat System", x: 100, y: -20 },
    { text: "AI Based Recommended System", x: -80, y: 80 },
    { text: "Real-Time Notifications & Collaboration", x: 80, y: 80 },
  ];

  return (
    <div className="relative flex flex-wrap justify-center items-center h-[40vh] sm:h-[30vh] md:h-[25vh] lg:h-[40vh] bg-black px-4">
      {/* Clover Logo */}
      <motion.img
        src={cloverImage}
        alt="Clover"
        className="w-40 h-40 cursor-pointer"
        onClick={() => setShowFeatures(!showFeatures)}
        initial={{ rotate: 0 }}
        whileTap={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Feature Labels */}
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="absolute bg-gray-200 px-4 py-2 rounded-xl text-black font-semibold shadow-lg text-sm sm:text-xs max-w-[120px] text-wrap"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={showFeatures ? { opacity: 1, x: feature.x, y: feature.y } : { opacity: 0, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {feature.text}
        </motion.div>
      ))}
    </div>
  );
}

function ExploreSolutions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="explore-section w-full max-w-[90%] mx-auto text-center">
      <h2 className="explore-heading">Explore Solutions</h2>
      <p ref={ref} className={`animated-text ${inView ? "slide-in" : ""}`}>
        Where collaboration meets innovation, and work fuels growth. Unlock smarter workflows, seamless teamwork, and gamified learning—all in one dynamic workspace.
      </p>

      {[
        {
          title: "Seamless Communication, Effortless Collaboration",
          text: "Whether it’s a quick message, file sharing, or jumping into a meet, our seamless chat and meet sections keep the conversation flowing.",
          image: chatImage,
          icons: ["💬", "📂"],
          direction: "right",
        },
        {
          title: "Productivity without limits",
          text: "Stay in sync with live edits, shared files, and smooth collaboration—wherever you work.",
          image: collabImage,
          icons: ["📄", "🖥️"],
          direction: "left",
        },
        {
          title: "Learn Smarter with AI-Powered Insights",
          text: "Upload files, let AI generate structured notes, and turn content into interactive quizzes. Cloverse makes learning efficient, engaging, and personalized.",
          image: learnaiImage,
          icons: ["📚"],
          direction: "right",
        },
        {
          title: "Gamify Your Growth, Shape the Future",
          text: "Step into a world where collaboration meets competition. Engage in interactive quizzes, climb the global leaderboard, and challenge your skills—all while working smarter.",
          image: gameImage,
          icons: ["🎮"],
          direction: "left",
        },
        {
          title: "Smart Tools for Smarter Work",
          text: "Boost productivity with AI-powered tools, smart reminders, and real-time collaboration.",
          image: smartToolsImage,
          icons: ["🛠 "],
          direction: "right",
        },
      ].map((section, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <div key={index} ref={ref}>
            <div className="flex justify-center">
              <h2 className="relative px-20 py-4 text-white text-2xl md:text-3xl font-normal rounded-full bg-black inline-block shadow-[0_6px_8px_rgba(255,155,0,0.6)] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:border-[3px] before:border-yellow-600 before:rounded-full before:border-t-0 mt-10">
                {section.title}
              </h2>
            </div>

            <div className={`flex flex-col ${section.direction === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-10 p-8`}>
              <motion.div
                initial={{ opacity: 0, x: section.direction === "right" ? 100 : -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-gray-800 text-green-400 p-6 rounded-xl shadow-lg w-72 text-center flex flex-col items-center"
              >
                <p className="text-lg font-semibold">{section.text}</p>
                <div className="mt-3 flex space-x-2">{section.icons.map((icon, i) => <span key={i} className="text-4xl">{icon}</span>)}</div>
              </motion.div>

              <motion.img
                src={section.image}
                alt={section.title}
                initial={{ opacity: 0, x: section.direction === "right" ? 100 : -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                className="w-1/3 rounded-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Tagline />
      <CloverAnimation />
      <ExploreSolutions />
    </div>
  );
}

export default App;
