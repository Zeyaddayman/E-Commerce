const Star = ({ fillPercentage }: { fillPercentage: number }) => {
    return (
        <div
            className="w-[30px] h-[30px] bg-[#e6b800] relative"
            style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
        >
            <div
                className="w-[26px] h-[26px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    background: `linear-gradient(to right, #e6b800 0%, #e6b800 ${fillPercentage}%, white ${fillPercentage}%, white 100%)`
                }}></div>
        </div>
    )
}

interface IProps {
    rating: number
}

const RatingStars = ({ rating }: IProps) => {

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

    return (
        <div className="flex">
            {Array.from({ length: Number(int) }, (_, i) => <Star key={i} fillPercentage={100} />)}
            {float && <Star fillPercentage={Number(float)} />}
            {Array.from({ length: emptyStarsCount }, (_, i) => <Star key={i} fillPercentage={0} />)}
        </div>
    )
}

export default RatingStars;