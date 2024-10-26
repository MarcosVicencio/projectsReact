import './App.css'
export function App (){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src="https://unavatar.io/midudev" 
                alt="Avatar de React JS" />
                <div className='tw-followCard-info'>
                    <strong>CSS Style Sheet</strong>
                    <span className='tw-followCard-infoUserName'>@CSS</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}