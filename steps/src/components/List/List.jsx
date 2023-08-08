import ListItem from "./ListItem"

export default function List(props) {
    const { items } = props;
    const { onDelete } = props;
    return (
        <table className="table">
            <thead className="table__thead">
                <tr className="table__row">
                    <th className="table__head-column">Дата (ДД.ММ.ГГ)</th>
                    <th className="table__head-column">Пройдено км</th>
                    <th className="table__head-column">Действия</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {items.map((item) =>
                    <ListItem id={item.id} onDelete={onDelete} key={item.id} date={item.date} distance={item.distance} />
                )}
            </tbody>
        </table>
    )
}
