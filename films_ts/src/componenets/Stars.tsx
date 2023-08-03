import Star from "./Star";

type TStarProps  = {
    count: number
}

export default function Stars(props: TStarProps) {
    let { count } = props ?? 0;

    if (count > 5 || count < 1) count = 0;

    const arr = Array.from({ length: count }, (_, index) => index);

    return (
        <ul className="card-body-stars u-clearfix">
            {arr.map((star) =>
                <Star key={star} />
            )}
        </ul>
    )
}
