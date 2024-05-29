"use client"

import { Description } from '@radix-ui/react-dialog'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si'

// about data
const about = {
  title: "About Me",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus nec ultricies ultricies, nunc purus ultricies purus, nec ultricies purus purus nec ultricies",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Kartik Thakur"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 86288 31271"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year"
    },
    {
      fieldName: "Email",
      fieldValue: "kartikthakur029@gmail.com"
    },
  ]
}

// experience data
const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus nec ultricies ultricies, nunc purus ultricies purus, nec ultricies purus purus nec ultricies',
  items:[
    {
      company
    }
  ]
}

const Resume = () => {
  return (
    <div>Resume page</div>
  )
}

export default Resume