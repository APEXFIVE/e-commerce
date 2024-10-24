const AdvertsTile = ({ title, }) => {
    return (
        <div className="flex border-[20px] ">
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${advert.image}?shareable_link=447`} alt="title" />
        </div>
    )
}

export default AdvertsTile;