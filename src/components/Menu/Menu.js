import {
    Section,
    MenuItem,
    Split,
    Photo,
    Title,
    Price,
    ItemText
} from './MenuStyling'

const Menu = ({ data }) => {
    return (
        <>
            <Section>
                {data.map(menuItem => {
                    const { id, title, img, price, desc } = menuItem;
                    return (
                        <MenuItem key={id}>
                            <Split>
                                <Photo src={img} alt={title} />
                            </Split>
                            <Split>
                                <Title>{title}</Title>
                                <ItemText>{desc}</ItemText>
                                <Price>${price}</Price>
                            </Split>
                        </MenuItem>
                    )
                })}
            </Section>
        </>
    )
}

export default Menu
