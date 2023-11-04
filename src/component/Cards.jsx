import Card from "./Card";
const Cards = () => {
    let titles = [
        "rain",
        "coffee shop",
        "lofi beats",
        "waves",
        "campfire",
        "wind",
        "forest",
        "train station",
        "highway",
        "office",
        "dentist",
        "playground",
        "hospital",
        "casino",
        "carnival",
        "marching band",
        "church bells",
        "lawnmower",
        "couple arguing",
        "barn animals",
        "construction",
        "crime scene",
        "haunted dungeon",
        "fireworks",
        "beehive",
        "alien ship",
        "volcano",
        "zombie invasion",
        "medieval battle",
        "nuclear siren",
    ];

    return (
        <div className="cards">
            {titles.map((title) => (
                <Card key={title} title={title} />
            ))}
        </div>
    );
};

export default Cards;
