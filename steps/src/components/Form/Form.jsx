import List from "../List/List"
import { useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    const [listItems, setListItems] = useState([]);
    const dateField = useRef(null);
    const distanceField = useRef(null);

    const subMitHandler = (e) => {
        e.preventDefault();
        const date = dateField.current.value;
        const distance = Number(distanceField.current.value);


        if (date !== "" && distance !== "") {
            let dateExists = false;
            const items = JSON.parse(JSON.stringify(listItems))
            for (let index = 0; index < items.length; index++) {
                if (items[index].date === date) {
                    items[index].distance += distance;
                    setListItems(items);
                    dateExists = true;
                }
            }
            if (!dateExists) {
                const items = listItems.concat({
                    id: uuidv4(),
                    date: date,
                    distance: distance,
                });
                setListItems(items.sort((a, b) => new Date(b.date) - new Date(a.date)));
            }
        }

    }

    const deleteListItem = (id) => {
        setListItems(listItems.filter(el => el.id !== id));
    }

    return (
        <>
            <form onSubmit={subMitHandler} className="form">
                <div className="form__item">
                    <label htmlFor="date" className="form__label">Дата (ДД.ММ.ГГ)</label>
                    <input ref={dateField} id="date" type="date" className="form__input" />
                </div>
                <div className="form__item">
                    <label htmlFor="distance" className="form__label">Пройдено км</label>
                    <input ref={distanceField} id="distance" type="text" className="form__input" />
                </div>
                <input type="submit" className="form__submit" value="ОК" />
            </form>
            <List items={listItems} onDelete={deleteListItem} />
        </>
    )
}
