import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { StaffsBigCard } from "../../components/staffs/StaffsBigCard";

function Staffs() {
  const staffs = [
    {
      id: 1,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York, USA",
      rate: "$50/hour",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQuEVzjK_ELOCPQmiu5inychJbcnguM8m0am_qeKEsgaNXJHuzC3Er_c&s",
      description:
        "John is the manager of the team and oversees all operations.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      service: ["Electrical", "Plumbing", "Carpentry", "Cleaning", "Gardening"],
      experience: "5 years",
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York, USA",
      rate: "$50/hour",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQuEVzjK_ELOCPQmiu5inychJbcnguM8m0am_qeKEsgaNXJHuzC3Er_c&s",
      description:
        "John is the manager of the team and oversees all operations. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      service: ["Electrical", "Plumbing", "Carpentry", "Cleaning", "Gardening"],
      experience: "5 years",
    },
    {
      id: 3,
      name: "Alice Johnson",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York, USA",
      rate: "$50/hour",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQuEVzjK_ELOCPQmiu5inychJbcnguM8m0am_qeKEsgaNXJHuzC3Er_c&s",
      description:
        "John is the manager of the team and oversees all operations.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      service: ["Electrical", "Plumbing", "Carpentry", "Cleaning", "Gardening"],
      experience: "5 years",
    },
    {
      id: 4,
      name: "Bob Brown",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York, USA",
      rate: "$50/hour",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQuEVzjK_ELOCPQmiu5inychJbcnguM8m0am_qeKEsgaNXJHuzC3Er_c&s",
      description:
        "John is the manager of the team and oversees all operations. lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      service: ["Electrical", "Plumbing", "Carpentry", "Cleaning", "Gardening"],
      experience: "5 years",
    },
    {
      id: 5,
      name: "Charlie Davis",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "New York, USA",
      rate: "$50/hour",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQuEVzjK_ELOCPQmiu5inychJbcnguM8m0am_qeKEsgaNXJHuzC3Er_c&s",
      description:
        "John is the manager of the team and oversees all operations.",
      service: ["Electrical", "Plumbing", "Carpentry", "Cleaning", "Gardening"],
      experience: "5 years",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="grid grid-cols-1  m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staffs.map((staff) => (
            <StaffsBigCard key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staffs;
