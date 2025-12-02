import React from 'react'
import Identicons from 'react-identicons'
import { Link } from 'react-router-dom'
import { FaEthereum } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className="flex flex-col px-6 py-10">
            <div className="flex justify-center items-center flex-wrap">
                {Array(6)
                    .fill()
                    .map((_, i) => (
                        <ProjectCard key={i} />
                    ))}
            </div>
        </div>
    )
}

const ProjectCard = ({ project = {} }) => {
    // Placeholder dữ liệu nếu project undefined
    const mockProject = {
        title: 'Project Title',
        owner: '0x0000...0000',
        imageURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbLDNeKoddjqx1_9pIYzb8zrmR-CE6mIENQ&s'
    )}`,
        ...project,
    }

    return (
        <div className="rounded-lg shadow-lg bg-white w-64 m-4">
            <Link to="#">
                <img
                    src={mockProject.imageURL}
                    alt={mockProject.title}
                    className="rounded-xl h-64 w-full object-cover"
                />

                <div className="p-4">
                    <h5 className="font-bold mb-2">{mockProject.title}</h5>

                    <div className="flex justify-start space-x-2 items-center mb-3">
                        <Identicons
                            className="rounded-full shadow-md"
                            string={mockProject.owner}
                            size={15}
                        />
                        <small className="text-gray-700">{mockProject.owner}</small>
                    </div>

                    <div className="w-full bg-gray-300 overflow-hidden h-2 rounded-full mb-2">
                        <div
                            className="bg-green-600 h-2"
                            style={{ width: '50%' }} // placeholder width
                        ></div>
                    </div>

                    <div className="flex justify-between items-center font-bold text-gray-700 text-sm">
                        <small>0 ETH Raised</small>
                        <small className="flex items-center">
                            <FaEthereum />
                            <span>0 ETH</span>
                        </small>
                    </div>

                    <div className="flex justify-between items-center mt-2 text-gray-500 text-sm">
                        <small>0 Backers</small>
                        <small className="text-gray-500">Open</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Projects
