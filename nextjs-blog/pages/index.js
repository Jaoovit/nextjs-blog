import { useStage } from 'react';
function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>
}

function Homepage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = React.useStage(0);

    function handleClick() {
        setLikes(likes + 1);
    }

        return (
        <div>
            <Header title="Develop. Preview. Ship" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
      );
    }