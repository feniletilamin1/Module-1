export default function ListItem(props) {
    const { date } = props;
    const { distance } = props;
    const { onDelete } = props;
    const { id } = props;
    const dateObj = new Date(date);
    return (
        <tr className="table__row">
            <td className="table__body-column">{`${dateObj.getDate()}.${dateObj.getMonth() + 1 > 10 ? dateObj.getMonth() + 1 : "0" + (dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`}</td>
            <td className="table__body-column">{distance}</td>
            <td className="table__body-column">
                <button onClick={() => onDelete(id)}>X</button>
            </td>
        </tr>
    )
}
