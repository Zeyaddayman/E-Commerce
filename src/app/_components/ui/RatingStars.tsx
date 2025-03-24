interface IProps {
    rating: number
    color?: string
    size?: "lg" | "md" | "sm"
}

const RatingStars = ({ rating, color = "#e6b800", size = "md" }: IProps) => {

    const emptyStarsCount = 5 - Math.ceil(rating);

    const ratingString = String(rating);

    let int;
    let float;

    if (ratingString.includes(".")) {
        [ int, float ] = ratingString.split(".");
    } else {
        int = ratingString;
        float = undefined;
    }

    const sizes = {
        "sm": ["25px", "22px"],
        "md": ["30px", "26px"],
        "lg": ["36px", "31px"]
    }

    const starSize = sizes[size]

    const Star = ({ fillPercentage }: { fillPercentage: number }) => {
        return (
            <div
                className="relative"
                style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    backgroundColor: color,
                    width: starSize[0],
                    height: starSize[0]
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        background: `linear-gradient(to right, ${color} 0%, ${color} ${fillPercentage}%, white ${fillPercentage}%, white 100%)`,
                        width: starSize[1],
                        height: starSize[1]
                    }}></div>
            </div>
        )
    }

    return (
        <div className="flex">
            {Array.from({ length: Number(int) }, (_, i) => <Star key={i} fillPercentage={100} />)}
            {float && <Star fillPercentage={Number(float)} />}
            {Array.from({ length: emptyStarsCount }, (_, i) => <Star key={i} fillPercentage={0} />)}
        </div>
    )
}

export default RatingStars;