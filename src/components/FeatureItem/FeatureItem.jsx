import './FeatureItem.css';

function FeatureItem({icon, title, text}) {  
    return(
        <div className='feature-item'>
            <img className='feature-item-icon' src={icon} alt={`${title} icon`}/>
            <h3 className='feature-item-title'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem;