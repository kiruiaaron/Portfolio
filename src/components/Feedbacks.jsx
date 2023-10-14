import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Cover Later.</h2>
        </motion.div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am excited to introduce myself and share a brief overview of my background, skills, and qualifications. As a dedicated professional in the field of computer science, I am passionate about leveraging technology to create innovative solutions. I have experience in various aspects of computer science, including software development, data analysis, and problem-solving.

My educational journey in computer science has equipped me with a strong foundation in algorithms, programming languages, and software engineering principles. I'm yet to hold a Computer Science Degree from Dedan Kimathi University, and my coursework included in-depth studies in areas such as Machine Learning and Artificial Intelligence. I also had the opportunity to participate in meaningful projects that enhanced my problem-solving abilities and technical expertise.

In addition to my academic background, I have gained practical experience through internships and freelance projects. These experiences have allowed me to apply my knowledge to real-world scenarios, working on  various projects. Collaborating with cross-functional teams and meeting project deadlines has been instrumental in enhancing my communication and teamwork skills.

I am passionate about staying up-to-date with the latest advancements in technology and am proficient in a range of programming languages and tools. I believe that the field of computer science is a dynamic one, and I am committed to continuous learning and improvement to stay at the forefront of industry trends.

As I look to the future, I am enthusiastic about contributing my skills and knowledge to projects that make a difference. Whether it's creating software solutions, analyzing data to derive insights, or tackling complex challenges, I am eager to take on new opportunities and expand my horizons in the world of technology.

Thank you for taking the time to review my portfolio and this cover letter. I am open to collaboration, new challenges, and opportunities to learn and grow. Please feel free to reach out to me below.

         </motion.p>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
