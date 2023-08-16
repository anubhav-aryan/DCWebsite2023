import React, { useState } from 'react';


type TeamsProps = {
};
const teamsData = [
    {
      name: 'RIWAAYAT',
      danceStyle: 'KATHAK',
      imageSrc: '/Riwaayat.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti.'
    },
    {
      name: 'MIRAGE',
      danceStyle: 'INDO JAZZ & CONTEMPORARY',
      imageSrc: '/Mirage.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
    {
      name: 'UNITRIX',
      danceStyle: 'HIP HOP',
      imageSrc: '/Unitrix.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
    {
      name: 'BOLLYWOOD BADMAASH COMPANY',
      danceStyle: 'BOLLYWOOD',
      imageSrc: '/BBC.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
    {
      name: 'MAYA',
      danceStyle: 'INDIAN CLASSICAL',
      imageSrc: '/Maya.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
    {
      name: 'JNJ BHANGRA',
      danceStyle: 'BHANGRA',
      imageSrc: '/JNJ.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
    {
      name: 'CHARGERS',
      danceStyle: 'SOUTH INDIAN KUTHU AND WESTERN',
      imageSrc: '/Chargers.png',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada eget justo sed faucibus. Nulla facilisi. Curabitur volutpat fringilla tortor, non viverra odio vestibulum eu. Suspendisse potenti."
    },
  ];

const Teams:React.FC<TeamsProps> = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="flex flex-col items-center p-8 bg-black">
      <h1 className="text-4xl text-white mb-2">Our Teams</h1>
      <p className="text-center text-gray-400 mb-8">
        Club consists of seven teams with each junior team of varied dance forms across India.
      </p>
      <div className="grid grid-cols-3 gap-10 px-10 py-8">
      {teamsData.map((team, index) => (
          <div
            key={index}
            className="rounded bg-gray-100 overflow-hidden relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={team.imageSrc}
              alt={team.danceStyle}
              className="w-full h-45 object-cover rounded-t"
            />
            {hoveredIndex === index && (
              <div
                className="absolute inset-0 bg-black bg-opacity-75 text-white rounded p-4"
                style={{ display: 'block' }}
              >
                <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
                <p className="text-sm text-gray-300">{team.danceStyle}</p>
                <p className="text-sm mt-4">{team.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    )
}
export default Teams;