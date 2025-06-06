import PropTypes from "prop-types";

function List({category = "Uncategorized", items = []}){

    // fruits.sort((a,b)=> a.name.localeCompare(b.name))

    // const lowCalFruit = items.filter(fruits => fruits.calories < 100);

    const listItem = items.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
        </li>
    ));

    return (<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItem}</ol>
            </>)
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

export default List