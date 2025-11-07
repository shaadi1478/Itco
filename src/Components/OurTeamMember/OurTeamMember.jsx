import React from "react";
import Container from "../../Container/Container";
import teamMember from "../../assets/teammember.png";
import teamMember2 from "../../assets/teammember2.png";
import teamMember3 from "../../assets/teammember3.png";

const teamData = [
  {
    id: 1,
    name: "Edoardo Romussi",
    role: "UI/UX Designer",
    image: teamMember,
  },
  {
    id: 2,
    name: "Jessica James",
    role: "Frontend Developer",
    image: teamMember2,
  },
  {
    id: 3,
    name: "Adrian Williams",
    role: "Backend Engineer",
    image: teamMember3,
  },
];

const OurTeamMember = () => {
  return (
    <section className="bg-[#E3F9F5] py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center text-black mb-12">
          <h3 className="text-[#16A571] text-lg font-medium mb-2 uppercase tracking-wider">
            Our Team Members
          </h3>
          <h1 className="text-4xl sm:text-5xl font-semibold max-w-2xl mx-auto leading-tight">
            Building a Smarter Future Through IT
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 "
            >
              <div className="overflow-hidden mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 px-2">
                {member.name}
              </h2>
              <p className="text-gray-600 mt-1 px-2">{member.role}</p>
              <div className="mt-3 h-[3px] w-10 bg-[#16A571]  rounded-full"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTeamMember;
