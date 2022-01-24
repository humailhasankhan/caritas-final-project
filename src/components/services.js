import React from 'react'

const Services = () => (
  <div className="m-2 bg-gray-200 font-lato">
    <h2 className="text-center text-4xl mt-6 p-4 w-full border-2">
      Our Services
    </h2>
    <div className="w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 list-disc">
        <li className="border-2 m-6 p-4 col-span-1 text-base">
          <span className="font-bold text-large pr-1">Education:</span>
          English language is the main barrier to young refugees entering
          training, further education and employment. We offer over 60 hours of
          English tuition each week, taught by fully qualified teachers, at
          seven different language levels.
        </li>
        <li className="border-2 m-6 p-4 col-span-1 text-base">
          <span className="font-bold text-large pr-1">Higher Education:</span>
          Employability and training, we undertake detailed case-work with
          refugees, helping them to find and apply for courses, as well as to
          skill-up to the required level for given courses. Information, advice
          and guidance is also given to equip refugees with the skills and
          information needed to enter the jobs market.
        </li>
        <li className="border-2 m-6 p-4 col-span-1 text-base">
          <span className="font-bold text-large pr-1">Qualifications:</span>
          We offer bespoke training for vital qualifications (IELTS, Functional
          Skills English, Functional Skills Maths) needed to enter training,
          employment and further education. We also offer pathways to funding
          for these qualifications.
        </li>
        <li className="border-2 m-6 p-4 col-span-1 text-base">
          <span className="font-bold text-large pr-1">Well-being support:</span>
          We offer referrals to other Caritas services and external
          organisations on a range of welfare issues, including housing,
          destitution, legal problems and mental health.
        </li>
      </ul>
    </div>
  </div>
)

export default Services
