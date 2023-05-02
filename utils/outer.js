import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Aamir Mushtaq,',
    decrypTexts: [
        'A Frontend Developer',
        'A Software Engineer',
        'I build things for the web',
    ],
    desciption: `As a frontend web developer With 3 years of experience, I prioritize attention to detail and specialize in creating functional websites using modern frameworks and tools. My work focuses on delivering immersive user experiences with seamless navigation and responsive design. Browse my portfolio for examples of my recent work and contact me to discuss how I can help bring your vision to life. `,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:aamirmushtaqengr@gmail.com?subject=Hello')
    }
}

export default outer
