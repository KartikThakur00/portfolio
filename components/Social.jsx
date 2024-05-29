import Link from 'next/link'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/KartikThakur00" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/kartikthakur00/" },
    { icon: <FaTwitter />, path: "https://x.com/Kartik_Thakur00" },
]
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social