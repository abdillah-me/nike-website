type Props = {
    imgUrl: {
        thumbnail: string;
        bigShoe: string;
    };
    setBigShoeImg: (string: string) => void;
    bigShoeImg: string;
};
const ShoeCard: React.FC<Props> = ({ imgUrl, setBigShoeImg, bigShoeImg }) => {
    const handleClick = () => {
        if (imgUrl.bigShoe !== bigShoeImg) {
            setBigShoeImg(imgUrl.bigShoe);
        }
    };
    return (
        <div
            onClick={() => handleClick()}
            className={`border-2 rounded-xl ${
                bigShoeImg === imgUrl.bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm: flex-1`}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgUrl.thumbnail}
                    alt="shoe-collection"
                    width={127}
                    height={102}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;
