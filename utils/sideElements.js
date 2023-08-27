import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/isaamir',
        'instagram': 'https://www.instagram.com/iaamirmohammad/',
        'twitter': 'https://twitter.com/iizaamir',
        'linkedin': 'https://www.linkedin.com/in/aamir-mushtaq-engr/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'aamirmushtaqengr@gmail.com',
        onClick: () => openLink('mailto:aamirmushtaqengr@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements