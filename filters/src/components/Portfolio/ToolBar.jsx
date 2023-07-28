const ToolBar = (props) => {
    const changeChoose = props.changeChoose;
    const categories = props.categories;

    return (
        <div class="tool-bar">
            {categories.map(cat => (
                <button
                    onClick={() => changeChoose(cat)}
                    className={props.activeTag === cat ? 'button button--active' : 'button'}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default ToolBar;