import {
    BtnContainer,
    CategoryBtn,
    BottomBorder
} from './CategoriesStyling';

const Categories = ({ categories, filterItems }) => {
    return (
        <>
            <BtnContainer>
                {
                    categories.map((category, index) => {
                        return (
                            <>
                                <CategoryBtn key={index} onClick={() => filterItems(category)}>
                                    {category}
                                    <BottomBorder>
                                        <svg>
                                            <filter id="filter">
                                                <feTurbulence type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" result="warp" />
                                                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                                            </filter>
                                        </svg>
                                    </BottomBorder>
                                </CategoryBtn>
                            </>
                        )
                    })
                }
            </BtnContainer>
        </>
    )
}

export default Categories

